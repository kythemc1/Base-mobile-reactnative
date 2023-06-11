import {API} from '../Configs/Constants/API';
import Axios, {setDefaultHeaders} from '../Services/Axios';
import {setAuth} from '../Store/Reducers/authSlice';
import {store} from '../Store/reduxProvider';

let refreshTokenPromise: Promise<boolean> | null = null;

const getNewToken = async () => {
    const {auth} = store.getState().auth;

    try {
        const {data} = await Axios({
            method: 'post',
            url: API.AUTH.REFRESH_TOKEN,
            data: {
                refreshToken: auth.refreshToken,
            },
        });

        if (data.status !== 'SUCCESS') return false;

        console.log('refreshToken');
        store.dispatch(
            setAuth({
                ...auth,
                token: data.accessToken,
                refreshToken: data.refreshToken,
            }),
        );

        return true;
    } catch {
        return false;
    }
};

const refreshToken = () => {
    if (refreshTokenPromise) return refreshTokenPromise;
    refreshTokenPromise = new Promise((resolve, reject) => {
        resolve(getNewToken());
    });
    refreshTokenPromise.finally(() => (refreshTokenPromise = null));
    return refreshTokenPromise;
};

export {refreshToken};

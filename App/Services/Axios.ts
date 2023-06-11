import axios, {AxiosRequestHeaders} from 'axios';
import {API_ROOT, TIMEOUT} from 'Configs/Constants/API';
import {store} from 'Store/reduxProvider';
import Navigator from '../Utils/Navigator';
import {refreshToken} from 'Utils/RefreshToken';

const instance = axios.create({
    baseURL: API_ROOT,
    timeout: TIMEOUT,
});

export function setDefaultHeaders(headers: AxiosRequestHeaders) {
    Object.keys(headers).forEach(key => {
        instance.defaults.headers.common[key] = headers[key];
    });
}

instance.interceptors.response.use(
    request => {
        return request;
    },
    async err => {
        const originalRequest = err.config;
        if (await refreshToken()) {
            originalRequest.headers.Authorization = `Bearer ${
                store.getState().auth.auth.token
            }`;
            return instance(originalRequest);
        } else {
            Navigator.reset('Login');
            await Promise.reject(err);
        }
        return Promise.reject(err);
    },
);

export default instance;

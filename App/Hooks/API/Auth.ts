import {API_PATHS} from 'Services/Api';
import {API} from 'Configs/Constants/API';
import {QUERY_KEY} from 'Configs/Constants/QueryKeys';
import {useState} from 'react';
import {useMutation} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';
import Axios from '../../Services/Axios';
import {authSlice, logout, setAuth, setIsLoading, setLocalUser, setUser} from 'Store/Reducers/authSlice';
import {RootState, store} from 'Store/reduxProvider';
import {useDebouncedCallback} from 'use-debounce';
import Navigator from '../../Utils/Navigator';
import axios from 'axios';
import {useToast} from 'Hooks/useToast';
import {useTranslation} from 'react-i18next';
import navigator from '../../Utils/Navigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IAuthState} from 'Store/Models';
import * as url from 'url';
import header from 'Components/Commons/Header/Header';
import {CLEAR_DATA_DOCUMENT_TYPE} from 'Store/Reducers/documentTypeSlice';
import {CLEAR_DATA_MY_DOCUMENT} from 'Store/Reducers/myDocumentSlice';

const fetchAccount = async () => {
    const {data} = await Axios({
        method: 'get',
        url: API.AUTH.ACCOUNT,
    });
    return data.data;
};

export const useAccount = () =>
    useMutation(() => fetchAccount(), {
        onSuccess: data => {
            store.dispatch(setUser(data));
        },
        onError: error => {
            console.log(error);
        },
        mutationKey: [QUERY_KEY.AUTH.ACCOUNT],
    });

export const useLogin = () => {
    const {mutateAsync: onGetAccountAsync} = useAccount();
    const {
        mutateAsync: onLoginAsync,
        isLoading: loading,
        isSuccess: success,
    } = useMutation(
        async ({username, password}: {username: string; password: string}) => {
            // Navigator.reset('BottomTabNavigation');
            // return;
            const {data} = await Axios({
                method: 'post',
                url: API.AUTH.LOGIN,
                data: {
                    username,
                    password,
                },
            });
            return data;
        },
    );

    const onLogin = useDebouncedCallback(
        async (account: {username: string; password: string}) => {
            await onLoginAsync(account);
            await onGetAccountAsync();
        },
        250,
    );
    return {
        onLogin,
        loading,
        success,
    };
};

export const useAuth = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {showToast} = useToast();
    const userId = useSelector((state: RootState) => state.auth.user?.id);
    const fullname = useSelector((state: RootState) => state.auth.user?.username);
    const email = useSelector((state: RootState) => state.auth.user?.email);
    const token = useSelector((state: RootState) => state.auth.auth.token);
    const localUsername =useSelector((state:RootState)=>state.auth.localUser.userName);
    const [account, setAccount] = useState<{
    username: string;
    password: string;
  }>({
      username: '',
      password: '',
  });
    const [resetPasswordValue, setResetPasswordValue] = useState<{
    password: string;
    newPassword: string;
    confirmNewPassword: string;
  }>({
      password: '',
      newPassword: '',
      confirmNewPassword: '',
  });
    const [accountRecovery, setAccountRecovery] = useState<{
    username: string;
    email: string;
  }>({
      username: '',
      email: '',
  });

    const onSetAccount = (field: 'username' | 'password', value: string) => {
        setAccount({
            ...account,
            [field]: value,
        });
    };
    const onLogout = async () => {
        const fcmTokenDevice = await AsyncStorage.getItem('fcmToken');
        console.log('in ra', fcmTokenDevice,' ádasd' ,token);
        await axios.delete(`${API_PATHS.DELETE_USER_DEVICE}?deviceToken=${fcmTokenDevice}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res, 'delete');
        });
        dispatch(logout());
        Navigator.reset('SignIn');
    };

    const onSetAccountRecovery = (field: 'username' | 'email', value: string) => {
        setAccountRecovery({
            ...accountRecovery,
            [field]: value,
        });
    };
    const onSetResetPassword = (
        field: 'password' | 'newPassword' | 'confirmNewPassword',
        value: string,
    ) => {
        setResetPasswordValue({
            ...resetPasswordValue,
            [field]: value,
        });
    };

    const forgotPassword = useDebouncedCallback(
        async ({username, email}: {username: string; email: string}) => {
            const body = {
                email: email,
                username: username,
            };
            try {
                const responsejs = await axios({
                    method: 'post',
                    url: API_PATHS.PASSWORD_FORGOT,
                    data: body,
                });
                if (responsejs.data.status === 'FAILED') {
                }
                if (responsejs.status === 200) {
                    dispatch(
                        setUser({
                            username: null,
                            id: null,
                            address: null,
                            taxCodeCompany: null,
                            avatar: null,
                            birthday: null,
                            firstName: null,
                            gender: null,
                            fullNameUser: null,
                            status: null,
                            email: null,
                            showAlertRecovery: false,
                            showAlertSignIn: false,
                            showAlertSignIn5: false,
                            user_keycloak_id: null,
                            showPasswordnotmatch: false,
                            showPassworderror: null,
                        }),
                    );
                } else {
                    // Navigator.reset('BottomTabNavigation');
                }
                Navigator.reset('BackLogin');
            } catch (error) {
                showToast({
                    type: 'error',
                    title: `${t('passRecovery.message_forgot_error')}`,
                });
                dispatch(setIsLoading(false));
            }
        },
    );

    const Login = useDebouncedCallback(
        async ({username, password}: {username: string; password: string}) => {
            let dataInput = {
                username: username,
                password: password
            };
            try {
                console.log('tai khoan ',username );
                if(username ==''){
                    console.log('khong co ' );
                    dataInput={
                        username: localUsername,
                        password: password
                    };
                }
                const responsejs = await axios({
                    method: 'post',
                    url: API_PATHS.LOGIN,
                    data: dataInput

                });

                const resData = responsejs.data.data;

                dispatch(
                    setAuth({
                        isLogged: true,
                        token: resData.accessToken,
                        refreshToken: resData.refreshToken,
                        refreshTokenExpiredDate: null,
                        type: null,
                    })
                );
                dispatch(setLocalUser({
                    userName:username,
                    password:password
                }));
                dispatch(
                    // @ts-ignore
                    setUser({
                        username: resData.username,
                        id: resData.userId,
                        address: null,
                        taxCodeCompany: resData.taxCodeCompany,
                        avatar: null,
                        birthday: null,
                        firstName: null,
                        gender: null,
                        fullNameUser: resData.fullName,
                        status: null,
                        email: responsejs.data.data.companyId,
                        showAlertRecovery: false,
                        showAlertSignIn: true,
                    }),
                );
                Navigator.reset('TabNavigation');
                showToast({
                    type: 'success',
                    title: `${t('sign_in.message_login_success', {
                        name: `${resData.fullName}`,
                    })}`,
                });
                dispatch(setIsLoading(false));
                await AsyncStorage.setItem('firstLogin', 'active');
            } catch (error) {
                showToast({
                    type: 'error',
                    title: `${t('sign_in.message_login_error')}`,
                });
                dispatch(setIsLoading(false));
            }
            // }
        },
    );
    const ResetPassword = useDebouncedCallback(
        async ({
            password,
            newPassword,
            confirmNewPassword,
        }: {
      password: string;
      newPassword: string;
      confirmNewPassword: string;
    }) => {
            try {
                const response = await axios.post(
                    `${API_PATHS.PASSWORD_RESET}`,
                    {
                        oldPassword: `${password}`,
                        newPassword: `${newPassword}`,
                        newPasswordConfirm: `${confirmNewPassword}`,
                        userId: `${userId}`,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );
                if (response.data.status === 'OK') {
                    dispatch(logout());
                    Navigator.reset('ChangePasswordSuccess');
                } else {
                    console.log('sai roi');
                }
            } catch (error) {
                dispatch(
                    setUser({
                        username: fullname,
                        id: null,
                        address: null,
                        authorities: null,
                        avatar: null,
                        birthday: null,
                        firstName: null,
                        gender: null,
                        lastName: null,
                        status: null,
                        email: email,
                        showAlertRecovery: false,
                        showAlertSignIn: true,
                        showAlertSignIn5: false,
                        user_keycloak_id: null,
                        showPasswordnotmatch: null,
                        showPassworderror: true,
                    }),
                );
            }
            // }
        },
    );

    return {
        account,
        onSetAccount,
        onLogout,
        Login,
        onSetAccountRecovery,
        forgotPassword,
        accountRecovery,
        onSetResetPassword,
        resetPasswordValue,
        ResetPassword,
    };
};

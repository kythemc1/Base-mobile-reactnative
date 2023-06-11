import {View} from 'react-native-ui-lib';
import React, {useEffect, useState} from 'react';
import './App/Configs';
import {Provider} from 'react-redux';
import {persistor, store} from 'Store/reduxProvider';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClientProvider} from 'react-query';
import queryClient from './App/Services/QueryClient';
import RNBootSplash from 'react-native-bootsplash';
import AppNavigation from './App/Navigations/AppNavigation';
import {setDefaultHeaders} from 'Services/Axios';
import {ToastProvider, useToast} from 'Hooks/useToast';
import {useNetworkStatus} from 'Hooks/useNetworkStatus';
import {InternetConnectionModal} from 'Components/Commons/Modals/InternetConnectionModal';
import {Provider as PaperProvider} from 'react-native-paper';
import {getFcmTokenFireBase, NotificationService, reQuesUserPermission} from 'Utils/Notification';
import {useTranslation} from 'react-i18next';

export default function App() {
    const {t} = useTranslation();
    const [checkInternet, setCheckInternet] = useState(false);
    const Loading = () => <View></View>;
    const restoreToken = async () => {
        const {auth} = await store.getState().auth;
        if (auth.isLogged) {
            //@ts-ignore
            setDefaultHeaders({
                Authorization: `${auth.type} ${auth.token}`
            });
        }
    };

    const onBeforeLift = () => {
        restoreToken();
        RNBootSplash.hide();
    };
    const {showToast} = useToast();
    const isConnected = useNetworkStatus();
    useEffect(() => {
        reQuesUserPermission();
    }, []);
    useEffect(() => {
        if (isConnected === true) {
            showToast({
                type: 'success',
                title: 'Mạng đã kết nối'
            });
        } else {
            setCheckInternet(true);
            showToast({
                type: 'error',
                title: 'Mạng không kết nối'
            });
        }
    }, [isConnected]);
    return (
        <ToastProvider>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <PersistGate
                        persistor={persistor}
                        loading={<Loading/>}
                        onBeforeLift={onBeforeLift}>
                        <PaperProvider>
                            <AppNavigation/>
                            <InternetConnectionModal
                                subtitle={t('internet.sub_no_internet')}
                                isConnected={checkInternet} title={t('internet.no_internet')}
                                // img={images.img_nointernet}
                                onPress={() => {
                                    setCheckInternet(false);
                                }}
                            />
                        </PaperProvider>
                    </PersistGate>
                </QueryClientProvider>
            </Provider>
        </ToastProvider>
    );
}

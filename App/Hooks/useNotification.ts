import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, Platform} from 'react-native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';
import {getNotification} from 'Store/Actions/getNotification';
import {pageSize} from 'Configs/Constants/PageSize';
import DeviceInfo from 'react-native-device-info';

export function useNotification() {

    const paramsNotification =
        {
            'page': 0,
            'size': pageSize[10],
            'sorts': {}
        };

    const dispatch = useDispatch();
    const {token, listNotification} = useSelector((state: RootState) => ({
        token: state.auth.auth.token,
        listNotification: state.notification.listNotification
    }));

    useEffect(() => {
        // @ts-ignore
        dispatch(getNotification(paramsNotification, token, listNotification));
    }, []);

    return {listNotification};
}


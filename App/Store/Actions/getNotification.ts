import {NotificationInterface, ParamsNotification} from 'Store/Models';
import {GET_NOTIFICATION_FAIL, GET_NOTIFICATION_SUCCESS} from 'Store/Reducers/notificationSlice';
import axios from 'axios/index';
import {API_PATHS} from 'Services/Api';

export const getNotification = (params: ParamsNotification, token: string, state:any) => async (dispatch: any) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        const response = await axios.post(API_PATHS.GET_NOTIFICATION, params, config);
        const newData = response.data.data.data;
        dispatch(GET_NOTIFICATION_SUCCESS(
            // [
            //     ...state,
            //     ...newData.map((state: NotificationInterface) => ({
            //         typeNotification: state.type,
            //         contentNotification: state.content,
            //         useIdNotification: state.userId,
            //         notificationId: state.notificationId,
            //         titleNotification: state.title,
            //         dataIdNotification: state.dataId,
            //         hasReadNotification: state.hasRead
            //     }))
            // ]
            newData.map((state: NotificationInterface) => ({
                typeNotification: state.type,
                contentNotification: state.content,
                useIdNotification: state.userId,
                notificationId: state.notificationId,
                titleNotification: state.title,
                dataIdNotification: state.dataId,
                hasReadNotification: state.hasRead,
                createTimeNotification:state.createTime
            }))
        ));
    } catch (e) {
        dispatch(GET_NOTIFICATION_FAIL(e));
    }
};

import {createSlice} from '@reduxjs/toolkit';
import {InitialNotificationInterface} from 'Store/Models';

const initialState: InitialNotificationInterface = {
    listNotification: [],
    isLoading: false,
    isError: '',
    uniqueId: '',
    deviceId: ''
};
const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: {
        INIT(state) {
            state.isLoading = true;
            state.isError = '';
        },
        GET_NOTIFICATION_SUCCESS(state, action) {
            state.listNotification = action.payload;
            state.isLoading = false;
            state.isError = '';
        },
        GET_NOTIFICATION_FAIL(state, action) {
            state.isLoading = false;
            state.isError = action.payload;
        },
        SET_UNIQUE_ID(state, action) {
            state.uniqueId = action.payload;
        }
    },

});
export const {INIT, GET_NOTIFICATION_SUCCESS, GET_NOTIFICATION_FAIL} = notificationSlice.actions;
export default notificationSlice.reducer;

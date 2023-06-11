import { API_PATHS } from 'Services/Api';
import axios from 'axios';
import { GetCreatorInterface, ParamsCreator } from 'Store/Models';
import { ADD_VALUE_CREATOR, GET_LIST_FAIL, GET_LIST_SUCCESS, INIT } from 'Store/Reducers/creatorSlice';

export const getCreator = (params: ParamsCreator, token: string) => async (dispatch: any) => {
    dispatch(INIT());
    const config = { params: params, headers: { Authorization: `Bearer ${token}` } };
    try {
        const respons = await axios.get(
            API_PATHS.GET_CREATOR, config
        );
        const newData = respons.data.data;
        /* Change name data fields call api biến đổi các trường của api thành tên có nghĩa dễ đọc dễ sử dụng */
        dispatch(
            GET_LIST_SUCCESS(
                newData.map((item: GetCreatorInterface) => ({
                    userIdCreator: item.userId,
                    usernameCreator: item.username,
                    emailCreator: item.email,
                    fullNameCreator: item.fullName,
                    phoneNumberCreator: item.phoneNumber,
                    typeCreator: item.type,
                    branchId: item.branchId,
                    companyId: item.companyId,
                    position: item.position,
                    mainDepartment: item.mainDepartment,
                    orderDepartment: item.orderDepartment,
                    orderUser: item.orderUser
                }))
            )
        );
        dispatch(
            ADD_VALUE_CREATOR(
                newData.map((item: GetCreatorInterface) => ({
                    label: item.fullName,
                    value: item.username
                }))
            )
        );
    } catch (error) {
        dispatch(GET_LIST_FAIL(error));
    }
};

import { API_PATHS } from 'Services/Api';
import { Filter, GetCustomerInterface } from 'Store/Models';
import {
    GET_LIST_FAIL,
    GET_LIST_SEARCH,
    GET_LIST_SUCCESS,
    INIT,
    SET_LOADING,
    SET_TOTAL_PAGES
} from 'Store/Reducers/customerSlice';
import axios from 'axios';

export const getCustomer = (filter: Filter, token: string, state: any) => async (dispatch: any) => {
    dispatch(SET_LOADING());
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
        const respons = await axios.post(
            API_PATHS.GET_MANAGE_CUSTOMER,
            filter,
            config
        );
        const newData = respons.data.data.content;
        dispatch(SET_TOTAL_PAGES(respons.data.data.totalPages));
        /* Change name data fields call api biến đổi các trường của api thành tên có nghĩa dễ đọc dễ sử dụng */
        dispatch(
            GET_LIST_SUCCESS(
                [
                    ...state,
                    ...newData.map((item: GetCustomerInterface) => ({
                        idCustomer: item.id,
                        nameCustomer: item.name,
                        numberPapersCustomer: item.certificateOrTaxCode,
                        addressCustomer: item.address,
                        emailCustomer: item.email,
                        phoneNumberCustomer: item.phone,
                        typeCustomer: item.type,
                        createPerson: item.userCreatedName
                    }))
                ]
            ));

    } catch (error) {
        dispatch(GET_LIST_FAIL(error));
    }
};

export const getSearchCustomer = (filter: Filter, token: string) => async (dispatch: any) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    dispatch(INIT());
    try {
        const respons = await axios.post(
            API_PATHS.GET_MANAGE_CUSTOMER,
            filter,
            config
        );
        const newData = respons.data.data.content;
        /* Change name data fields call api biến đổi các trường của api thành tên có nghĩa dễ đọc dễ sử dụng */
        dispatch(
            GET_LIST_SEARCH(
                newData.map((item: GetCustomerInterface) => ({
                    idCustomer: item.id,
                    nameCustomer: item.name,
                    numberPapersCustomer: item.certificateOrTaxCode,
                    addressCustomer: item.address,
                    emailCustomer: item.email,
                    phoneNumberCustomer: item.phone,
                    typeCustomer: item.type,
                    createPerson: item.userCreatedName
                }))
            ));
    } catch (e) {
        dispatch(GET_LIST_FAIL(e));
    }
};


import { CustomerInterface } from 'Store/Models';
import { createSlice } from '@reduxjs/toolkit';
//@ts-ignore
const initialState: CustomerInterface = {
    listCustomers: [],
    listSearchCustomer: [],
    isLoading: false,
    error: '',
    valueCustomer: [
        {
            label: 'Tổ Chức',
            value: 'BUSINESS'
        },
        {
            label: 'Cá Nhân',
            value: 'PERSONAL'
        }],
    valueDropdownCustomer: '',
    isFocusCustomer: false,
    totalPages: 0,
    loadingPagination: false
};

const customerSlice = createSlice({
    name: 'customer',
    initialState: initialState,
    reducers: {

        INIT(state) {
            (state.isLoading = true), (state.error = '');
        },
        GET_LIST_SUCCESS(state, action) {
            (state.loadingPagination = false),
            (state.isLoading = false),
            (state.listCustomers = action.payload);
        },
        GET_LIST_SEARCH(state, action) {
            (state.isLoading = false),
            (state.listSearchCustomer = action.payload);
        },
        GET_LIST_FAIL(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        SET_LOADING(state) {
            (state.loadingPagination = true), (state.error = '');
        },
        SET_VALUE_DROPDOWN_CUSTOMER(state, action) {
            state.valueDropdownCustomer = action.payload;
        },
        SET_ISFOCUS_CUSTOMER(state, action) {
            state.isFocusCustomer = action.payload;
        },
        SET_TOTAL_PAGES(state, action) {
            state.totalPages = action.payload;
        }

    }
});

export const {
    INIT,
    GET_LIST_SUCCESS,
    GET_LIST_FAIL,
    SET_ISFOCUS_CUSTOMER,
    SET_VALUE_DROPDOWN_CUSTOMER,
    SET_TOTAL_PAGES,
    GET_LIST_SEARCH,
    SET_LOADING
} = customerSlice.actions;

export default customerSlice.reducer;

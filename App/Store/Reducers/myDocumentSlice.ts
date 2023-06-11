import {createSlice} from '@reduxjs/toolkit';
import {IdSort} from 'Configs/Constants/ConstantsId';

const initialState = {
    isLoading: false,
    isError: '',
    listMyDocument: [],
    totalElement: 0,
    selectItemData: [],
    documentStatus: '',
    nameStatusDocument: '',
    dataSearchDocument: [],
    statusId: '',
    sortDocument: '',
    sortId: IdSort.id_date,
    sortType: false,
    sortStatus: true,
    startDate: '',
    endDate: '',
    nameDate: '',
    pageData: 0,
    flagStatus: 'manage',
};
const slice = createSlice({
    name: 'myDocument',
    initialState: initialState,
    reducers: {
        INIT(state) {
            state.isLoading = true;
            state.isError = '';
        },
        SET_IS_LOADING(state, actions) {
            state.isLoading = actions.payload;
        },
        GET_LIST_MY_DOCUMENT_SUCCESS(state, actions) {
            state.listMyDocument = actions.payload;
            state.isError = '';
        },
        GET_DATA_SEARCH_DOCUMENT_SUCCESS(state, actions) {
            state.dataSearchDocument = actions.payload;
            state.isError = '';
        },
        GET_FAIL(state, actions) {
            state.isLoading = false;
            state.isError = actions.payload;
        },
        SET_SORT_TYPE(state, actions) {
            state.sortType = actions.payload;
        },
        SET_TOTAL_ELEMENT(state, actions) {
            state.totalElement = actions.payload;
        },
        SET_SELECT_ITEM_DATA(state, actions) {
            state.selectItemData = actions.payload;
        },
        SET_STATUS_DOCUMENT(state, actions) {
            state.documentStatus = actions.payload;
        },
        SET_STATUS_ID(state, actions) {
            state.statusId = actions.payload;
        },
        SET_SORT_DOCUMENT(state, actions) {
            state.sortDocument = actions.payload;
        },
        SET_SORT_ID(state, actions) {
            state.sortId = actions.payload;
        },
        SET_SORT_STATUS(state, actions) {
            state.sortStatus = actions.payload;
        },
        SET_START_DATE(state, actions) {
            state.startDate = actions.payload;
        },
        SET_END_DATE(state, actions) {
            state.endDate = actions.payload;
        },
        SET_NAME_DATE(state, actions) {
            state.nameDate = actions.payload;
        },
        SET_PAGE_DATA(state, actions) {
            state.pageData = actions.payload;
        },
        SET_FLAG_STATUS(state, actions) {
            state.flagStatus = actions.payload;
        },
        SET_NAME_STATUS_DOCUMENT(state, actions) {
            state.nameStatusDocument = actions.payload;
        },
        CLEAR_DATA_MY_DOCUMENT(state) {
            state.isLoading = false;
            state.isError = '';
            state.listMyDocument = [];
            state.totalElement = 0;
            state.selectItemData = [];
            state.documentStatus = '';
            state.dataSearchDocument = [];
            state.statusId = '';
            state.sortDocument = '';
            state.sortId = IdSort.id_date;
            state.sortType = false;
            state.sortStatus = true;
            state.startDate = '';
            state.endDate = '';
            state.nameDate = '';
            state.pageData = 0;
            state.flagStatus='';
            state.nameStatusDocument = '';
        },
    },
});
export const {
    INIT,
    GET_LIST_MY_DOCUMENT_SUCCESS,
    GET_FAIL,
    SET_TOTAL_ELEMENT,
    GET_DATA_SEARCH_DOCUMENT_SUCCESS,
    SET_STATUS_DOCUMENT,
    SET_IS_LOADING,
    SET_STATUS_ID,
    SET_SORT_DOCUMENT,
    SET_SORT_ID,
    SET_SORT_STATUS,
    SET_END_DATE,
    SET_START_DATE,
    SET_NAME_DATE,
    CLEAR_DATA_MY_DOCUMENT,
    SET_PAGE_DATA,
    SET_FLAG_STATUS,
    SET_SORT_TYPE,
    SET_NAME_STATUS_DOCUMENT,
} = slice.actions;
export default slice.reducer;

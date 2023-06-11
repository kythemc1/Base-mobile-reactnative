import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    statusRender: false,
    listDocumentType: [],
    documentTypeName: '',
    documentTypeId: [],
    isLoading: false,
    error: '',
};
const slice = createSlice({
    initialState: initialState,
    name: 'documentType',
    reducers: {
        INIT(state) {
            state.isLoading = true;
        },
        GET_LIST_DOCUMENT_TYPE_SUCCESS(state, actions) {
            state.listDocumentType = actions.payload;
            state.error = '';
        },
        FAILS(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        SET_DOCUMENT_TYPE_NAME(state, actions) {
            state.documentTypeName = actions.payload;
        },
        SET_DOCUMENT_TYPE_ID(state, actions) {
            state.documentTypeId = actions.payload;
        },
        SET_STATUS_RENDER(state, actions) {
            state.statusRender = actions.payload;
        },
        CLEAR_DATA_DOCUMENT_TYPE(state) {
            state.statusRender = false;
            state.listDocumentType = [];
            state.documentTypeName = '';
            state.documentTypeId = [];
            state.isLoading = false;
            state.error = '';
        }

    },
});

export const {
    INIT,
    GET_LIST_DOCUMENT_TYPE_SUCCESS,
    FAILS,
    SET_DOCUMENT_TYPE_NAME,
    SET_DOCUMENT_TYPE_ID,
    SET_STATUS_RENDER,
    CLEAR_DATA_DOCUMENT_TYPE
} = slice.actions;
export default slice.reducer;

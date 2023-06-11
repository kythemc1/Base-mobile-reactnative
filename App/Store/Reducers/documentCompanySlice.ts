import {InterfaceDataNodeTree} from '../../Utils/Modals';
import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    dataTreeDocumentWithRole: {} as InterfaceDataNodeTree,
    isLoadingDocumentCompany: false,
    dataAllDocumentByNodeTreeCompany: [],
    dataSearch: [],
    totalElement: 0,
    sortStatus: true,
    idTree: '',
    nameTree: '',
    idSubTree: '',
    nameSubTree: '',
    parentId: '',
    type: '',
    nameStatus: '',
    status: [],
};
const slice = createSlice({
    name: 'documentCompany',
    initialState: initialState,
    reducers: {
        SET_IS_LOADING_DOCUMENT_COMPANY(state, actions) {
            state.isLoadingDocumentCompany = actions.payload;
        },
        GET_DATA_TREE_DOCUMENT_WITH_ROLE(state, actions) {
            state.dataTreeDocumentWithRole = actions.payload;
        },
        GET_ALL_DOCUMENT_NODE_TREE_COMPANY(state, actions) {
            state.dataAllDocumentByNodeTreeCompany = actions.payload;
        },

        SET_TOTAL_ELEMENT(state, actions) {
            state.totalElement = actions.payload;
        },
        SET_SORT_STATUS(state, actions) {
            state.sortStatus = actions.payload;
        },
        SET_ID_TREE(state, actions) {
            state.idTree = actions.payload;
        },
        SET_ID_SUB_TREE(state, actions) {
            state.idSubTree = actions.payload;
        },
        SET_NAME_TREE(state, actions) {
            state.nameTree = actions.payload;
        },
        SET_NAME_SUB_TREE(state, actions) {
            state.nameSubTree = actions.payload;
        },
        GET_DATA_SEARCH(state, actions) {
            state.dataSearch = actions.payload;
        },
        SET_PARENT_ID(state, actions) {
            state.parentId = actions.payload;
        },
        SET_TYPE(state, actions) {
            state.type = actions.payload;
        },
        SET_NAME_STATUS(state, actions) {
            state.nameStatus = actions.payload;
        },
        SET_STATUS(state, actions) {
            state.status = actions.payload;
        },
        CLEAR(state) {
            state.idSubTree = '';
            state.idTree = '';
            state.nameTree = '';
            state.nameSubTree = '';
            state.parentId = '';
            state.type = '';
            state.nameStatus='',
            state.status=[];
        },
    },
});
export const {
    SET_IS_LOADING_DOCUMENT_COMPANY,
    GET_DATA_TREE_DOCUMENT_WITH_ROLE,
    GET_ALL_DOCUMENT_NODE_TREE_COMPANY,
    SET_TOTAL_ELEMENT,
    SET_SORT_STATUS,
    SET_ID_TREE,
    SET_ID_SUB_TREE,
    SET_NAME_SUB_TREE,
    SET_NAME_TREE,
    CLEAR,
    GET_DATA_SEARCH,
    SET_PARENT_ID,
    SET_TYPE,
    SET_NAME_STATUS,
    SET_STATUS,
} = slice.actions;
export default slice.reducer;

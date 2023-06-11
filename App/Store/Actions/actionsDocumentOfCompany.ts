import {
    DOMAIN,
    GET_ALL_DOCUMENT_BY_NODE_TREE_COMPANY,
    GET_TREE_DOCUMENT_WITH_ROLE,
    SIDOC,
} from '@env';
import {
    GET_ALL_DOCUMENT_NODE_TREE_COMPANY,
    GET_DATA_SEARCH,
    GET_DATA_TREE_DOCUMENT_WITH_ROLE,
    SET_IS_LOADING_DOCUMENT_COMPANY,
    SET_TOTAL_ELEMENT,
} from 'Store/Reducers/documentCompanySlice';
import {RootState} from 'Store/reduxProvider';
import {
    ParamsGetAllDocumentCompany,
} from 'Utils/Modals';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

export const actionsDocumentOfCompany = () => {
    const {token} = useSelector((state: RootState) => ({
        token: state.auth.auth.token,
    }));
    const dispatch = useDispatch();
    // Get tree company
    const getTreeDocumentWithRole = async () => {
        await axios({
            url: `${DOMAIN + SIDOC + GET_TREE_DOCUMENT_WITH_ROLE}`,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => {
                dispatch(GET_DATA_TREE_DOCUMENT_WITH_ROLE(res.data.data));
            })
            .catch(e => console.log(e));
    };

    const getAllDocumentByNodeTreeCompany = async (
        params: ParamsGetAllDocumentCompany,
        state: any,
    ) => {
        dispatch(SET_IS_LOADING_DOCUMENT_COMPANY(true));
        await axios({
            url: `${DOMAIN + SIDOC + GET_ALL_DOCUMENT_BY_NODE_TREE_COMPANY}`,
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: params,
        })
            .then(res => {
                const newData = res.data.data.data;
                dispatch(GET_ALL_DOCUMENT_NODE_TREE_COMPANY([...state, ...newData]));
                dispatch(SET_TOTAL_ELEMENT(res.data.data.totalElements));
                dispatch(SET_IS_LOADING_DOCUMENT_COMPANY(false));
            })
            .catch(e => console.log(e));
    };

    const searchDocumentByNodeTreeCompany = async (
        params: ParamsGetAllDocumentCompany,
        state: any,
    ) => {
        dispatch(SET_IS_LOADING_DOCUMENT_COMPANY(true));
        await axios({
            url: `${DOMAIN + SIDOC + GET_ALL_DOCUMENT_BY_NODE_TREE_COMPANY}`,
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: params,
        })
            .then(res => {
                const newData = res.data.data.data;
                dispatch(GET_DATA_SEARCH([...state, ...newData]));
                dispatch(SET_TOTAL_ELEMENT(res.data.data.totalElements));
                dispatch(SET_IS_LOADING_DOCUMENT_COMPANY(false));
            })
            .catch(e => console.log(e));
    };
    return {getTreeDocumentWithRole, getAllDocumentByNodeTreeCompany, searchDocumentByNodeTreeCompany};
};

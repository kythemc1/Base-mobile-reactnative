import {
    GET_FAIL,
    GET_LIST_MY_DOCUMENT_SUCCESS,
    SET_IS_LOADING, SET_PAGE_DATA, SET_SORT_TYPE,
    SET_TOTAL_ELEMENT,
} from 'Store/Reducers/myDocumentSlice';
import {MyDocumentInterface, ParamsMyDocument} from 'Store/Models';
import axios from 'axios';
import {API_PATHS} from 'Services/Api';
import {useDispatch, useSelector} from 'react-redux';

export const myDocumentActions = () => {
    const dispatch = useDispatch();
    const getMyDocument = async (
        params: ParamsMyDocument,
        token: string,
    ) => {
        dispatch(SET_IS_LOADING(true));
        await axios({
            url: API_PATHS.GET_ALL_DOCUMENT,
            method: 'post',
            headers: {Authorization: `Bearer ${token}`},
            data: params,
        })
            .then(res => {
                const newData = res.data.data.data;
                dispatch(
                    GET_LIST_MY_DOCUMENT_SUCCESS(newData.map((state: MyDocumentInterface) => ({
                        documentId: state.documentId,
                        documentName: state.name,
                        documentCode: state.code,
                        documentTypeName: state.documentTypeName,
                        emailPartner: state.emailPartner,
                        contractingParties: state.namePartner,
                        createdDate: state.createdDate,
                        status: state.status,
                        imgDocument:
                                'https://www.udn.vn/app/webroot/upload/images/sign-agreement-contract-on-paper-document-with-vector-8520816.jpg',
                    })),
                    ),
                );

                dispatch(SET_TOTAL_ELEMENT(res.data.data.totalElements));
                dispatch(SET_IS_LOADING(false));
                dispatch(SET_PAGE_DATA(res.data.data.page));
            })
            .catch(e => {
                dispatch(GET_FAIL(e));
            });
    };
    const getMyDocumentRefreshControl = async (
        params: ParamsMyDocument,
        token: string,
        state: any
    ) => {
        dispatch(SET_IS_LOADING(true));
        await axios({
            url: API_PATHS.GET_ALL_DOCUMENT,
            method: 'post',
            headers: {Authorization: `Bearer ${token}`},
            data: params,
        })
            .then(res => {
                const newData = res.data.data.data;
                console.log(newData,'data my document');
                
                dispatch(
                    GET_LIST_MY_DOCUMENT_SUCCESS(
                        [
                            ...state,
                            ...newData.map((state: MyDocumentInterface) => ({
                                documentId: state.documentId,
                                documentName: state.name,
                                documentCode: state.code,
                                documentTypeName: state.documentTypeName,
                                emailPartner: state.emailPartner,
                                contractingParties: state.namePartner,
                                createdDate: state.createdDate,
                                status: state.status,
                                imgDocument:
                                    'https://www.udn.vn/app/webroot/upload/images/sign-agreement-contract-on-paper-document-with-vector-8520816.jpg',
                            })),
                        ]
                    ),
                );
                dispatch(SET_TOTAL_ELEMENT(res.data.data.totalElements));
                dispatch(SET_IS_LOADING(false));
                dispatch(SET_PAGE_DATA(res.data.data.page));
                dispatch(SET_SORT_TYPE(false));

            })
            .catch(e => {
                dispatch(GET_FAIL(e));
            });
    };
    return {getMyDocument, getMyDocumentRefreshControl};
};

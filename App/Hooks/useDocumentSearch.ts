import { LINK_IMAGE } from '@env';
import {API_PATHS} from 'Services/Api';
import {MyDocumentInterface, ParamsMyDocument} from 'Store/Models';
import {
    GET_DATA_SEARCH_DOCUMENT_SUCCESS,
    GET_FAIL,
    SET_IS_LOADING,
    SET_PAGE_DATA,
    SET_TOTAL_ELEMENT,
} from 'Store/Reducers/myDocumentSlice';
import axios from 'axios';
import {useDispatch} from 'react-redux';

export const useDocumentSearch = () => {
    const dispatch = useDispatch();
    const getSearchDocument = async (
        params: ParamsMyDocument,
        token: string,
        state: any,
        flagStatus: string,
    ) => {
        dispatch(SET_IS_LOADING(true));
        await axios({
            url:
        flagStatus == 'manage'
            ? API_PATHS.GET_ALL_DOCUMENT
            : API_PATHS.GET_DOCUMENT_PROCESSING,
            method: 'post',
            headers: {Authorization: `Bearer ${token}`},
            data: params,
        })
            .then(res => {
                const newData = res.data.data.data;
                dispatch(
                    GET_DATA_SEARCH_DOCUMENT_SUCCESS([
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
                            imgDocument:LINK_IMAGE
                        })),
                    ]),
                );
                dispatch(SET_TOTAL_ELEMENT(res.data.data.totalElements));
                dispatch(SET_PAGE_DATA(res.data.data.page));
                dispatch(SET_IS_LOADING(false));
            })
            .catch(e => {
                dispatch(GET_FAIL(e));
            });
    };
    return {
        getSearchDocument,
    };
};

import {FAILS, GET_LIST_DOCUMENT_TYPE_SUCCESS, INIT} from 'Store/Reducers/documentTypeSlice';
import {API_PATHS} from 'Services/Api';
import axios from 'axios';

export const getDocumentType = (token: any) => async (dispatch: any) => {
    dispatch(INIT);
    try {
        await axios({
            url: API_PATHS.GET_DOCUMENT_TYPE,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'GET',
        })
            .then(res => {
                dispatch(GET_LIST_DOCUMENT_TYPE_SUCCESS(res.data.data.data));
            })
            .catch(e => {
                dispatch(FAILS(e));
            });
    } catch (e) {
        dispatch(FAILS(e));
    }
};

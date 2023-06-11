import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';
import {useEffect} from 'react';
import {getDocumentType} from 'Store/Actions/getDocumentType';

export const useDocumentType = () => {
    const dispatch = useDispatch();
    const {token, dataDocumentType} = useSelector((state: RootState) => ({
        token: state.auth.auth.token,
        dataDocumentType: state.documentType.listDocumentType
    }));

    useEffect(() => {
        // @ts-ignore
        dispatch(getDocumentType(token));
    }, []);

    return {dataDocumentType};
};
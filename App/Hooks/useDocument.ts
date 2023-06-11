import {myDocumentActions} from 'Store/Actions/actionsMyDocument';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';
import {useEffect, useState} from 'react';
import {pageSize} from 'Configs/Constants/PageSize';
import {ParamsMyDocument} from 'Store/Models';

const constains = {
    id_name: '1',
    id_date: '2',
};
export const useDocument = () => {
    const {
        token,
        listMyDocument,
        totalElement,
        isLoading,
        sortId,
        sortStatus,
        sortDocumentName,
    } = useSelector((state: RootState) => ({
        token: state.auth.auth.token,
        listMyDocument: state.myDocument.listMyDocument,
        totalElement: state.myDocument.totalElement,
        isLoading: state.myDocument.isLoading,
        sortId: state.myDocument.sortId,
        sortStatus: state.myDocument.sortStatus,
        pageData: state.myDocument.pageData,
        sortType: state.myDocument.sortType,
        sortDocumentName: state.myDocument.sortDocument,
    }));
    const {getMyDocumentRefreshControl, getMyDocument} = myDocumentActions();
    const [page, setPage] = useState(0);
    // Load page
    function refreshControl() {
        if (page < Math.ceil(totalElement / 10) - 1) {
            setPage(page + 1);
        }
    }
    function getDocument() {
        const params: ParamsMyDocument = {
            page: page,
            size: pageSize[10],
        };

        const sortDirection = sortStatus ? 'DESC' : 'ASC';
        let sortField = 'name';

        if (sortId === constains.id_name) sortField = 'name';
        else if (sortId === constains.id_date) sortField = 'createdDate';

        params.sorts = {};
        params.sorts[sortField] = sortDirection;
        getMyDocumentRefreshControl(params, `${token}`, listMyDocument);
    }

    useEffect(() => {
        getDocument();
    }, [page, sortStatus]);
    return {
        sortStatus,
        sortDocumentName,
        listMyDocument,
        totalElement,
        refreshControl,
        isLoading,
    };
};

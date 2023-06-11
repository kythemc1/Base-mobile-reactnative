import {IdSort} from 'Configs/Constants/ConstantsId';
import {pageSize} from 'Configs/Constants/PageSize';
import {actionsDocumentOfCompany} from 'Store/Actions/actionsDocumentOfCompany';
import {RootState} from 'Store/reduxProvider';
import {ParamsGetAllDocumentCompany} from 'Utils/Modals';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useDebounce} from './useDebounce';

const constains = {
    id_name: '1',
    id_date: '2',
};
export const useDocumentOfCompany = () => {
    const {getAllDocumentByNodeTreeCompany} = actionsDocumentOfCompany();
    const [page, setPage] = useState<number>(0);
    const {
        dataGetTree,
        dataAllDocumentCompany,
        totalElements,
        isLoading,
        sortStatus,
        sortName,
        sortId,
    } = useSelector((state: RootState) => ({
        dataGetTree: state.documentCompany.dataTreeDocumentWithRole,
        dataAllDocumentCompany:
      state.documentCompany.dataAllDocumentByNodeTreeCompany,
        totalElements: state.documentCompany.totalElement,
        isLoading: state.documentCompany.isLoadingDocumentCompany,
        sortStatus: state.documentCompany.sortStatus,
        sortName: state.myDocument.sortDocument,
        sortId: state.myDocument.sortId,
    }));
    console.log(dataGetTree,'Data');
    
    // Load page
    function refreshControl() {
        if (page < Math.ceil(totalElements / 10) - 1) {
            setPage(page + 1);
        }
    }
    const getApi = () => {
        const params: ParamsGetAllDocumentCompany = {
            page: page,
            size: pageSize[10],
            nodeId: dataGetTree.id,
            nodeType: dataGetTree.type,
            parentId: dataGetTree.parentId,
        };
        const sortDirection = sortStatus ? 'DESC' : 'ASC';
        let sortField = 'name';
        if (sortId === constains.id_name) sortField = 'name';
        else if (sortId === constains.id_date) sortField = 'createdDate';
        params.sorts = {};
        params.sorts[sortField] = sortDirection;
        getAllDocumentByNodeTreeCompany(params, dataAllDocumentCompany);
    };
    useEffect(() => {
        getApi();
    }, [sortStatus, page]);
    return {
        dataAllDocumentCompany,
        totalElements,
        isLoading,
        sortStatus,
        sortName,
        refreshControl,
    };
};

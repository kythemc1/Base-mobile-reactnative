import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomer } from 'Store/Actions/getCustomer';
import { CustomerInterface, IUserState } from 'Store/Models';
import { pageSize } from 'Configs/Constants/PageSize';

export const useCustomer = () => {
    const itemSize = pageSize[10];
    const [page, setPage] = useState<number>(0);
    const dispatch = useDispatch();
    const { listCustomers, isLoading, valueCustomer, listSearchCustomer } = useSelector(
        (state: CustomerInterface) => ({
            listCustomers: state.customer.listCustomers,
            isLoading: state.customer.isLoading,
            valueCustomer: state.customer.valueCustomer,
            listSearchCustomer: state.customer.listSearchCustomer
        })
    );

    // Pagination list Customer pageSize 10 , page ++  (Phân trang danh sách khách hàng)
    function loadMoreData() {
        setPage(page + 1);
    }


    const { access_token } = useSelector((state: IUserState) => ({
    // @ts-ignore
        access_token: state.auth.auth.token
    }));
    useEffect(() => {
        dispatch(
            // @ts-ignore
            getCustomer({ page: page, size: itemSize, sorts: {} }, `${access_token}`,listCustomers));
    }, [page]);
    return { listCustomers, isLoading, valueCustomer, listSearchCustomer, loadMoreData };
};

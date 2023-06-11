import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageSize } from 'Configs/Constants/PageSize';
import { Creator, IUserState } from 'Store/Models';
import { getCreator } from 'Store/Actions/getCreator';

export const useCreator = () => {
    const dispatch = useDispatch();
    const { listCreator, isLoading, valueCreator } = useSelector(
        (state: Creator) => ({
            listCreator: state.creator.listCreator,
            isLoading: state.creator.isLoading,
            valueCreator: state.creator.valueCreator
        })
    );

    const { access_token } = useSelector((state: IUserState) => ({
    // @ts-ignore
        access_token: state.auth.auth.token
    }));
    useEffect(() => {
    //@ts-ignore
        dispatch(getCreator({
            filter: '',
            page: 0,
            size: pageSize[100]
        }, `${access_token}`));
    }, []);

    return { listCreator, isLoading , valueCreator};
};

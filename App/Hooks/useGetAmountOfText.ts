import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';
import {useEffect} from 'react';
import {getAmountText} from 'Store/Actions/getAmountText';
export const useGetAmountOfText = () => {
    const {token, amountData} = useSelector((state: RootState) => ({
        token: state.auth.auth.token,
        amountData:state.amountText.amountData
    }));
    const dispatch = useDispatch();
    useEffect(() => {
        //  @ts-ignore
        dispatch(getAmountText(`${token}`));
    }, []);

    return {amountData};
};

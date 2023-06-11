import { API_PATHS } from 'Services/Api';
import axios from 'axios';
import {GET_SUCCESS} from 'Store/Reducers/amoutTextSlice';
import {AmountTextInterface} from 'Store/Models';

export const getAmountText = ( token: string) => async (dispatch: any) => {

    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
        const respons = await axios.get(
            API_PATHS.GET_AMOUNT_TEXT, config
        );
        const newData = respons.data.data;
        /* Change name data fields call api biến đổi các trường của api thành tên có nghĩa dễ đọc dễ sử dụng */
        dispatch(
            GET_SUCCESS(
                {
                    doneDocumentNumber: newData.doneDocumentNumber,
                    manageDocumentNumber: newData.manageDocumentNumber,
                    processingDocumentNumber: newData.processingDocumentNumber,
                    expireDocumentNumber: newData.expireDocumentNumber
                }
            )
        );

    } catch (error) {
    }
};

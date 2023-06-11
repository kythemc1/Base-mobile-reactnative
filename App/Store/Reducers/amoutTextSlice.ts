import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AmountTextInterface} from 'Store/Models';

const initialState = {
    amountData:{}
};
const slice = createSlice({
    name: 'amountText',
    initialState: initialState,
    reducers: {
        GET_SUCCESS(state, actions: PayloadAction<AmountTextInterface>) {
            state.amountData = actions.payload;
        },
        CLEAR_DATA(state){
            state.amountData = {};
        }
    }
});
export const {
    GET_SUCCESS,
    CLEAR_DATA
} = slice.actions;
export default slice.reducer;

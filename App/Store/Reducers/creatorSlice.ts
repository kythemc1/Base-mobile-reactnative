import { createSlice } from '@reduxjs/toolkit';
import { Creator } from 'Store/Models';
//@ts-ignore
const initialState: Creator = {
    listCreator: [],
    isLoading: false,
    error: null,
    valueCreator: [],
    valueDropdownCreator: '',
    isFocusCreator: false
};

const creatorSlice = createSlice({
    name: 'creator',
    initialState: initialState,
    reducers: {
        INIT(state) {
            state.isLoading = true;
            state.error = null;
        },
        GET_LIST_SUCCESS(state, action) {
            state.isLoading = false;
            state.listCreator = action.payload;
        },
        GET_LIST_FAIL(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        SET_LOADING(state, action) {
            state.isLoading = action.payload;
        },
        GET_LIST_CREATOR(state, action) {
            (state.listCreator = action.payload);
        },
        ADD_VALUE_CREATOR(state, action) {
            state.valueCreator = action.payload;
        },
        SET_VALUE_DROPDOWN_CREATOR(state, action) {
            state.valueDropdownCreator = action.payload;
        },
        SET_ISFOCUS_CREATOR(state, action) {
            state.isFocusCreator = action.payload;
        }

    }
});

export const {
    INIT,
    GET_LIST_SUCCESS,
    GET_LIST_FAIL,
    ADD_VALUE_CREATOR,
    SET_VALUE_DROPDOWN_CREATOR,
    SET_ISFOCUS_CREATOR
} =
  creatorSlice.actions;

export default creatorSlice.reducer;

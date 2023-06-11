import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Lang = 'en' | 'vi';

const initialState = {
    lang: 'en' as Lang,
};

export const langSlice = createSlice({
    name: 'lang',
    initialState: initialState,
    reducers: {
        setLang: (state, action: PayloadAction<Lang>) => {
            state.lang = action.payload;
        },
    },
});

export const {setLang} = langSlice.actions;

export default langSlice.reducer;

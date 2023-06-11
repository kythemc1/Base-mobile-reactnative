import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IAuthState, IUserState, localUser} from 'Store/Models';


const initialState = {
    auth: {} as IAuthState,
    user: {} as IUserState | null,
    isLoading: false as boolean | undefined,
    biometric: {} as boolean,
    localUser: {} as localUser
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        setAuth: (state, action: PayloadAction<IAuthState>) => {
            state.auth = action.payload;
        },
        setUser: (state, action: PayloadAction<IUserState>) => {
            state.user = action.payload;
        },
        logout: state => {
            state.auth = {
                isLogged: false,
                token: null,
                refreshToken: null,
                refreshTokenExpiredDate: null,
                type: null,
            };
            state.user = null;
            state.biometric=false;
        },
        setBiometric(state,action) {
            state.biometric=action.payload;
        },
        setLocalUser(state,action: PayloadAction<localUser>){
            state.localUser=action.payload;
        }
    }

});

export const { setAuth, setUser, logout, setIsLoading,setBiometric,setLocalUser } = authSlice.actions;

export default authSlice.reducer;

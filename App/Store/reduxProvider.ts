import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import {generatePersistConfig} from 'Utils/Redux';
import authSlice from './Reducers/authSlice';
import langSlice from './Reducers/langSlice';
import customerSlice from './Reducers/customerSlice';
import creatorSlice from 'Store/Reducers/creatorSlice';
import notificationSlice from 'Store/Reducers/notificationSlice';
import myDocumentSlice from 'Store/Reducers/myDocumentSlice';
import DocumentTypeSlice from 'Store/Reducers/documentTypeSlice';
import amountText from 'Store/Reducers/amoutTextSlice';
import documentCompanySlice from './Reducers/documentCompanySlice';

const reducers = combineReducers({
    auth: authSlice,
    lang: langSlice,
    customer: customerSlice,
    creator: creatorSlice,
    notification: notificationSlice,
    myDocument: myDocumentSlice,
    documentType: DocumentTypeSlice,
    amountText: amountText,
    documentCompany: documentCompanySlice,
});

const version = 22021401;

const persistedReducer = persistReducer(
    generatePersistConfig({
        whitelist: [
            'auth',
            'lang',
            'customer',
            'creator',
            'notification',
            'myDocument',
            'amountText',
            'documentType',
            'documentCompany',
        ],
        version,
    }),
    reducers,
);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });

        return middlewares;
    },
});

const persistor = persistStore(store);

export {store, persistor};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

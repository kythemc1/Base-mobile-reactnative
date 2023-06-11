import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAction} from '@reduxjs/toolkit';
import {createMigrate, MigrationManifest, PersistedState} from 'redux-persist';
export const generatePersistConfig = ({
    whitelist = [],
    version = 1,
}: {
  whitelist: string[];
  version: number;
}) => {
    const migrations: MigrationManifest = {
        [version]: (state: PersistedState) => {
            return state;
        },
    };

    return {
        key: 'root',
        version,
        whitelist: [...whitelist, '_persist'],
        storage: AsyncStorage,
        debug: __DEV__,
        migrate: createMigrate(migrations, {debug: __DEV__}),
    };
};

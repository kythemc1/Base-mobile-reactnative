import {CommonActions} from '@react-navigation/native';
import {createRef, MutableRefObject} from 'react';

export const navigationRef = createRef<any | null>() as MutableRefObject<
  any | null
>;

const setContainer = (container: any) => {
    navigationRef.current = container;
};

const reset = (
    name: string,
    params?: Record<string, string | number | boolean | null>,
    key?: string,
) => {
    navigationRef.current?.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{name, params, key}],
        }),
    );
};


const Navigator = {
    setContainer,
    reset,
};

export default Navigator;

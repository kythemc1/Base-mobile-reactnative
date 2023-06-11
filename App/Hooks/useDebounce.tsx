import {useCallback, useRef} from 'react';
import {clearTimeout} from '@testing-library/react-native/build/helpers/timers';

export const useDebounce = () => {
    const typingTimeOutRef = useRef<any>(null);
    const debounce = (callBack: any, times: number,) => {
        if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current);
        }
        typingTimeOutRef.current = setTimeout(() => {
            callBack();
        }, times);
    };
    return {debounce};
};
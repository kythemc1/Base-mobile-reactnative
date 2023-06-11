import React from 'react';
import Toast from 'react-native-toast-message';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  type: ToastType;
  title: string;
  message?: string;
}

export const useToast = () => {

    const showToast = ({ type, title, message }: ToastProps) => {
        Toast.show({
            type: type,
            text1: title,
            text2: message
        });
    };

    return {
        showToast
    };
};

export const ToastProvider = ({ children }: any) => {

    return (
        <>
            {children}
            <Toast />
        </>
    );
};

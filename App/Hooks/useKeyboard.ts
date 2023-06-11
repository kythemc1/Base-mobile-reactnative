import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export function useKeyboard() {
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [isKeyboardShow, setIsKeyboardShow] = useState(false);

    const handleKeyboardWillShow = (e: any) => {
        setKeyboardHeight(e.endCoordinates.height);
        setIsKeyboardShow(true);
    };
    const handleKeyboardDidShow = (e: any) => {
        setIsKeyboardShow(true);
    };
    const handleKeyboardWillHide = (e: any) => {
        setKeyboardHeight(0);
        setIsKeyboardShow(false);
    };
    const handleKeyboardDidHide = (e: any) => {
        setIsKeyboardShow(false);
    };

    useEffect(() => {
        const subscriptions = [
            Keyboard.addListener('keyboardWillShow', handleKeyboardWillShow),
            Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow),
            Keyboard.addListener('keyboardWillHide', handleKeyboardWillHide),
            Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide),
        ];

        return () => {
            subscriptions.forEach(subscription => subscription.remove());
        };
    }, []);
    return {
        isKeyboardShow,
        keyboardHeight,
    };
}

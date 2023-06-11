import {View, Text} from 'react-native-ui-lib';
import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    StyleSheet,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default function Wrapper({
    children,
    avoidStatusBar = false,
    disableKeyboardAvoidingView = false,
    backgroundColor = 'transparent',
}: {
    children: React.ReactNode;
    avoidStatusBar?: boolean;
    disableKeyboardAvoidingView?: boolean;
    backgroundColor?: string;
}) {
    return (
        <View flex backgroundColor={backgroundColor}>
            {avoidStatusBar && (
                <StatusBar barStyle="light-content" translucent animated/>
            )}
            {!disableKeyboardAvoidingView && (
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={StyleSheet.absoluteFill}>
                    {children}
                </KeyboardAvoidingView>
            )}
            {/* <KeyboardAvoidingView
        style={style.container}
        behavior="padding"
        enabled={Platform.OS === 'ios' && !disableKeyboardAvoidingView}>
        {!!avoidStatusBar && <View style={style.avoidStatusBar} />}
        <View flex>{children}</View>
      </KeyboardAvoidingView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    avoidStatusBar: {
        height: getStatusBarHeight(),
    },
});

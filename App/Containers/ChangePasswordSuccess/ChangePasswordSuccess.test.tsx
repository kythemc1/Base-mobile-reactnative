import renderer from 'react-test-renderer';
import React from 'react';
import ChangePasswordSuccess from './ChangPasswordSuccess';
import {Provider} from 'react-redux';
import {store} from 'Store/reduxProvider';
//Fix Invariant Violation: `new NativeEventEmitter()` requires a non-null argument.
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
// mock moduleName react-native-firebase
jest.mock('@react-native-firebase/messaging', () => ({
    messaging: jest.fn(() => ({
        hasPermission: jest.fn(() => Promise.resolve(true)),
        subscribeToTopic: jest.fn(),
        unsubscribeFromTopic: jest.fn(),
        requestPermission: jest.fn(() => Promise.resolve(true)),
        getToken: jest.fn(() => Promise.resolve('myMockToken')),
    })),
    notifications: jest.fn(() => ({
        onNotification: jest.fn(),
        onNotificationDisplayed: jest.fn(),
    })),
    analytics: jest.fn(() => ({
        logEvent: jest.fn(),
        setUserProperties: jest.fn(),
        setUserId: jest.fn(),
        setCurrentScreen: jest.fn(),
    })),
}));
test('renders correctly', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <ChangePasswordSuccess />
            </Provider>,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (str: string) => str,
        i18n: {
            changeLanguage: () => new Promise(() => {}),
        },
    }),

    initReactI18next: {
        type: '3rdParty',
        init: jest.fn(),
    },
}));

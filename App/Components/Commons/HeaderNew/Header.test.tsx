import renderer from 'react-test-renderer';
import React from 'react';
import Header from '../Header/Header';
test('renders correctly', () => {
    const tree = renderer.create(<Header customs />).toJSON();
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

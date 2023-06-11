import i18n from 'i18next';
import {useTranslation, initReactI18next} from 'react-i18next';
import {store} from '../Store/reduxProvider';
import en from './Translations/en.json';
import vi from './Translations/vi.json';

const resources = {
    en: {translation: en},
    vi: {translation: vi},
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        compatibilityJSON: 'v3',
        resources,
        lng: store.getState().lang.lang, // if you're using a language detector, do not define the lng option
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });

export default i18n;

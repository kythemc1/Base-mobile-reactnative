import i18n from '../Lang';
import {RootState} from '../Store/reduxProvider';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setLang} from '../Store/Reducers/langSlice';
import {useTranslation} from 'react-i18next';

export const useLang = () => {
    const {lang} = useSelector((state: RootState) => state.lang);

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);
};

export const useChangeLang = () => {
    const dispatch = useDispatch();

    const onChangeLang = (lang: string) => {
        dispatch(setLang(lang === 'vi' ? 'en' : 'vi'));
    };

    return {onChangeLang};
};

export const useListLanguages = () => {
    const {t} = useTranslation();
    return {
        listLanguages: [
            {
                value: 'vi',
                label: t('language.vi'),
            },
            {
                value: 'en',
                label: t('language.en'),
            },
        ],
    };
};

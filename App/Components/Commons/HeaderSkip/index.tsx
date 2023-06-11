import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';
import {useChangeLang} from 'Hooks/useLang';
import {useTranslation} from 'react-i18next';
import {styles} from 'Components/Commons/HeaderSkip/HeaderSkipStyles';
import {useEffect, useState} from 'react';
import icons from 'Configs/Constants/icons';

export const HeaderSkip = ({onSkip}: { onSkip: () => void }) => {
    const {lang} = useSelector((state: RootState) => state.lang);
    const {onChangeLang} = useChangeLang();
    const {t} = useTranslation();
    const [showEn, setShowVi] = useState(false);
    useEffect(() => {
        changeFlag();
    });
    const changeFlag = () => {
        if (t('language.changeLanguage') === 'En') {
            setShowVi(false);
        } else {
            setShowVi(true);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onSkip}>
                <Text style={styles.textEn}>{t('sign_in.skip')}</Text>
            </TouchableOpacity>
            <View>
                {showEn ?
                    <TouchableOpacity style={styles.touchView} onPress={() => {
                        onChangeLang(lang);
                    }}>
                        <View style={styles.viewOnLang}>
                            <Text style={styles.textEn}>{t('language.changeLanguage')}</Text>
                            <Image
                                style={styles.flagEn}
                                source={icons.ViFlag}
                            />
                        </View>
                        <Image
                            style={styles.flagVi}
                            source={icons.EnFlag}
                        />
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.touchView} onPress={() => {
                        onChangeLang(lang);
                    }}>
                        <View style={styles.viewOnLang}>
                            <Text style={styles.textEn}>{t('language.changeLanguage')}</Text>
                            <Image
                                style={styles.flagEn}
                                source={icons.EnFlag}
                            />
                        </View>
                        <Image
                            style={styles.flagVi}
                            source={icons.ViFlag}
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};


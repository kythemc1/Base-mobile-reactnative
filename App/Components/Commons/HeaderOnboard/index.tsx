import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'Store/reduxProvider';
import { useChangeLang } from 'Hooks/useLang';
import { useTranslation } from 'react-i18next';
import { styles } from 'Components/Commons/HeaderOnboard/HeaderOnboardStyles';
import { useEffect, useState } from 'react';
import icons from 'Configs/Constants/icons';
import images from 'Configs/Constants/images';

export const HeaderOnboard = () => {
    const {lang} = useSelector((state: RootState) => state.lang);
    const {onChangeLang} = useChangeLang();
    const {t} = useTranslation();
    const [showEn,setShowVi]=useState(false);
    useEffect(()=>{changeFlag();});
    const changeFlag=()=>{
        if (t('language.changeLanguage') === 'En'){
            setShowVi(false);
        }
        else {
            setShowVi(true);
        }
    };
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageStyle}
                source={images.Logo}
            />
            <View>
                {showEn?                    <TouchableOpacity onPress={()=>{onChangeLang(lang);}} style={styles.touchView} >
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
                </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={()=>{onChangeLang(lang);}} style={styles.touchView} >
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


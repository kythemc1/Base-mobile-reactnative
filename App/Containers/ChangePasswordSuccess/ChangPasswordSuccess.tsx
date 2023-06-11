import React from 'react';
import {
    View,
    Image,
    SafeAreaView,
    Text
} from 'react-native';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useChangeLang} from '../../Hooks/useLang';
import {RootState} from '../../Store/reduxProvider';
import {HeaderOnboard} from 'Components/Commons/HeaderOnboard';
import images from 'Configs/Constants/images';
import {Button} from 'Components/Commons/Button';
import {styles} from 'Containers/ChangePasswordSuccess/ChangePasswordSuccessStyles';

export default function BackLogin({navigation}: any) {
    const {t} = useTranslation();
    const {lang} = useSelector((state: RootState) => state.lang);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <HeaderOnboard></HeaderOnboard>
            </View>
            <View style={styles.then}>

                <View style={styles.body}>
                    <Image
                        style={styles.Wc}
                        source={images.success_img}
                    />
                </View>
                <Text style={styles.textwc}>{t('changepasssuccess.changepasssuccess')}</Text>
                <View style={styles.endThen}>
                    <Text style={styles.textInstructions}>
                        {t('backlogin.instructions')}
                    </Text>
                    <Text
                        style={styles.textInstructions}>
                        {t('changepasssuccess.alertline1')}
                    </Text>
                    <Text style={styles.textInstructions}>
                        {t('changepasssuccess.alertline2')}
                    </Text>

                </View>

                <View style={styles.wraplogin}>
                    <Button sizeButton={'large'} onPressButton={() => navigation.navigate('SignIn')}
                        text={`${t('sign_in.sign_in')}`} typeButton={'primary'}></Button>
                </View>
            </View>

        </SafeAreaView>
    );
}




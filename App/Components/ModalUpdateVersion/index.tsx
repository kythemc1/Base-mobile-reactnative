import {Modal} from 'react-native-paper';
import {useState} from 'react';
import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';
import {Linking, Platform, Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'Components/Commons/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigator, {navigationRef} from 'Utils/Navigator';
import {styles} from 'Components/ModalUpdateVersion/styles';
import {useTranslation} from 'react-i18next';
import {CH_PLAY_SIDOC,APP_STORE_SIDOC} from '@env';
interface props {
    visible: boolean,
    type: boolean
    // onPress: () => void
}

export const ModalUpdateVersion = (props: props) => {
    const {t}=useTranslation();
    return (
        <Modal style={styles.modalContainer} visible={props.visible}>
            <Text style={styles.textDetail}>{t('update-version.notification')}</Text>
            {
                props.type? <Button text={`${t('update-version.now')}}`}
                    typeButton={'secondary'}
                    sizeButton={'normal'}
                    onPressButton={() => {
                        Platform.OS=='ios'?
                            Linking.openURL(`${APP_STORE_SIDOC}`):
                            Linking.openURL(`${CH_PLAY_SIDOC}`);
                    }}/>: (
                    <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                        <Button text={`${t('update-version.now')}}`}
                            typeButton={'secondary'}
                            sizeButton={'normal'}
                            onPressButton={() => {
                                Platform.OS=='ios'?
                                    Linking.openURL(`${APP_STORE_SIDOC}`):
                                    Linking.openURL(`${CH_PLAY_SIDOC}`);
                            }}/>
                        <Button text={`${t('update-version.later')}}`}
                            typeButton={'secondary'}
                            sizeButton={'no_line'}
                            onPressButton={() => {
                                const name =  AsyncStorage.getItem('firstLogin');
                                if (name !== null) {
                                    navigator.reset('SignIn');
                                } else {
                                    navigator.reset('SplashSliders');
                                }
                            }}/>
                    </View>
                )
            }

        </Modal>
    );
};

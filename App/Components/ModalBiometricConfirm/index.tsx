import Modal from 'react-native-modal';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';
import { setBiometric} from 'Store/Reducers/authSlice';
import {styles} from 'Components/ModalBiometricConfirm/styles';
import {useTranslation} from 'react-i18next';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {useToast} from 'Hooks/useToast';

interface props {
    visible: boolean;
    onDismiss: () => void;
    onPressTurnOn:()=>void;
    onPressTurnOff:()=>void;

}

export const ModalBiometricConfirm = (props: props) => {
    const dispatch =useDispatch();
    const showButton = useSelector((state: RootState)=>state.auth.biometric);
    const {t}=useTranslation();
    const {showToast} = useToast();
    const checkDevice = async ()=>{
        const rnBiometrics = Platform.OS == 'ios' ? new ReactNativeBiometrics({ allowDeviceCredentials: true }) : new ReactNativeBiometrics();
        await rnBiometrics.isSensorAvailable()
            .then(resultObject => {
                const { available, biometryType } = resultObject;
                if (available && biometryType === BiometryTypes.TouchID) {
                    props.onPressTurnOn();dispatch(setBiometric(true));
                } else if (available && biometryType === BiometryTypes.FaceID) {
                    props.onPressTurnOn();dispatch(setBiometric(true));
                } else if (available && biometryType === BiometryTypes.Biometrics) {
                    props.onPressTurnOn();dispatch(setBiometric(true));
                } else {
                    showToast({
                        type: 'error',
                        title: `${t('sign_in.permission')}`
                    });
                }
            });
    };
    return (
        <Modal isVisible={props.visible}
            onBackdropPress={props.onDismiss}
            style={styles.modalContainer}>
            <View style={styles.viewText}>
                <Text style={styles.textConfirm}>{t('dash-board.confirm')}</Text>
            </View>
            {showButton==true?
                <TouchableOpacity style={styles.viewButton} onPress={()=>{props.onPressTurnOn();dispatch(setBiometric(false));}}>
                    <Text style={styles.textPress}>{t('dash-board.turn-off')}</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.viewButton} onPress={()=>{checkDevice();}}>
                    <Text style={styles.textPress}>{t('dash-board.turn-on')}</Text>
                </TouchableOpacity>
            }
        </Modal>
    );
};

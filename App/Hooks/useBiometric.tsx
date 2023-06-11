import {Platform} from 'react-native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';
import {useToast} from 'Hooks/useToast';
import {useTranslation} from 'react-i18next';
import { useState} from 'react';

export const usebiometric=()=>{

    const check=async ()=>{
        const [typeTouchID,setTypeTouchID] =useState('');

        const rnBiometrics = Platform.OS == 'ios' ? new ReactNativeBiometrics({ allowDeviceCredentials: true }) : new ReactNativeBiometrics();
        await rnBiometrics.isSensorAvailable()
            .then(resultObject => {
                const { available, biometryType } = resultObject;
                console.log('biometryTypeeeeeee ', biometryType);
                if (available && biometryType === BiometryTypes.TouchID) {
                    console.log('TouchID is supported');
                    setTypeTouchID('TouchID');
                } else if (available && biometryType === BiometryTypes.FaceID) {
                    console.log('FaceID is supported');
                    setTypeTouchID('FaceID');
                } else if (available && biometryType === BiometryTypes.Biometrics) {
                    console.log('Biometrics is supported');
                    setTypeTouchID('Biometrics');
                } else {
                    console.log('Biometrics not supported');
                    setTypeTouchID('');
                }
            });
        return typeTouchID;
    };

    const handleBiometric=async (biometric: any)=>{{
        const {showToast} = useToast();
        const {t} = useTranslation();
        const rnBiometrics =
                Platform.OS == 'ios'
                    ? new ReactNativeBiometrics({allowDeviceCredentials: true})
                    : new ReactNativeBiometrics();
        const epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
        const payload = epochTimeSeconds + 'some message';
        // const pinCode = await AsyncStorage.getItem('pinCode');
        rnBiometrics.biometricKeysExist().then(async resultObject => {
            const {keysExist} = resultObject;
            if (keysExist) {
                // console.log('Keys exist');
                rnBiometrics
                    .createSignature({
                        promptMessage: `${t('Signinbio.touch')}`,
                        payload: payload,
                    })
                    .then(async resultObject => {
                        const {success, signature} = resultObject;
                        if (success==true && biometric==true) {
                            // console.log('CreateSignature ', signature);
                            // if (pinCode === pin) {
                            // navigation.navigate('TabNavigation');
                            // }
                        }
                        else {
                            showToast({
                                type: 'error',
                                title: `${t('sign_in.permission')}`
                            });
                        }
                    })
                    .catch(err => {
                        // console.log('loiiiiii123 ', err.message);
                    });
            } else {
                // console.log('Keys do not exist or were deleted');
                await rnBiometrics.createKeys().then(resultObject => {
                    const {publicKey} = resultObject;
                    // console.log(publicKey);
                });
                rnBiometrics
                    .createSignature({
                        promptMessage: `${t('Signinbio.touch')}`,
                        payload: payload,
                    })
                    .then(async resultObject => {
                        const {success, signature} = resultObject;
                        if (success==true && biometric==true) {
                            // console.log('CreateSignature1 ', signature);
                            // navigation.navigate('TabNavigation');
                        }
                        else {
                            showToast({
                                type: 'error',
                                title: `${t('sign_in.permission')}`
                            });
                        }


                    })
                    .catch(err => {
                        // console.log('loiiiiii123 ', err);
                    });
            }
        });
    }

    };

    return {handleBiometric,check};
};



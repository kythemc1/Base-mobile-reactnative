import React, {useEffect, useRef, useState} from 'react';
import {
    BackHandler,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useAuth} from 'Hooks/API/Auth';
import {RootState} from 'Store/reduxProvider';
import {styles} from 'Containers/SignIn/index.styles';
import Loading from 'Components/Commons/Loading';
import {setIsLoading} from 'Store/Reducers/authSlice';
import {Button} from 'Components/Commons/Button';
import {Input} from 'Components/Commons/Input';
import icons from 'Configs/Constants/icons';
import {HeaderOnboard} from 'Components/Commons/HeaderOnboard';

import images from 'Configs/Constants/images';
import {usebiometric} from 'Hooks/useBiometric';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {useToast} from 'Hooks/useToast';

export default function Login({navigation}: any) {
    const [messageUserName, setMessageUserName] = useState<string>('');
    const [statusMessageUserName, setStatusMessageUserName] = useState(false);
    const [messagePassWord, setMessagePassWord] = useState<string>('');
    const [statusMessagePassWord, setStatusMessagePassWord] = useState(false);
    const {localUserName,localPassword}=useSelector((state:RootState)=>({
        localPassword: state.auth.localUser?.password,
        localUserName: state.auth.localUser?.userName
    }));
    const [userName, setUserName] = useState<string>(localUserName);
    const [passWord, setPassWord] = useState<string>('');
    const {t} = useTranslation();
    const biometric = useSelector((state: RootState) => state.auth.biometric);
    const dispatch = useDispatch();
    const {isLoading} = useSelector((state: RootState) => ({
        isLoading: state.auth.isLoading,
    }));
    const [showWelcome, setShowWelcome] = useState(true);
    const {onSetAccount, account} = useAuth();
    const {Login} = useAuth();
    const {showToast} = useToast();
    const [showPassword, setShowPassword] = useState(true);
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        });
        BackHandler.removeEventListener('hardwareBackPress', () => {
            return true;
        });
    }, []);
    // hiden img
    function changeStatusWelcome() {
        setShowWelcome(!showWelcome);
    }

    function onLogin() {
        if (userName !== '' && passWord !== '') {
            Login(account);
            dispatch(setIsLoading(true));
        }
        if (userName !== '') {
            setStatusMessageUserName(false);
        } else {
            setStatusMessageUserName(true);
            setMessageUserName(`${t('sign_in.message_empty_username')}`);
        }

        if (passWord !== '') {
            setStatusMessagePassWord(false);
            // Login(account);
        } else {
            setStatusMessagePassWord(true);
            setMessagePassWord(`${t('sign_in.message_empty_password')}`);
        }
    }

    const handleBiometric=async (biometric: any)=>{{

        const rnBiometrics =
            Platform.OS == 'ios'
                ? new ReactNativeBiometrics({allowDeviceCredentials: true})
                : new ReactNativeBiometrics();
        const epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
        const payload = epochTimeSeconds + 'some message';
        // const pinCode = await AsyncStorage.getItem('pinCode');
        if(biometric==true)
        {rnBiometrics.biometricKeysExist().then(async resultObject => {
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
                            const accountLocal={
                                'username': localUserName,
                                'password': localPassword
                            };
                            Login(accountLocal);
                        }
                        else {
                            showToast({
                                type: 'error',
                                title: `${t('sign_in.permission')}`
                            });
                        }
                    })
                    .catch(err => {
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
        }else{
            showToast({
                type: 'error',
                title: `${t('sign_in.permission')}`
            });
        }}
    };
    const biometricTouch= async ()=>{
        handleBiometric(biometric);
    };

    // kiểm tra username
    function onChangeUserNameInput(text: string) {
    // Xóa khoảng trắng ở đầu và cuối chuỗi
        const trimmedValue = text.trim();
        // Kiểm tra trường nhập liệu rỗng
        if (trimmedValue !== '') {
            setStatusMessageUserName(false);
            // Kiểm tra độ dài chuỗi sau khi đã xóa khoảng trắng
            if (trimmedValue.length <= 50 && !trimmedValue.includes(' ')) {
                setStatusMessageUserName(false);
                setUserName(trimmedValue);
                onSetAccount('username', trimmedValue);
            } else {
                setStatusMessageUserName(true);
                setMessageUserName(`${t('sign_in.message_check_trim')}`);
            }
        } else {
            setStatusMessageUserName(true);
            setMessageUserName(`${t('sign_in.message_empty_username')}`);
        }
    }

    // Kiểm tra password
    function onChangePassWordInput(text: string) {
    // Xóa khoảng trắng ở đầu và cuối chuỗi
        const trimmedValue = text.trim();
        // Kiểm tra độ dài chuỗi sau khi đã xóa khoảng trắng
        if (trimmedValue.length <= 50 && trimmedValue !== '') {
            setStatusMessagePassWord(false);
            setPassWord(trimmedValue);
            onSetAccount('password', trimmedValue);
        } else {
            setStatusMessagePassWord(true);
            setMessagePassWord(`${t('sign_in.message_empty_password')}`);
        }
    }

    // const handleBiometric = async () => {
    //     const rnBiometrics =
    //   Platform.OS == 'ios'
    //       ? new ReactNativeBiometrics({allowDeviceCredentials: true})
    //       : new ReactNativeBiometrics();
    //     const epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
    //     const payload = epochTimeSeconds + 'some message';
    //     // const pinCode = await AsyncStorage.getItem('pinCode');
    //     rnBiometrics.biometricKeysExist().then(async resultObject => {
    //         const {keysExist} = resultObject;
    //         if (keysExist) {
    //             // console.log('Keys exist');
    //             rnBiometrics
    //                 .createSignature({
    //                     promptMessage: `${t('Signinbio.touch')}`,
    //                     payload: payload,
    //                 })
    //                 .then(async resultObject => {
    //                     const {success, signature} = resultObject;
    //                     if (success) {
    //                         // console.log('CreateSignature ', signature);
    //                         // if (pinCode === pin) {
    //                         navigation.navigate('TabNavigation');
    //                         // }
    //                     }
    //                 })
    //                 .catch(err => {
    //                     // console.log('loiiiiii123 ', err.message);
    //                 });
    //         } else {
    //             // console.log('Keys do not exist or were deleted');
    //             await rnBiometrics.createKeys().then(resultObject => {
    //                 const {publicKey} = resultObject;
    //                 // console.log(publicKey);
    //             });
    //             rnBiometrics
    //                 .createSignature({
    //                     promptMessage: `${t('Signinbio.touch')}`,
    //                     payload: payload,
    //                 })
    //                 .then(async resultObject => {
    //                     const {success, signature} = resultObject;
    //                     if (success) {
    //                         // console.log('CreateSignature1 ', signature);
    //                         navigation.navigate('TabNavigation');
    //                     }
    //                 })
    //                 .catch(err => {
    //                     // console.log('loiiiiii123 ', err);
    //                 });
    //         }
    //     });
    // };

    return (
        <View style={styles.mContainer}>
            <Loading loading={isLoading} />
            {/* Hidden keyboard input */}
            <View style={styles.mHeader}>
                <HeaderOnboard />
            </View>

            <View style={styles.mThen} onTouchMove={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    style={styles.KeyBoardView}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    {/*Icon back left*/}

                    {/*Logo Sidoc*/}

                    <View style={styles.mBody}>
                        {showWelcome ? (
                            <Image style={styles.mWc} source={images.Welcome} />
                        ) : null}
                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.mTextWc}>{t('sign_in.sign_in')}</Text>
                        <Text style={styles.mTextUnderWc}>{t('sign_in.instruct')}</Text>
                    </View>

                    <View style={styles.mEndThen}>
                        <View style={styles.mLoginBox}>
                            {/*Input userName*/}
                            <Text style={styles.mTextUserName}>{t('sign_in.username')}</Text>
                            <View style={styles.mViewLogin}>
                                <Input
                                    typeInput={'symbol'}
                                    statusInput={'normal'}
                                    defaultValueText={userName}
                                    onFocus={() => {}}
                                    onBlur={() => {}}
                                    onEndEditing={event => {
                                        onChangeUserNameInput(event.nativeEvent.text);
                                    }}
                                    iconName={icons.ic_user}
                                    placeholderText={`${t('sign_in.username')}`}
                                    error={statusMessageUserName}
                                    textError={messageUserName}
                                />
                            </View>

                            {/*Input passWord*/}
                            <Text style={styles.mTextUserName}>{t('sign_in.password')}</Text>
                            <View style={styles.mBoxPassword}>
                                <Input
                                    typeInput={'symbol'}
                                    statusInput={'password'}
                                    error={statusMessagePassWord}
                                    textError={messagePassWord}
                                    onEndEditing={event => {
                                        onChangePassWordInput(event.nativeEvent.text);
                                    }}
                                    iconName={icons.ic_key}
                                    placeholderText={`${t('sign_in.password')}`}
                                    defaultValueText={passWord}
                                    onFocus={changeStatusWelcome}
                                    onBlur={changeStatusWelcome}
                                />
                            </View>
                            <View style={styles.mWrapLogin}>
                                <Button
                                    text={t('sign_in.sign_in')}
                                    typeButton={'primary'}
                                    sizeButton={'large'}
                                    onPressButton={onLogin}
                                />
                            </View>
                            <Text style={styles.mTextUnderButton}>
                                {t('passRecovery.option')}
                            </Text>
                            <View style={{justifyContent: 'space-between'}}>
                                <TouchableOpacity style={styles.mViewTouch} onPress={() => {
                                    biometricTouch();                                }}>
                                    <Image style={styles.mImageTouch} source={icons.ic_union}/>
                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity
                                        style={styles.mViewForgot}
                                        onPress={() => {
                                            navigation.navigate('PasswordRecovery');
                                        }}>
                                        <Text style={styles.mTextForgot}>
                                            {t('sign_in.forgot')}
                                        </Text>
                                        {/* <View style={style.line} /> */}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
}

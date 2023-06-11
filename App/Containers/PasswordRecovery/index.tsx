import React, { useState } from 'react';
import {
    View,
    Image,
    SafeAreaView,
    Keyboard,
    Text,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import {TouchableOpacity} from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useChangeLang} from '../../Hooks/useLang';
import {useAuth} from '../../Hooks/API/Auth';
import {RootState} from '../../Store/reduxProvider';
import { styles } from './PasswordRecoveryStyles';
import { HeaderOnboard } from 'Components/Commons/HeaderOnboard';
import { Input } from 'Components/Commons/Input';
import icons from 'Configs/Constants/icons';
import { Button } from 'Components/Commons/Button';
import { setIsLoading } from 'Store/Reducers/authSlice';
import images from 'Configs/Constants/images';
export default function PasswordRecovery({navigation}: any) {
    const {t} = useTranslation();
    const {lang} = useSelector((state: RootState) => state.lang);
    const {onChangeLang} = useChangeLang();
    const {onSetAccountRecovery, accountRecovery, forgotPassword} = useAuth();
    const [messageUserName, setMessageUserName] = useState<string>('');
    const [statusMessageUserName, setStatusMessageUserName] = useState(false);
    const [messageEmail, setMessageEmail] = useState<string>('');
    const [statusMessageEmail, setStatusMessageEmail] = useState(false);
    const showAlert = useSelector(
        (state: RootState) => state.auth.user?.showAlertRecovery,
    );
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [showWelcome, setShowWelcome] = useState(true);
    const dispatch = useDispatch();

    function Request() {
        if (userName !== '' && email !== '') {
            forgotPassword(accountRecovery);
            // dispatch(setIsLoading(true));
        }
        if (userName !== '') {
            setStatusMessageUserName(false);
        } else {
            setStatusMessageUserName(true);
            setMessageUserName(`${t('sign_in.message_empty_username')}`);
        }

        if (email !== '') {
            setStatusMessageEmail(false);
            // Login(account);
        } else {
            setStatusMessageEmail(true);
            setMessageEmail(`${t('sign_in.message_empty_username')}`);
        }
    }
    function Cancle(){
        navigation.navigate('SignIn');
    }

    function changeStatusWelcome() {
        setShowWelcome(!showWelcome);
    }
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
                onSetAccountRecovery('username', trimmedValue);
            } else {
                setStatusMessageUserName(true);
                setMessageUserName(`${t('sign_in.message_check_trim')}`);
            }
        } else {
            setStatusMessageUserName(true);
            setMessageUserName(`${t('sign_in.message_empty_username')}`);
        }
    }
    function onChangePassWordInput(text: string) {
        // Xóa khoảng trắng ở đầu và cuối chuỗi
        const trimmedValue = text.trim();
        // Kiểm tra độ dài chuỗi sau khi đã xóa khoảng trắng
        if (trimmedValue.length <= 50 && trimmedValue !== '') {
            setStatusMessageEmail(false);
            setEmail(trimmedValue);
            onSetAccountRecovery('email', trimmedValue);
        } else {
            setStatusMessageEmail(true);
            setMessageEmail(`${t('passRecovery.message_empty_email')}`);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mHeader}>
                <HeaderOnboard />
            </View>
            {/*<TouchableWithoutFeedback onPress={Keyboard.dismiss}>*/}
            <View style={styles.then } onTouchMove={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    style={styles.KeyBoardView}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                    <View style={styles.body}>
                        {
                            showWelcome ? <Image
                                style={styles.Wc}
                                source={images.welcome_reco}
                            /> : null
                        }

                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.mTextWc}>{t('passRecovery.PasswordRecovery')}</Text>
                        <Text style={styles.mTextUnderWc}>{t('passRecovery.introduction')}</Text>
                    </View>
                    <View style={styles.endThen}>
                        <Text style={styles.mTextUserName}>{t('sign_in.username')}</Text>
                        <View style={styles.mViewLogin}>
                            <Input typeInput={'symbol'} statusInput={'normal'} defaultValueText={userName}
                                onFocus={()=>{}}
                                onBlur={()=>{}}
                                onEndEditing={(event) => {
                                    onChangeUserNameInput(event.nativeEvent.text);
                                }}
                                iconName={icons.ic_user} placeholderText={`${t('sign_in.username')}`}
                                error={statusMessageUserName}
                                textError={messageUserName} />
                        </View>

                        {/*Input passWord*/}
                        <Text style={styles.mTextUserName}>{t('passRecovery.email')}</Text>
                        <View style={styles.mBoxPassword}>
                            <Input typeInput={'symbol'} statusInput={'normal'} error={statusMessageEmail}
                                textError={messageEmail}
                                onEndEditing={(event) => {
                                    onChangePassWordInput(event.nativeEvent.text);
                                }
                                } iconName={icons.ic_mail} placeholderText={`${t('passRecovery.email')}`}
                                defaultValueText={email}

                                onFocus={changeStatusWelcome}
                                onBlur={changeStatusWelcome}
                            />
                        </View>
                        <View style={styles.mWrapLogin}>
                            <Button text={t('passRecovery.cancle')} typeButton={'secondary'} sizeButton={'normal'} onPressButton={Cancle} />
                            <Button text={t('passRecovery.request')} typeButton={'primary'} sizeButton={'normal'} onPressButton={Request} />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
}


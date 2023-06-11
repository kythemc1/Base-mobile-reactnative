import React, {useState} from 'react';
import {
    View,
    Image,
    SafeAreaView,
    Keyboard,
    Text,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useAuth} from '../../Hooks/API/Auth';
import { styles } from './ChangePasswordStyles';
import {HeaderOnboard} from 'Components/Commons/HeaderOnboard';
import images from 'Configs/Constants/images';
import {Input} from 'Components/Commons/Input';
import icons from 'Configs/Constants/icons';
import {Button} from 'Components/Commons/Button';
import {setIsLoading} from 'Store/Reducers/authSlice';
import {useDispatch} from 'react-redux';
export default function ChangePassword({navigation}: any) {
    const {t} = useTranslation();
    const [messagePassWord, setMessagePassWord] = useState<string>('');
    const [statusMessagePassWord, setStatusMessagePassWord] = useState(false);
    const [messageNewPassword, setMessageNewPassword] = useState<string>('');
    const [statusMessageNewPassword, setStatusMessageNewPassword] = useState(false);
    const [messageConfirmNewPassword, setMessageConfirmNewPassword] = useState<string>('');
    const [statusMessageConfirmNewPassword, setStatusMessageConfirmNewPassword] = useState(false);
    const [password, setPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
    const {onSetResetPassword, resetPasswordValue, ResetPassword} = useAuth();
    const [showWelcome, setShowWelcome] = useState(true);
    const dispatch =useDispatch();
    function onChangeNewPasswordInput(text: string) {
        // Xóa khoảng trắng ở đầu và cuối chuỗi
        const trimmedValue = text.trim();
        // Kiểm tra độ dài chuỗi sau khi đã xóa khoảng trắng
        if (trimmedValue.length <= 50 && trimmedValue !== '') {
            setStatusMessageNewPassword(false);
            setNewPassword(trimmedValue);
            onSetResetPassword('newPassword', trimmedValue);
        } else {
            setStatusMessageNewPassword(true);
            setMessageNewPassword(`${t('changepassword.message_check_trim_new_pass')}`);
        }
    }
    function onChangeConfirmPasswordInput(text: string) {
        // Xóa khoảng trắng ở đầu và cuối chuỗi
        const trimmedValue = text.trim();
        // Kiểm tra độ dài chuỗi sau khi đã xóa khoảng trắng
        if (trimmedValue.length <= 50 && trimmedValue !== '') {
            setStatusMessageConfirmNewPassword(false);
            setConfirmNewPassword(trimmedValue);
            onSetResetPassword('confirmNewPassword', trimmedValue);
        } else {
            setStatusMessageConfirmNewPassword(true);
            setMessageConfirmNewPassword(`${t('changepassword.message_check_trim_confirm')}`);
        }
    }
    function onReset() {
        if (password !== '' && newPassword !== '' && confirmNewPassword !== '') {
            ResetPassword(resetPasswordValue);
            dispatch(setIsLoading(true));
        }
        if (newPassword !== '') {
            setStatusMessageNewPassword(false);
        } else {
            setStatusMessageNewPassword(true);
            setMessageNewPassword(`${t('changepassword.message_check_trim')}`);
        }

        if (password !== '') {
            setStatusMessagePassWord(false);
            // Login(account);
        } else {
            setStatusMessagePassWord(true);
            setMessagePassWord(`${t('changepassword.message_check_trim_new_pass')}`);
        }

        if (confirmNewPassword !== '') {
            setStatusMessageConfirmNewPassword(false);
        } else {
            setStatusMessageConfirmNewPassword(true);
            setMessageConfirmNewPassword(`${t('changepassword.message_check_trim_confirm')}`);
        }
    }
    function onChangePasswordInput(text: string) {
        // Xóa khoảng trắng ở đầu và cuối chuỗi
        const trimmedValue = text.trim();
        // Kiểm tra trường nhập liệu rỗng
        if (trimmedValue !== '') {
            setStatusMessagePassWord(false);
            // Kiểm tra độ dài chuỗi sau khi đã xóa khoảng trắng
            if (trimmedValue.length <= 50 && !trimmedValue.includes(' ')) {
                setStatusMessagePassWord(false);
                setPassword(trimmedValue);
                onSetResetPassword('password', trimmedValue);
            } else {
                setStatusMessagePassWord(true);
                setMessagePassWord(`${t('changepassword.message_check_trim')}`);
            }
        } else {
            setStatusMessagePassWord(true);
            setMessagePassWord(`${t('changepassword.message_check_trim')}`);
        }
    }
    function changeStatusWelcome() {
        setShowWelcome(!showWelcome);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <HeaderOnboard/>
            </View>
            <View style={styles.then} onTouchMove={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    style={styles.KeyBoardView}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={styles.body}>
                        {
                            showWelcome ? <Image
                                style={styles.Wc}
                                source={images.Welcome}
                            /> : null
                        }

                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.textwc}> {t('changepassword.changepass')}</Text>
                        <Text style={styles.mTextUnderWc}>Lorem Ipsum is simply dummy text of the printing co-op.</Text>
                    </View>
                    <View style={styles.endThen}>
                        <View style={styles.loginbox}>
                            <Text style={styles.mTextUserName}>{t('changepassword.password')}</Text>
                            <View style={styles.viewlogin}>
                                <Input typeInput={'symbol'} statusInput={'password'} defaultValueText={password}
                                    onFocus={()=>{}}
                                    onBlur={()=>{}}
                                    onEndEditing={(event) => {
                                        onChangePasswordInput(event.nativeEvent.text);
                                    }}
                                    iconName={icons.ic_key} placeholderText={`${t('changepassword.password')}`}
                                    error={statusMessagePassWord}
                                    textError={messagePassWord} />
                            </View>
                            <Text style={styles.mTextUserName}>{t('changepassword.new_pass')}</Text>
                            <View style={styles.boxpassword}>
                                <Input typeInput={'symbol'} statusInput={'password'} error={statusMessageNewPassword}
                                    textError={messageNewPassword}
                                    onEndEditing={(event) => {
                                        onChangeNewPasswordInput(event.nativeEvent.text);
                                    }
                                    } iconName={icons.ic_key} placeholderText={`${t('changepassword.new_pass')}`}
                                    defaultValueText={newPassword}

                                    onFocus={changeStatusWelcome}
                                    onBlur={changeStatusWelcome}
                                />
                            </View>
                            <Text style={styles.mTextUserName}>{t('changepassword.confirm_pass')}</Text>
                            <View style={styles.boxpassword}>
                                <Input typeInput={'symbol'} statusInput={'password'} error={statusMessageConfirmNewPassword}
                                    textError={messageConfirmNewPassword}
                                    onEndEditing={(event) => {
                                        onChangeConfirmPasswordInput(event.nativeEvent.text);
                                    }
                                    } iconName={icons.ic_key} placeholderText={`${t('changepassword.confirm_pass')}`}
                                    defaultValueText={confirmNewPassword}
                                    onFocus={changeStatusWelcome}
                                    onBlur={changeStatusWelcome}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.wraplogin}>
                        <Button text={`${t('changepassword.button')}`} typeButton={'primary'} sizeButton={'large'} onPressButton={()=>{onReset;}}/>
                    </View>
                </KeyboardAvoidingView>
                {/* </ScrollView> */}

            </View>
        </SafeAreaView>
    );
}

import {Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import icons from 'Configs/Constants/icons';
import {styles} from 'Components/Commons/Input/styles';
import {useState} from 'react';
import {colors} from 'Configs/UI/Colors';

interface inputInterface {
    typeInput: 'normal' | 'symbol'; // kiểu dạng input box
    statusInput?: 'normal' | 'password';// trạng thái input box khi mà kiểu dạng là icon
    iconName?: any;
    placeholderText?: string;
    onEndEditing?: (event: any) => void;
    defaultValueText?: string;
    error?: boolean;
    textError?: string;
    onFocus?: any;
    onBlur?: any;

}

export const Input = (props: inputInterface) => {
    // Trạng thái secureTextEntry input
    const [statusPassword, setStatusPassWord] = useState<boolean>(true);
    const [focus, setFocus] = useState<boolean>(false);

    // Hàm thay đổi trạng thái
    function changeSecureTextEntry() {
        setStatusPassWord(!statusPassword);
    }

    function handleFocusInput() {
        setFocus(true);
        props.onFocus();
    }

    function handleBlurInput() {
        setFocus(false);
        props.onBlur();
    }

    return (
        <KeyboardAvoidingView>
            {/*Kiểu cách bình thường*/}
            {props.typeInput == 'normal' ?
                // trạng thái input khi bị lỗi
                !props.error ?
                    <View style={[styles.mContainerInputNormal, {
                        borderColor: `${focus ? colors.color_primary1 : null}`,
                        borderWidth: focus ? 1 : 0
                    }]}>
                        <TextInput
                            style={styles.mInputNormal}
                            placeholder={props.placeholderText}
                            placeholderTextColor={focus ? colors.color_dark_grey : colors.color_grey2}
                            defaultValue={props.defaultValueText}
                            onBlur={handleBlurInput}
                            onFocus={handleFocusInput}
                            onEndEditing={props.onEndEditing}
                        />
                    </View> :
                    <View>
                        <View style={[styles.mContainerInputNormal, {
                            borderColor: colors.color_primary2,
                            borderWidth: 1
                        }]}>
                            <TextInput
                                style={styles.mInputNormal}
                                placeholder={props.placeholderText}
                                placeholderTextColor={focus ? colors.color_dark_grey : colors.color_grey2}
                                defaultValue={props.defaultValueText}
                                onBlur={handleBlurInput}
                                onFocus={handleFocusInput}
                                onEndEditing={props.onEndEditing}
                            />
                        </View>
                        <View style={styles.mContainerInputError}>
                            <View style={styles.mIconError}>
                                <Image source={icons.ic_close_circle}
                                    style={[styles.img, {tintColor: colors.color_primary2}]}
                                    resizeMode={'contain'}/>
                            </View>
                            <Text style={styles.mTextError}>{props.textError}</Text>
                        </View>
                    </View> : null}
            {/*Kiểu cách icon*/}
            {props.typeInput == 'symbol' ?
                // Trạng thái khi là input user box
                props.statusInput == 'normal' ? (
                    !props.error ?
                        <View style={
                            [styles.mContainerInputUserName, {
                                borderColor: `${focus ? colors.color_primary1 : null}`,
                                borderWidth: focus ? 1 : 0
                            }]}>
                            <View style={styles.mIcon}>
                                <Image source={props.iconName} resizeMode={'contain'}
                                    style={[styles.img, {tintColor: props.defaultValueText != '' ? colors.color_dark_grey : focus ? colors.color_dark_grey : colors.color_grey2}]}/>
                            </View>
                            <TextInput
                                style={styles.mInputUserName}
                                placeholder={props.placeholderText}
                                placeholderTextColor={focus ? colors.color_dark_grey : colors.color_grey2}
                                defaultValue={props.defaultValueText}
                                onBlur={handleBlurInput}
                                onFocus={handleFocusInput}
                                onEndEditing={props.onEndEditing}

                            />
                        </View> : <View>
                            <View style={
                                [styles.mContainerInputUserName, {
                                    borderColor: colors.color_primary2,
                                    borderWidth: 1
                                }]}>
                                <View style={styles.mIcon}>
                                    <Image source={props.iconName} resizeMode={'contain'}
                                        style={[styles.img, {tintColor: props.defaultValueText != '' ? colors.color_dark_grey : focus ? colors.color_dark_grey : colors.color_grey2}]}/>
                                </View>
                                <TextInput
                                    style={styles.mInputUserName}
                                    placeholder={props.placeholderText}
                                    placeholderTextColor={focus ? colors.color_dark_grey : colors.color_grey2}
                                    defaultValue={props.defaultValueText}
                                    onBlur={handleBlurInput}
                                    onFocus={handleFocusInput}
                                    onEndEditing={props.onEndEditing}

                                />
                            </View>
                            <View style={styles.mContainerInputError}>
                                <View style={styles.mIconError}>
                                    <Image source={icons.ic_close_circle}
                                        style={[styles.img, {tintColor: colors.color_primary2}]}
                                        resizeMode={'contain'}/>
                                </View>
                                <Text style={styles.mTextError}>{props.textError}</Text>
                            </View>
                        </View>
                ) : (
                    // Trạng thái khi là input password box
                    !props.error ?
                        <View style={[styles.mContainerInputPassWord, {
                            borderColor: `${focus ? colors.color_primary1 : null}`,
                            borderWidth: focus ? 1 : 0
                        }]}>
                            <View style={styles.mIcon}>
                                <Image source={props.iconName} resizeMode={'contain'}
                                    style={[styles.img, {tintColor: props.defaultValueText != '' ? colors.color_dark_grey : focus ? colors.color_dark_grey : colors.color_grey2}]}/>
                            </View>
                            <TextInput
                                style={styles.mInputPassWord}
                                placeholder={props.placeholderText}
                                secureTextEntry={statusPassword}
                                placeholderTextColor={focus ? colors.color_dark_grey : colors.color_grey2}
                                defaultValue={props.defaultValueText}
                                onBlur={handleBlurInput}
                                onFocus={handleFocusInput}
                                onEndEditing={props.onEndEditing}

                            />
                            <TouchableOpacity style={styles.mIconEye} onPress={changeSecureTextEntry}>
                                <Image source={statusPassword ? icons.ic_eyeoff : icons.ic_eyeon} resizeMode={'contain'}
                                    style={[styles.img, {tintColor: props.defaultValueText != '' ? colors.color_dark_grey : focus ? colors.color_dark_grey : colors.color_grey2}]}/>
                            </TouchableOpacity>
                        </View> :
                        <View>
                            <View style={[styles.mContainerInputPassWord, {
                                borderColor: colors.color_primary2,
                                borderWidth: 1
                            }]}>
                                <View style={styles.mIcon}>
                                    <Image source={props.iconName} resizeMode={'contain'}
                                        style={[styles.img, {tintColor: props.defaultValueText != '' ? colors.color_dark_grey : focus ? colors.color_dark_grey : colors.color_grey2}]}/>
                                </View>
                                <TextInput
                                    style={styles.mInputPassWord}
                                    placeholder={props.placeholderText}
                                    secureTextEntry={statusPassword}
                                    placeholderTextColor={focus ? colors.color_dark_grey : colors.color_grey2}
                                    defaultValue={props.defaultValueText}
                                    onBlur={handleBlurInput}
                                    onFocus={handleFocusInput}
                                    onEndEditing={props.onEndEditing}

                                />
                                <TouchableOpacity style={styles.mIconEye} onPress={changeSecureTextEntry}>
                                    <Image source={statusPassword ? icons.ic_eyeoff : icons.ic_eyeon}
                                        resizeMode={'contain'}
                                        style={[styles.img, {tintColor: props.defaultValueText != '' ? colors.color_dark_grey : focus ? colors.color_dark_grey : colors.color_grey2}]}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.mContainerInputError}>
                                <View style={styles.mIconError}>
                                    <Image source={icons.ic_close_circle}
                                        style={[styles.img, {tintColor: colors.color_primary2}]}
                                        resizeMode={'contain'}/>
                                </View>
                                <Text style={styles.mTextError}>{props.textError}</Text>
                            </View>
                        </View>
                )
                : null
            }
        </KeyboardAvoidingView>


    );
};

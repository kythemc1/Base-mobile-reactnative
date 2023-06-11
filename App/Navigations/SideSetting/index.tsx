import icons from 'Configs/Constants/icons';
import images from 'Configs/Constants/images';
import {colors} from 'Configs/UI/Colors';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Avatar, Modal, ProgressBar} from 'react-native-paper';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import navigator from 'Utils/Navigator';
import React, {useState} from 'react';
import sizes from 'Configs/UI/Sizes';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';
import {useAuth} from 'Hooks/API/Auth';
import {CLEAR_DATA_MY_DOCUMENT} from 'Store/Reducers/myDocumentSlice';
import {CLEAR_DATA_DOCUMENT_TYPE} from 'Store/Reducers/documentTypeSlice';
import {useToast} from 'Hooks/useToast';

interface SideSetting {
    visible: boolean;
    onDismis: () => void;
    navigation?: any;
    onPressShowBio: ()=>void;
}

const ItemSelect = ({title, onPress, icon}: { title: string, onPress: () => void, icon: any }) => {
    return (
        <TouchableOpacity
            style={styles.mMainMenu}
            onPress={onPress}>
            <Image source={icon} style={styles.mIcon}/>
            <Text style={styles.mTextMainMenu}>{title}</Text>
        </TouchableOpacity>
    );
};
export const SideSetting = (props: SideSetting) => {
    // app version
    const appVersion = DeviceInfo.getVersion();
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {onLogout} = useAuth();
    const {showToast} = useToast();
    const {
        fullName,
        email
    } = useSelector((state: RootState) => ({
        fullName: state.auth.user?.fullNameUser,
        email: state.auth.user?.email
    }));
    return (

        <Modal
            visible={props.visible}
            onDismiss={props.onDismis}
            style={styles.mModalContainer}
        >
            <View style={styles.mContainer}>
                {/* Logo vs version */}
                <View style={styles.mLogoView}>
                    <Image source={images.Logo} style={styles.mLogo}/>
                    <View>
                        <Text style={styles.mTextVersion}>{'v.' + appVersion}</Text>
                    </View>
                </View>
                {/* profile */}
                <View style={styles.mProfileView}>
                    <Avatar.Image source={{uri: 'https://i.pravatar.cc/300'}} size={40}/>
                    <View style={{marginLeft: sizes._8sdp}}>
                        <Text style={styles.mTextProfile} numberOfLines={1} ellipsizeMode={'tail'}>{fullName}</Text>
                        <Text style={styles.mTextProfileEmail} numberOfLines={1} ellipsizeMode={'tail'}>{email}</Text>
                    </View>
                </View>
                {/* Main menu */}
                <View>
                    <ItemSelect title={t('setting.change_password')} onPress={() => {
                        navigator.reset('ChangePassword');
                    }} icon={icons.ic_change_password}/>
                    <ItemSelect title={t('setting.default_signing_method')} onPress={() => {
                        // navigator.reset('ChangePassword');
                        showToast({type: 'success', title: 'Note', message: 'Updating'});
                    }} icon={icons.ic_pen_tool}/>
                    <ItemSelect title={t('setting.information_sidoc')} onPress={() => {
                        navigator.reset('Intro');
                    }} icon={icons.ic_infomation}/>
                    <ItemSelect title={t('setting.customer_management')} onPress={() => {
                        navigator.reset('ManageCustomer');
                    }} icon={icons.ic_customer_manage}/>
                    <ItemSelect title={t('setting.login_with_touch/faceid')} onPress={() => {
                        props.onPressShowBio();
                    }} icon={icons.ic_touchid}/>
                    <ItemSelect title={t('setting.logout')} onPress={() => {
                        onLogout();
                        dispatch(CLEAR_DATA_MY_DOCUMENT);
                        dispatch(CLEAR_DATA_DOCUMENT_TYPE);
                    }} icon={icons.ic_logout}/>
                </View>
            </View>
        </Modal>
    );
};

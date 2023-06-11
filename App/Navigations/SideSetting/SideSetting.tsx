import icons from 'Configs/Constants/icons';
import images from 'Configs/Constants/images';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Avatar} from 'react-native-paper';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import React from 'react';
import sizes from 'Configs/UI/Sizes';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';
import {useAuth} from 'Hooks/API/Auth';
import {CLEAR_DATA_MY_DOCUMENT} from 'Store/Reducers/myDocumentSlice';
import {useToast} from 'Hooks/useToast';
import Modal from 'react-native-modal';
import {CLEAR_DATA} from 'Store/Reducers/amoutTextSlice';
import {useChangeLang} from 'Hooks/useLang';
import { AVATAR_LINK } from '@env';

interface SideSetting {
  visible: boolean;
  onDismis: () => void;
  navigation?: any;
}

const ItemSelect = ({
    title,
    onPress,
    icon,
}: {
  title: string;
  onPress: () => void;
  icon: any;
}) => {
    return (
        <TouchableOpacity style={styles.mMainMenu} onPress={onPress}>
            <Image source={icon} style={styles.mIcon} />
            <Text
                style={styles.mTextMainMenu}
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};
export const SideSetting = (props: SideSetting) => {
    // app version
    const appVersion = DeviceInfo.getVersion();
    const {t} = useTranslation();
    const {lang} = useSelector((state: RootState) => state.lang);
    const {onChangeLang} = useChangeLang();
    const dispatch = useDispatch();
    const {onLogout} = useAuth();
    const {showToast} = useToast();
    const {fullName, email} = useSelector((state: RootState) => ({
        fullName: state.auth.user?.fullNameUser,
        email: state.auth.user?.email,
    }));
    return (
        <Modal
            isVisible={props.visible}
            onBackdropPress={props.onDismis}
            style={styles.mModalContainer}
            animationIn={'fadeInLeft'}
            animationOut={'fadeOutLeft'}>
            <View style={styles.mContainer}>
                {/* Logo vs version */}
                <View style={styles.mLogoView}>
                    <Image source={images.Logo} style={styles.mLogo} />
                    <View>
                        <Text style={styles.mTextVersion}>{'v.' + appVersion}</Text>
                    </View>
                </View>
                {/* profile */}
                <View style={styles.mProfileView}>
                    <Avatar.Image source={{uri: AVATAR_LINK}} size={40} />
                    <View style={{marginLeft: sizes._8sdp}}>
                        <Text
                            style={styles.mTextProfile}
                            numberOfLines={1}
                            ellipsizeMode={'tail'}>
                            {fullName}
                        </Text>
                        <Text
                            style={styles.mTextProfileEmail}
                            numberOfLines={1}
                            ellipsizeMode={'tail'}>
                            {email}
                        </Text>
                    </View>
                </View>
                {/* Main menu */}
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginRight:sizes._16sdp
                        }}>
                        <ItemSelect
                            title={t('setting.change_lang')}
                            onPress={() => onChangeLang(lang)}
                            icon={icons.ic_lang}
                        />
                        <Text style={styles.mLang}>{lang == 'vi' ? 'VN' : 'EN'}</Text>
                    </View>
                    <ItemSelect
                        title={t('setting.change_password')}
                        onPress={() => {
                            props.navigation.navigate('ChangePassword');
                        }}
                        icon={icons.ic_change_password}
                    />
                    <ItemSelect
                        title={t('setting.default_signing_method')}
                        onPress={() => {
                            showToast({type: 'success', title: 'Note', message: 'Updating'});
                        }}
                        icon={icons.ic_pen_tool}
                    />
                    <ItemSelect
                        title={t('setting.information_sidoc')}
                        onPress={() => {
                        }}
                        icon={icons.ic_infomation}
                    />
                    <ItemSelect
                        title={t('setting.customer_management')}
                        onPress={() => {
                        }}
                        icon={icons.ic_customer_manage}
                    />
                    <ItemSelect
                        title={t('setting.login_with_touch/faceid')}
                        onPress={() => {}}
                        icon={icons.ic_touchid}
                    />
                    <ItemSelect
                        title={t('setting.logout')}
                        onPress={() => {
                            onLogout();
                            props.navigation.navigate('SignIn');
                            props.onDismis();
                            dispatch(CLEAR_DATA_MY_DOCUMENT());
                            dispatch(CLEAR_DATA());
                        }}
                        icon={icons.ic_logout}
                    />
                </View>
            </View>
        </Modal>
    );
};

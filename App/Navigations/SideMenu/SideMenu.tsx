import icons from 'Configs/Constants/icons';
import images from 'Configs/Constants/images';
import {colors} from 'Configs/UI/Colors';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {ProgressBar} from 'react-native-paper';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
import {useDispatch} from 'react-redux';
import {CLEAR_DATA_MY_DOCUMENT} from 'Store/Reducers/myDocumentSlice';
import {CLEAR_DATA} from 'Store/Reducers/amoutTextSlice';

interface SideMenu {
  visible: boolean;
  onDismis: () => void;
  navigation?: any;
  onShowSetting?: () => void;
}

export const SideMenu = (props: SideMenu) => {
    // app version
    const appVersion = DeviceInfo.getVersion();
    const dispatch = useDispatch();
    const {t} = useTranslation();
    return (
        <Modal
            isVisible={props.visible}
            onBackdropPress={props.onDismis}
            style={styles.mModalContainer}
            animationIn={'fadeInLeft'}
            animationOut={'fadeOutLeft'}
            backdropOpacity={0.6}>
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
                    <Text style={styles.mTextProfile}>{t('side_menu.profile')}</Text>
                </View>
                {/* Main menu */}
                <View>
                    <TouchableOpacity
                        style={styles.mMainMenu}
                        onPressOut={props.onShowSetting}>
                        <Image source={icons.ic_setting} style={styles.mIcon} />
                        <Text style={styles.mTextMainMenu}>{t('side_menu.setting')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.mMainMenu}>
                            <Image source={icons.ic_device_message} style={styles.mIcon} />
                            <Text style={styles.mTextMainMenu}>{t('side_menu.help')}</Text>
                        </View>
                    </TouchableOpacity>

                    {/* ProgressBar */}
                    <View>
                        <View style={styles.mMainMenu}>
                            <Image source={icons.ic_box} style={styles.mIcon} />
                            <Text style={styles.mTextMainMenu}>{t('side_menu.storage')}</Text>
                        </View>
                        <View style={styles.mProgressView}>
                            <ProgressBar
                                progress={0.5}
                                color={colors.color_primary1}
                                style={styles.mProgress}
                            />
                            <Text style={styles.mTextProgress}>
                                <Text style={styles.mTextCountStorage}>50 </Text>
                of 100 GB used
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.mMainMenu}>
                            <Image source={icons.ic_list_contract} style={styles.mIcon} />
                            <Text style={styles.mTextMainMenu}>
                                {t('side_menu.document')}
                            </Text>
                        </View>
                        <View style={styles.mProgressView}>
                            <ProgressBar
                                progress={0.5}
                                color={colors.color_primary2}
                                style={styles.mProgress}
                            />
                            <Text style={styles.mTextProgress}>
                                <Text style={styles.mTextCountDocument}>78 </Text>
                of 100 GB used
                            </Text>
                        </View>
                    </View>
                    {/* Line */}
                    <View style={styles.mLineDashed}></View>
                    {/* Main menu */}
                    <TouchableOpacity>
                        <View style={styles.mMainMenu}>
                            <Image source={icons.ic_document_template} style={styles.mIcon} />
                            <Text style={styles.mTextMainMenu}>
                                {t('side_menu.document_template')}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.mMainMenu}>
                            <Image source={icons.ic_partner} style={styles.mIcon} />
                            <Text style={styles.mTextMainMenu}>
                                {t('side_menu.partners')}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('SignIn');
                            props.onDismis();
                            dispatch(CLEAR_DATA_MY_DOCUMENT());
                            dispatch(CLEAR_DATA());
                        }}>
                        <View style={styles.mMainMenu}>
                            <Image
                                source={icons.ic_logout}
                                style={[styles.mIcon, {tintColor: colors.color_primary1}]}
                            />
                            <Text style={styles.mTextMainMenu}>{t('setting.logout')}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

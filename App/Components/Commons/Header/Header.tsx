import React, {useState} from 'react';
import icons from 'Configs/Constants/icons';
import {Appbar, Avatar, Badge} from 'react-native-paper';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import sizes from 'Configs/UI/Sizes';
import {colors} from 'Configs/UI/Colors';
import {useTranslation} from 'react-i18next';
import {styles} from './Header.style';
import images from 'Configs/Constants/images';
import Sizes from 'Configs/UI/Sizes';
import {SideMenu} from 'Navigations/SideMenu/SideMenu';
import {SideSetting} from 'Navigations/SideSetting/SideSetting';
import {AVATAR_LINK} from '@env';
import {useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';

interface headerInterface {
  onPress?: () => void;
  statusSelect?: boolean;
  onPressSearch?: () => void;
  typeHeader?: 'normal' | 'back_header' | 'search_header';
  onBackPress?: () => void;
  titleHeader?: any;
  navigation?: any;
}

const Header = (props: headerInterface) => {
    const {t} = useTranslation();
    const [modalShow, setModalShow] = useState(false);
    const [showSetting, setShowSetting] = useState(false);
    const {listNotification} = useSelector((state: RootState) => ({
        listNotification: state.notification.listNotification,
    }));
    return (
        <>
            <SideMenu
                onShowSetting={() => {
                    setModalShow(false);
                    setTimeout(() => {
                        setShowSetting(true);
                    }, 500);
                }}
                onDismis={() => {
                    setModalShow(false);
                }}
                visible={modalShow}
                navigation={props.navigation}
            />
            <SideSetting
                navigation={props.navigation}
                visible={showSetting}
                onDismis={() => {
                    setShowSetting(false);
                }}
            />
            {props.typeHeader == 'normal' ? (
                <View style={{height: sizes._screenHeight * 0.11}}>
                    <Appbar.Header
                        mode={'center-aligned'}
                        style={{backgroundColor: 'transparent'}}>
                        <View style={styles.viewLogo}>
                            <Image style={styles.imgLogo} source={images.img_logo_sidoc} />
                        </View>
                        <Appbar.Content title={''} />
                        <Appbar.Action icon={icons.ic_noti} onPress={props.onPress} />
                        <Badge style={styles.mBadge} size={sizes._15sdp}>
                            {listNotification.length}
                        </Badge>
                        <TouchableOpacity
                            style={styles.avatar}
                            onPress={() => {
                                setShowSetting(true);
                            }}>
                            <Avatar.Image
                                source={{
                                    uri: AVATAR_LINK,
                                }}
                                size={Sizes._34sdp}
                            />
                        </TouchableOpacity>
                    </Appbar.Header>
                </View>
            ) : null}
            {props.typeHeader == 'search_header' ? (
                <Appbar.Header
                    mode={'center-aligned'}
                    style={{backgroundColor: colors.color_background}}>
                    <Appbar.Action
                        icon={icons.ic_menu}
                        onPress={() => {
                            setModalShow(true);
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            width: sizes._screenWidth * 0.5,
                            height: sizes._40sdp,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            borderWidth: sizes._1sdp,
                            borderColor: colors.color_grey3,
                            borderRadius: sizes._8sdp,
                            backgroundColor: colors.color_white,
                        }}
                        onPress={props.onPressSearch}>
                        <Image
                            source={icons.ic_find}
                            style={{
                                width: sizes._24sdp,
                                height: sizes._24sdp,
                                paddingHorizontal: sizes._20sdp,
                            }}
                            resizeMode={'contain'}
                        />
                        <Text
                            style={{
                                fontSize: sizes._14sdp,
                                fontWeight: '300',
                                lineHeight: sizes._20sdp,
                                color: colors.color_grey3,
                                fontFamily: 'LexendDeca-Light',
                            }}>
                            {t('header.search')}
                        </Text>
                    </TouchableOpacity>
                    <Appbar.Content title={''} />
                    <Appbar.Action icon={icons.ic_noti} onPress={props.onPress} />
                    <Badge
                        style={{
                            position: 'absolute',
                            right: sizes._65sdp,
                            top: sizes._15sdp,
                        }}
                        size={sizes._15sdp}>
                        {listNotification.length}
                    </Badge>
                    <TouchableOpacity
                        style={{width: 32, height: 32, borderRadius: 20, marginRight: 15}}
                        onPress={() => {
                            setShowSetting(true);
                        }}>
                        <Avatar.Image
                            source={{
                                uri: AVATAR_LINK,
                            }}
                            size={32}
                        />
                    </TouchableOpacity>
                </Appbar.Header>
            ) : null}
            {props.typeHeader == 'back_header' ? (
                <Appbar.Header
                    mode={'center-aligned'}
                    style={{backgroundColor: colors.color_background}}>
                    <Appbar.BackAction
                        onPress={props.onBackPress}
                        color={colors.color_text}
                    />
                    <Appbar.Content
                        title={props.titleHeader}
                        color={colors.color_text}
                    />
                </Appbar.Header>
            ) : null}
        </>
    );
};

export default Header;

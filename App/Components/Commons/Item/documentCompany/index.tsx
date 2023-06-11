import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';
import {Avatar} from 'react-native-paper';
import icons from 'Configs/Constants/icons';

import {styles} from 'Components/Commons/Item/documentItem/styles';
import {useTranslation} from 'react-i18next';
import moment from 'moment/moment';
import {DocumentStatus} from 'Configs/Constants/StatusDocument';

interface itemInterface {
    data: any;
    indexData: number;
    itemData: any;
    statusView?: boolean;
    onLongPress?: () => void;
    onHandleOption?:() => void
}

export const ItemDocumentCompany = (props: itemInterface) => {
    const {t} = useTranslation();

    const fomatDate = moment(props.itemData?.createdDate).format('DD/MM/YYYY');
    return props.statusView ? (
        <TouchableOpacity
            onLongPress={props.onLongPress}
            style={[
                styles.mContainer,
                {
                    borderBottomRightRadius: props.indexData == 0 ? sizes._10sdp : 0,
                    borderBottomLeftRadius: props.indexData == 0 ? sizes._10sdp : 0,
                    borderTopLeftRadius:
                        props.indexData == props.data?.length - 1 ? sizes._10sdp : 0,
                    borderTopRightRadius:
                        props.indexData == props.data.length - 1 ? sizes._10sdp : 0,
                },
            ]}>
            <View style={styles.cContainer}>
                {/*Phần content top trong card*/}
                <View style={styles.mRowTop}>
                    {/*Phần icon ảnh và title của card*/}
                    <View style={styles.mColum}>
                        <Avatar.Icon
                            icon={icons.ic_list_contract}
                            size={32}
                            color={colors.color_alert_info}
                            style={{backgroundColor: colors.color_blue_tint4}}
                        />
                        <Text
                            style={styles.mTitle}
                            numberOfLines={2}
                            ellipsizeMode={'tail'}>
                            {`${props.itemData?.code}` +
                                '-' +
                                `${props.itemData?.name}`}
                        </Text>
                    </View>
                    {/*Phần icon option*/}
                    <TouchableOpacity style={styles.mColumIcon} onPress={props.onHandleOption}>
                        <Image
                            source={icons.ic_dot_option}
                            style={styles.mIcon}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                </View>
                {/*Phần content bên dưới*/}
                <View style={styles.mRowBottom}>
                    {/*Text date*/}
                    <Text style={styles.mTextDate}>{fomatDate}</Text>
                    {/*Phần trạng thái*/}
                    <Text>
                        {/*Trạng thái chờ ký*/}
                        {props.itemData.status == DocumentStatus.SIGNING ? (
                            <View
                                style={[
                                    styles.mStatus,
                                    {
                                        backgroundColor: colors.color_toast_bg2,
                                    },
                                ]}>
                                <Image
                                    source={icons.ic_user_edit}
                                    style={[
                                        styles.mIcons,
                                        {tintColor: colors.color_toast_title2},
                                    ]}
                                />
                                <Text style={[styles.text, {color: colors.color_toast_title2}]}>
                                    {t('status.signing')}
                                </Text>
                            </View>
                        ) : null}
                        {/*Trạng thái chờ dyệt*/}
                        {props.itemData.status == DocumentStatus.DRAFT ? (
                            <View
                                style={[
                                    styles.mStatus,
                                    {
                                        backgroundColor: colors.color_toast_bg3,
                                    },
                                ]}>
                                <Image
                                    source={icons.ic_profile_tick}
                                    style={[
                                        styles.mIcons,
                                        {tintColor: colors.color_toast_title3},
                                    ]}
                                />
                                <Text style={[styles.text, {color: colors.color_toast_title3}]}>
                                    {t('status.draft')}
                                </Text>
                            </View>
                        ) : null}
                        {/*Trạng thái đang thương thảo*/}
                        {props.itemData.status == DocumentStatus.NEGOTIATING ? (
                            <View
                                style={[
                                    styles.mStatus,
                                    {
                                        backgroundColor: colors.color_blue_tint4,
                                    },
                                ]}>
                                <Image
                                    source={icons.ic_message}
                                    style={[styles.mIcons, {tintColor: colors.color_primary1}]}
                                />
                                <Text style={[styles.text, {color: colors.color_primary1}]}>
                                    {t('status.negotiating')}
                                    <Text style={[styles.text, {color: colors.color_primary1}]}>
                                        (3/4)
                                    </Text>
                                </Text>
                            </View>
                        ) : null}
                        {/*Trạng thái thành công*/}
                        {props.itemData.status == DocumentStatus.DONE ? (
                            <View
                                style={[
                                    styles.mStatus,
                                    {
                                        backgroundColor: colors.color_alert_rgb_success,
                                    },
                                ]}>
                                <Image
                                    source={icons.ic_cricle_success}
                                    style={[
                                        styles.mIcons,
                                        {tintColor: colors.color_alert_success},
                                    ]}
                                />
                                <Text
                                    style={[styles.text, {color: colors.color_alert_success}]}>
                                    {t('status.done')}
                                </Text>
                            </View>
                        ) : null}
                        {/*Trạng thái từ chối*/}
                        {props.itemData.status == DocumentStatus.REJECTED ? (
                            <View
                                style={[
                                    styles.mStatus,
                                    {
                                        backgroundColor: colors.color_alert_rgb_error,
                                    },
                                ]}>
                                <Image
                                    source={icons.ic_close_circle}
                                    style={[styles.mIcons, {tintColor: colors.color_alert_error}]}
                                />
                                <Text style={[styles.text, {color: colors.color_alert_error}]}>
                                    {t('status.rejected')}
                                </Text>
                            </View>
                        ) : null}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    ) : (
        // trạng thái list or view
        <TouchableOpacity
            onLongPress={props.onLongPress}
            style={[
                styles.mContainer,
                {
                    borderBottomRightRadius: props.indexData == 0 ? sizes._10sdp : 0,
                    borderBottomLeftRadius: props.indexData == 0 ? sizes._10sdp : 0,
                    borderTopLeftRadius:
                        props.indexData == props.data?.length - 1 ? sizes._10sdp : 0,
                    borderTopRightRadius:
                        props.indexData == props.data.length - 1 ? sizes._10sdp : 0,
                },
            ]}>
            <View style={styles.cContainerV}>
                {/*Phần content top trong card*/}
                <View style={styles.mRowTop}>
                    {/*Phần icon ảnh và title của card*/}
                    <View style={styles.mColum}>
                        <Avatar.Icon
                            icon={icons.ic_my_document}
                            size={32}
                            color={colors.color_alert_info}
                            style={{backgroundColor: colors.color_blue_tint4}}
                        />
                        <Text
                            style={styles.mTitle}
                            numberOfLines={1}
                            ellipsizeMode={'tail'}>
                            {`${props.itemData?.code}` +
                                '-' +
                                `${props.itemData?.name}`}
                        </Text>
                    </View>
                    {/*Phần icon option*/}
                    <TouchableOpacity style={styles.mColumIcon} onPress={props.onHandleOption}>
                        <Image
                            source={icons.ic_dot_option}
                            style={styles.mIcon}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                </View>
                {/*Phần img văn bản */}
                <View style={styles.imgDocument}>
                    <Image
                        source={{uri: props.itemData?.imgDocument}}
                        resizeMode={'contain'}
                        style={{
                            width: '100%',
                            height: '90%',
                            borderRadius: sizes._8sdp,
                            marginTop: sizes._13sdp,
                        }}
                    />
                </View>

                {/*Phần content bên dưới*/}
                <View style={styles.mRowBottom}>
                    {/*Text date*/}
                    <Text style={styles.mTextDateV}>{fomatDate}</Text>
                    {/*Phần trạng thái*/}
                    <Text>
                        {/*Trạng thái chờ ký*/}
                        {props.itemData.status == DocumentStatus.SIGNING ? (
                            <View
                                style={[
                                    styles.mStatus,
                                    {
                                        backgroundColor: colors.color_toast_bg2,
                                    },
                                ]}>
                                <Image
                                    source={icons.ic_user_edit}
                                    style={[
                                        styles.mIcons,
                                        {tintColor: colors.color_toast_title2},
                                    ]}
                                />
                                <Text style={[styles.text, {color: colors.color_toast_title2}]}>
                                    {t('status.signing')}
                                </Text>
                            </View>
                        ) : null}
                        {/*Trạng thái chờ dyệt*/}
                        {props.itemData.status == DocumentStatus.DRAFT ? (
                            <View
                                style={[
                                    styles.mStatus,
                                    {
                                        backgroundColor: colors.color_toast_bg3,
                                    },
                                ]}>
                                <Image
                                    source={icons.ic_profile_tick}
                                    style={[
                                        styles.mIcons,
                                        {tintColor: colors.color_toast_title3},
                                    ]}
                                />
                                <Text style={[styles.text, {color: colors.color_toast_title3}]}>
                                    {t('status.draft')}
                                </Text>
                            </View>
                        ) : null}
                        {/*Trạng thái đang thương thảo*/}
                        {props.itemData.status == DocumentStatus.NEGOTIATING ? (
                            <View
                                style={[
                                    styles.mStatus,
                                    {
                                        backgroundColor: colors.color_blue_tint4,
                                    },
                                ]}>
                                <Image
                                    source={icons.ic_message}
                                    style={[styles.mIcons, {tintColor: colors.color_primary1}]}
                                />
                                <Text style={[styles.text, {color: colors.color_primary1}]}>
                                    {t('status.negotiating')}
                                    <Text style={[styles.text, {color: colors.color_primary1}]}>
                                        (3/4)
                                    </Text>
                                </Text>
                            </View>
                        ) : null}
                        {/*Trạng thái thành công*/}
                        {props.itemData.status == DocumentStatus.DONE ? (
                            <View
                                style={[
                                    styles.mStatus,
                                    {
                                        backgroundColor: colors.color_alert_rgb_success,
                                    },
                                ]}>
                                <Image
                                    source={icons.ic_cricle_success}
                                    style={[
                                        styles.mIcons,
                                        {tintColor: colors.color_alert_success},
                                    ]}
                                />
                                <Text
                                    style={[styles.text, {color: colors.color_alert_success}]}>
                                    {t('status.done')}
                                </Text>
                            </View>
                        ) : null}
                        {/*Trạng thái từ chối*/}
                        {props.itemData.status == DocumentStatus.REJECTED ? (
                            <View
                                style={[
                                    styles.mStatus,
                                    {
                                        backgroundColor: colors.color_alert_rgb_error,
                                    },
                                ]}>
                                <Image
                                    source={icons.ic_close_circle}
                                    style={[styles.mIcons, {tintColor: colors.color_alert_error}]}
                                />
                                <Text style={[styles.text, {color: colors.color_alert_error}]}>
                                    {t('status.rejected')}
                                </Text>
                            </View>
                        ) : null}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

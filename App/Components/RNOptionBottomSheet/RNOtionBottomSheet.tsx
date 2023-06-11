import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import React from 'react';
import sizes from 'Configs/UI/Sizes';
import {colors} from 'Configs/UI/Colors';
import icons from 'Configs/Constants/icons';
import {useTranslation} from 'react-i18next';
import {styles} from './RNOptionBottomSheet.style';

interface RNBottomSheet {
  params: any;
  title:string
}

const Option = ({image, title}: {image: _SourceUri; title: string}) => {
    return (
        <Pressable
            style={({pressed}) => [
                {
                    backgroundColor: pressed ? colors.color_grey4 : colors.color_white,
                },
                styles.mContianerItemOption,
            ]}>
            <Image style={styles.mIcon} source={image} resizeMode={'contain'} />
            <Text style={styles.mTextItem}>{title}</Text>
        </Pressable>
    );
};
const RNOptionBottomSheet = (props: RNBottomSheet) => {
    const {t} = useTranslation();
    const optionData = [
        {
            image: icons.ic_checked,
            title: t('option.accept'),
        },
        {
            image: icons.ic_signing,
            title: t('option.sign'),
        },
        {
            image: icons.ic_cancle_checked,
            title: t('option.reject'),
        },
        {
            image: icons.ic_trash_option,
            title: t('option.remove'),
        },
        {
            image: icons.ic_silic_clock,
            title: t('option.process'),
        },
        {
            image: icons.ic_clock_option,
            title: t('option.document_history'),
        },
        {
            image: icons.ic_share,
            title: t('option.share'),
        },
    ];

    return (
        <View style={styles.mContainer}>
            <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.mTitle}>
                {props.title}
            </Text>
            <ScrollView style={{marginTop: sizes._16sdp}}>
                {optionData.map((item: {image: _SourceUri; title: string}) => (
                    <Option image={item.image} title={item.title} key={item.title} />
                ))}
            </ScrollView>
        </View>
    );
};

export default RNOptionBottomSheet;

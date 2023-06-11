import {StyleSheet} from 'react-native';
import sizes from 'Configs/UI/Sizes';
import {colors} from 'Configs/UI/Colors';

export const styles = StyleSheet.create({
    mSeparator: {backgroundColor: 'transparent', height: sizes._1sdp,},
    cSeparator: {
        backgroundColor: colors.color_white_grey,
        marginHorizontal: sizes._14sdp,
        height: sizes._1sdp,
    },
    separator: {
        marginHorizontal: sizes._18sdp,
        height: sizes._1sdp,
        backgroundColor: colors.color_grey4,
    },
    mTitle: {
        fontSize: sizes._14sdp,
        fontWeight: '600',
        lineHeight: sizes._20sdp,
        color: colors.color_text_grey1,
        paddingHorizontal: sizes._16sdp,
        paddingVertical: sizes._15sdp,
    },
    mTitleCount: {
        fontSize: sizes._14sdp,
        fontWeight: '400',
        lineHeight: sizes._20sdp,
        color: colors.color_primary2,
    },
    footerComponent: {
        marginBottom: sizes._85sdp
    }
});
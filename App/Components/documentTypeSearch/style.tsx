import {StyleSheet} from 'react-native';
import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';

export const style = StyleSheet.create({
    mContainer: {
        backgroundColor: colors.color_background,
    },
    mBody: {
        flex: 1,
        paddingBottom: sizes._24sdp,
    },
    mItemSelect: {
        marginHorizontal: sizes._16sdp,
        marginVertical: sizes._4sdp,
        height: sizes._32sdp,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: sizes._8sdp,
    },
    mItemSelectActive: {
        paddingHorizontal: sizes._16sdp,
        marginVertical: sizes._4sdp,
        height: sizes._32sdp,
        alignItems: 'flex-start',
        justifyContent: 'center',
        // borderRadius: sizes._8sdp,
    },

    mTextItem: {
        fontWeight: '400',
        fontSize: sizes._14sdp,
        lineHeight: sizes._20sdp,
        fontFamily: 'LexendDeca-Light',
        color: colors.color_text_grey1,
    },
    mSeparator: {
        backgroundColor: 'transparent',
        height: sizes._1sdp,
    },
    cSeparator: {
        backgroundColor: colors.color_white_grey,
        // marginHorizontal: sizes._14sdp,
        height: sizes._1sdp,
    },
    separator: {
    // marginHorizontal: sizes._18sdp,
        height: sizes._1sdp,
        backgroundColor: colors.color_grey4,
    },
});

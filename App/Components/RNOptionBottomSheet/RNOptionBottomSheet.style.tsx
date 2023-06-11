import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    mContianerItemOption: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: sizes._48sdp,
        borderRadius: sizes._8sdp,
    },
    mIcon: {
        width: sizes._32sdp,
        height: sizes._32sdp,
    },
    mTextItem: {
        marginLeft: sizes._8sdp,
        fontSize: sizes._14sdp,
        fontWeight: '400',
        lineHeight: sizes._20sdp,
        fontFamily: 'LexendDeca-Light',
        color: colors.color_grey1,
    },
    mContainer:{
        paddingHorizontal: sizes._16sdp
    },
    mTitle:{
        textAlign: 'center',
        fontSize: sizes._16sdp,
        fontWeight: '600',
        lineHeight: sizes._24sdp,
        fontFamily: 'LexendDeca-Light',
        color: colors.color_primary1,
    }
});

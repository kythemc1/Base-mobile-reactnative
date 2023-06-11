import {StyleSheet} from 'react-native';
import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';

export const styles = StyleSheet.create({
    mContainer: {
        backgroundColor: colors.color_white,
        width: sizes._screenWidth * 0.9,
        borderRadius: sizes._10sdp,
        padding: sizes._16sdp,
        height: sizes._screenWidth * 0.9,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    mTitle: {
        fontSize: sizes._20sdp,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: sizes._28sdp,
        fontFamily: 'LexendDeca-Bold',
        color: colors.color_primary1
    },
    mText: {
        textAlign: 'center',
        color: colors.color_grey2,
        fontSize: sizes._14sdp,
        fontWeight: '400',
        lineHeight: sizes._20sdp,
        fontFamily: 'LexendDeca-Light'
    },
    img: {
        width: sizes._160sdp,
        height: sizes._160sdp
    }
});

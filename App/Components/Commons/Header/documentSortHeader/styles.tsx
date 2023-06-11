import {StyleSheet} from 'react-native';
import sizes from 'Configs/UI/Sizes';
import {colors} from 'Configs/UI/Colors';

export const styles = StyleSheet.create({
    mContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: sizes._16sdp,
        paddingTop:sizes._16sdp
    },
    mSort: {
        height: sizes._screenHeight * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.color_grey5,
        paddingHorizontal: sizes._8sdp,
        borderRadius: sizes._8sdp,
    },
    icon: {
        width: sizes._25sdp,
        height: sizes._25sdp,
        paddingRight: sizes._4sdp,
    },
    imgView: {
        width: sizes._24sdp,
        height: sizes._24sdp,
        tintColor: colors.color_grey2,
    },
    mTitle: {
        fontSize: sizes._14sdp,
        fontWeight: '400',
        lineHeight: sizes._20sdp,
        textAlign: 'center',
        fontFamily: 'LexendDeca-Light',
        color: colors.color_text_grey1,
        paddingHorizontal: sizes._4sdp,
    },
});

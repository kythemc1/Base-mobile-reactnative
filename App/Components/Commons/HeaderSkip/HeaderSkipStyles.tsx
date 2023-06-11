import { Dimensions, StyleSheet } from 'react-native';
import sizes from 'Configs/UI/Sizes';
import { colors } from 'Configs/UI/Colors';

export const styles = StyleSheet.create({
    container: {
    // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: sizes._screenWidth* 0.05,
        marginRight: sizes._screenWidth* 0.05,
    },
    imageStyle: {
        height: sizes._40sdp,
        width: sizes._100sdp,
    },
    touchView: {
        flexDirection: 'row',
    },
    flagEn: {
        height: sizes._24sdp,
        width: sizes._24sdp,
        marginTop: sizes._4sdp,
        marginLeft: sizes._14sdp,
    },
    viewOnLang: {
        flexDirection: 'row',
        backgroundColor: colors.color_grey4,
        borderRadius: sizes._24sdp,
        width: sizes._69sdp,
        height: sizes._32sdp,
    },
    textEn: {
        fontFamily: 'LexendDeca-Regular',
        color: colors.color_grey1,
        marginLeft: sizes._8sdp,
        marginTop: sizes._4sdp,
    },
    flagVi: {
        height: sizes._24sdp,
        width: sizes._24sdp,
        marginTop: sizes._4sdp,
    },
});

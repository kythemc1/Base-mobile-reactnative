import { Dimensions, StyleSheet } from 'react-native';
import sizes from 'Configs/UI/Sizes';
import { colorsPalette } from 'react-native-ui-lib/typings/generatedTypes/colorsPalette';
import { colors } from 'Configs/UI/Colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal:sizes._16sdp
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
        marginTop: sizes._5sdp,
    },
    flagVi: {
        height: sizes._24sdp,
        width: sizes._24sdp,
        marginTop: sizes._4sdp,
    },

});

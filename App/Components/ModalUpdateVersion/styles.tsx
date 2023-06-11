import {StyleSheet} from 'react-native';
import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';

export const styles=StyleSheet.create({
    modalContainer: {
        backgroundColor: colors.color_white,
        borderRadius: sizes._16sdp,
        width: sizes._screenWidth * 0.9,
        top: sizes._screenHeight * 0.3,
        bottom: sizes._screenHeight * 0.55,
        left: sizes._screenWidth * 0.05,
        right: sizes._screenWidth * 0.05,
        alignItems: 'center'
    },
    textDetail:{textAlign: 'center', color: colors.color_highlight, bottom: sizes._15sdp,fontFamily:'LexendDeca-Medium'},

});

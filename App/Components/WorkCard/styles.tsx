import {StyleSheet} from 'react-native';
import sizes from 'Configs/UI/Sizes';
import {colors} from 'Configs/UI/Colors';

export  const styles =StyleSheet.create({
    viewThuongThao:{
        height: sizes._140sdp,
        width: sizes._screenWidth*0.28,
        backgroundColor: colors.bgThuongThao,
        borderRadius: sizes._24sdp,
        justifyContent: 'space-between',
        marginLeft: sizes._11sdp,
        overflow: 'hidden'

    },
    textThuongThao:{
        color: colors.color_white_grey,
        fontSize: sizes._14sdp,
        fontFamily: 'LexendDeca-Regular',
        left: sizes._9sdp,
        top: sizes._16sdp,
        width: sizes._screenWidth*0.2
    },
    viewNumberthuongthao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // top: sizes._9sdp
    },
    numberThuongThao:{
        fontSize: sizes._32sdp,
        color: colors.color_white_grey,
        fontFamily: 'LexendDeca-Medium',
        // top: sizes._9sdp,
        left: sizes._9sdp,
    },
    maskThuongThao:{
        width: sizes._76sdp,
        height: sizes._80sdp,
        // top: sizes.
    },
});

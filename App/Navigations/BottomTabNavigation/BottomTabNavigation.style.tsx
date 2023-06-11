import {StyleSheet} from 'react-native';
import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';

export const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
    },
    btnCircleUp: {
        width: sizes._60sdp,
        height: sizes._60sdp,
        borderRadius: sizes._30sdp,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.color_primary2,
        bottom: sizes._18sdp,
    },
    imgCircle: {
        width: sizes._30sdp,
        height: sizes._30sdp,
    },
    tabBarItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: sizes._30sdp,
        height: sizes._30sdp,
    },
    text: {
        fontWeight: '400',
        fontSize: sizes._10sdp,
        lineHeight: sizes._14sdp,
        fontFamily: 'LexendDeca-Light'
    }

});

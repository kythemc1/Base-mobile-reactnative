import { StyleSheet } from 'react-native';
import sizes from 'Configs/UI/Sizes';
import {colors} from 'Configs/UI/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgNoti
    },

    header: {
        flex: 1,
        marginTop: sizes._screenHeight * 0.04,
    },
    then: {
        flex: 9,
    },


    text: {
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'LexendDeca-Light',
    },


    Wc: {
        alignSelf: 'center',
        width: sizes._screenWidth * 0.5,
        height: sizes._screenWidth * 0.5,
        marginTop: sizes._screenHeight * 0.08,
    },
    textwc: {
        textAlign: 'center',
        fontFamily: 'LexendDeca-Medium',
        fontSize: sizes._25sdp,
        color: colors.color_primary1,
    },

    body: {},
    endThen: { alignItems: 'center',top: sizes._8sdp},
    textInstructions:{
        color: colors.textunder,
        alignSelf: 'center',
        fontSize: sizes._12sdp,
        fontFamily: 'LexendDeca-Light'
    },
    wraplogin:{
        alignSelf: 'center',
        top : sizes._40sdp
    }
});

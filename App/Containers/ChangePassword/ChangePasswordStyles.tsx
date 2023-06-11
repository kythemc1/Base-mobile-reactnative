import { Dimensions, StyleSheet } from 'react-native';
import sizes from 'Configs/UI/Sizes';
import {colors} from 'Configs/UI/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgrnoti
    },
    loginbox: {
        marginTop: -sizes._15sdp
    },

    header: {
        height: sizes._screenHeight * 0.06635,
        marginTop: sizes._screenHeight * 0.04,
        flex:1
    },
    then: {
        flex: 9,
    },
    wraplogin: {
        alignSelf: 'center',
        height: sizes._screenHeight * 0.12,
        paddingTop:sizes._20sdp
    },

    text: {
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'LexendDeca-Light',
    },

    Wc: {
        alignSelf: 'center',
        width: sizes._screenWidth * 0.43,
        height: sizes._screenWidth * 0.43,
    },
    textwc: {
        height: 28,
        fontFamily: 'LexendDeca-Medium',
        fontSize: sizes._20sdp,
        color: colors.color_highlight,
        marginLeft: sizes._screenWidth *0.05
    },

    viewlogin: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },

    boxpassword: {
        position: 'relative',
        // marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },


    body: { },
    KeyBoardView: {flex: 1},
    endThen: {justifyContent: 'space-between',alignSelf: 'center'},
    viewText:{
        height:sizes._screenHeight*0.11,
        // flex: 0.2,
    },
    mTextUnderWc: {
        height: sizes._28sdp,
        marginTop: sizes._6sdp,
        fontFamily: 'LexendDeca-Light',
        fontSize: sizes._12sdp,
        color: colors.color_grey2,
        marginLeft: sizes._screenWidth *0.05
    },
    mTextUserName:{
        color: colors.color_grey1,
        height:sizes._screenHeight*0.04
    }
});

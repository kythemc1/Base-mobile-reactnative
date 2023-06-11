import { Dimensions, StyleSheet } from 'react-native';
import sizes from 'Configs/UI/Sizes';
import { colors } from 'Configs/UI/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgNoti
    },
    then: {
        flex: 9,
    },
    Wc: {
        alignSelf: 'center',
        width: sizes._screenWidth * 0.43,
        height: sizes._screenWidth * 0.43,
    },
    mTextWc: {
        height: 28,
        fontFamily: 'LexendDeca-Medium',
        fontSize: sizes._20sdp,
        color: colors.color_highlight,
        marginLeft: sizes._screenWidth *0.05
    },
    body: { },
    KeyBoardView: {flex: 1},
    endThen: {justifyContent: 'space-between'},
    textUnderLogo: {
        fontSize: 13.5,
        color: colors.textunder,
        alignSelf: 'center',
    },
    mHeader: {
        height: sizes._screenHeight * 0.06635,
        marginTop: sizes._screenHeight * 0.04,
        flex:1
    },
    viewText:{
        height:sizes._screenHeight*0.11,
        // flex: 0.2,
    },
    mTextUnderWc: {
        height: 28,
        marginTop: 6,
        fontFamily: 'LexendDeca-Light',
        fontSize: sizes._12sdp,
        color: colors.color_grey2,
        marginLeft: sizes._screenWidth *0.05
    },
    mTextUserName:{
        marginLeft: sizes._screenWidth*0.05,
        color: colors.color_grey1,
        // marginTop: sizes._screenHeight*0.02,
        height:sizes._screenHeight*0.04
    },
    mViewLogin: {
        position: 'relative',
        alignItems: 'center',
        marginBottom:sizes._8sdp,
        // height: sizes._screenHeight*0.08
    },
    mBoxPassword: {
        position: 'relative',
        // marginTop: sizes._8sdp,
        alignItems: 'center'
    },
    mWrapLogin: {
        // alignSelf: 'center',
        // height: sizes._screenHeight * 0.12,
        paddingTop:sizes._20sdp,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: sizes._screenWidth * 0.04,
        marginRight: sizes._screenWidth * 0.04,
    },
});

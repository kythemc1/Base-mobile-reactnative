import { Dimensions, StyleSheet } from 'react-native';
import sizes from 'Configs/UI/Sizes';
import { colors } from 'Configs/UI/Colors';
import { fontSize } from 'Configs/Constants/Fonts';

export const styles = StyleSheet.create({
    mContainer: {
        flex: 1,
        backgroundColor:colors.bgNoti
    },
    mLoginBox: {
        // height: sizes._screenHeight*0.4,
        marginTop: -sizes._15sdp
    },
    mHeader: {
        height: Dimensions.get('window').height * 0.06635,
        marginTop: Dimensions.get('window').height * 0.04,
        flex:1
    },
    mThen: {
        flex: 9
    },
    mWrapLogin: {
        alignSelf: 'center',
        height: sizes._screenHeight * 0.12,
        paddingTop:sizes._20sdp
    },
    mViewForgot: {
        marginTop: sizes._screenHeight * 0.025,
        alignSelf: 'center',
        // marginBottom: sizes._25sdp,
        height: sizes._screenHeight*0.1,
    },
    mTextForgot: {
        color: colors.textDetail,
        fontFamily: 'LexendDeca-Regular',
        // textDecorationLine: 'underline',
        fontSize: sizes._14sdp,
        fontWeight: '300'
    },
    mWc: {
        alignSelf: 'center',
        width: sizes._screenWidth * 0.43,
        height: sizes._screenWidth * 0.43,
    },
    mTextWc: {
        height: sizes._28sdp,
        fontFamily: 'LexendDeca-Medium',
        fontSize: sizes._20sdp,
        color: colors.color_highlight,
        marginLeft: sizes._screenWidth *0.05
    },
    mTextUnderWc: {
        height: sizes._28sdp,
        marginTop: sizes._6sdp,
        fontFamily: 'LexendDeca-Light',
        fontSize: sizes._12sdp,
        color: colors.color_grey2,
        marginLeft: sizes._screenWidth *0.05
    },
    mTextUnderButton: {
        height: sizes._28sdp,
        marginTop: sizes._6sdp,
        fontFamily: 'LexendDeca-Light',
        fontSize: sizes._12sdp,
        color: colors.color_grey1,
        alignSelf: 'center'
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
    mViewVi: {
        marginTop: sizes._screenWidth * 0.095,
        marginLeft: sizes._screenWidth * 0.52
    },
    mChangeLanguage: {
        flexDirection: 'row'
    },
    mTextLanguage: {
        color: colors.color_highlight,
        marginTop: sizes._4sdp,
        fontSize: sizes._18sdp,
        fontFamily: 'LexendDeca-Medium'
    },
    mTextBack: {
        fontFamily: 'LexendDeca-Light',
        color: colors.color_highlight,
        marginTop: sizes._8sdp,
        fontSize: sizes._16sdp
    },
    mViewBack: {
        width: sizes._screenWidth * 0.2,
        flexDirection: 'row',
        marginTop: sizes._screenWidth * 0.095,
        marginLeft: sizes._screenWidth * 0.05,
        justifyContent: 'space-between'
    },
    mBody: {  },
    KeyBoardView: { height :sizes._screenHeight* 0.95 },
    mEndThen: { justifyContent: 'space-between'},
    mTextUnderLogo: {
        fontSize: sizes._14sdp,
        color: colors.color_text,
        alignSelf: 'center'
    }
    ,
    viewText:{
        height:sizes._screenHeight*0.11,
        // flex: 0.2,
    },
    mImageTouch:{
        height:  sizes._41sdp,
        width: sizes._41sdp
    },
    mViewTouch:{
        height:  sizes._41sdp,
        width: sizes._41sdp,
        alignSelf:  'center'
    },
    mTextUserName:{
        marginLeft: sizes._screenWidth*0.05,
        color: colors.color_grey1,
        // marginTop: sizes._screenHeight*0.02,
        height:sizes._screenHeight*0.04
    }
});

import {StyleSheet} from 'react-native';
import sizes from 'Configs/UI/Sizes';
import {colors} from 'Configs/UI/Colors';

export const styles=StyleSheet.create({
    container:{
        flex:1,
        width:sizes._screenWidth*0.9,
        backgroundColor:colors.backgrnoti,
        borderRadius: sizes._20sdp,
        flexDirection: 'row',
        alignSelf:'center',
        paddingBottom:9,
        marginVertical:5
    },
    mIcon:{
        height: sizes._18sdp,
        width: sizes._18sdp,
    },
    mViewData:{
        marginTop:sizes._12sdp,
        marginLeft:sizes._9sdp
    },
    mViewClipBoard:{
        backgroundColor:colors.clipBoard,
        padding:sizes._4sdp,
        height:sizes._26sdp,
        borderRadius:sizes._8sdp,
        marginTop: sizes._12sdp,
        marginLeft:sizes._12sdp
    },
    textHead:{
        color:colors.color_dark_grey,
        fontFamily: 'LexendDeca-Regular',
        fontSize:sizes._14sdp,
        width:sizes._screenWidth*0.75
    },
    textHeadFalse:{
        color:colors.textDetail,
        fontFamily: 'LexendDeca-Medium',
        fontSize:sizes._14sdp,
        width:sizes._screenWidth*0.75
    },
    textDetail:{
        color: colors.textDetail,
        fontSize: sizes._12sdp,
        width:sizes._screenWidth*0.75,
        marginTop: sizes._8sdp,
        fontFamily: 'LexendDeca-Light'
    },
    textDate:{
        color: colors.textunder,
        fontSize: sizes._12sdp,
        marginTop: sizes._8sdp
    },
    mViewDate:{
        flexDirection: 'row',
        justifyContent:  'space-between',
        Bottom: sizes._12sdp
    },
    dot:{
        height: sizes._10sdp,
        width:sizes._10sdp,
        borderRadius: sizes._10sdp,
        backgroundColor: colors.color_alert_warning,
        marginTop:sizes._2sdp
    },
    mViewDot:{
        flexDirection: 'row',
        width: sizes._60sdp,
        marginTop: sizes._8sdp,
        justifyContent: 'space-between'
    }
    ,
    textRead:{
        color: colors.color_alert_warning,
        fontSize: sizes._10sdp
    },
    read:{
        color:colors.textDetail,
        fontSize:sizes._10sdp,
        marginTop: sizes._8sdp,
    }


});

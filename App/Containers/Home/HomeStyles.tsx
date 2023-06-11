import {Dimensions, StyleSheet} from 'react-native';
import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg,
        flex: 1
    },
    viewdashboarduser: {
        // marginTop: sizes._screenHeight * 0.05,
        // width: sizes._screenWidth * 0.9,
        // alignSelf: 'center',
        // height: sizes._56sdp
    },
    guild: {
        // top: sizes._19sdp
    },

    viewthongke: {
        marginTop: sizes._12sdp,
        alignItems: 'center',
        backgroundColor: colors.color_white,
        width: sizes._screenWidth * 0.9,
        alignSelf: 'center',
        borderRadius: sizes._8sdp,
        paddingBottom: sizes._16sdp
    },
    textthongke: {
        // marginLeft: Dimensions.get('window').width * 0.05,
        color: colors.color_text_grey1,
        fontSize: sizes._17sdp,
        marginTop: sizes._20sdp,
        fontFamily: 'LexendDeca-Regular',
    },
    textCongViec: {
        marginLeft: sizes._screenWidth * 0.05,
        color: colors.color_text_grey1,
        fontSize: sizes._17sdp,
        marginTop: sizes._20sdp,
        fontFamily: 'LexendDeca-Regular',
    }
    ,

    boxthongkeview: {},
    dotgreen: {
        backgroundColor: '#00F928',
        // fontSize:30,
        height: 7,
        width: 7,
        borderRadius: 10,
        marginTop: 7,
    },
    dotblue: {
        backgroundColor: colors.color_toast_title2,
        height: 7,
        width: 7,
        borderRadius: 10,
        marginTop: 7,
    },
    dotorange: {
        backgroundColor: '#FF7A00',
        height: 7,
        width: 7,
        borderRadius: 10,
        marginTop: 7,
    },
    dotpurple: {
        backgroundColor: '#AB84FF',
        height: 7,
        width: 7,
        borderRadius: 10,
        marginTop: 7,
    },
    dotred: {
        backgroundColor: '#EF2763',
        height: 7,
        width: 7,
        borderRadius: 10,
        marginTop: 7,
    },
    dotyellow: {
        backgroundColor: colors.dotNhap,
        height: 7,
        width: 7,
        borderRadius: 10,
        marginTop: 7,
    },
    viewdotnhap: {
        // marginLeft: Dimensions.get('window').width * 0.02,
        flexDirection: 'row',
        width: sizes._screenWidth * 0.8,
        justifyContent: 'space-between'
        // marginTop: Dimensions.get('window').height * 0.07,
        // marginLeft: 12,
    },
    nhap: {
        // marginLeft: 20
        //     flexDirection: 'row',
    },
    line: {
        marginTop: 18,
        flexDirection: 'row',
    },

    khoangcach: {
        marginRight: 5,
        marginLeft: 5,
        color: 'rgba(14, 30, 56, 1)',
        fontFamily: 'LexendDeca-Light',
    },

    viewpie: {
        marginTop: sizes._16sdp,
        marginLeft: 0,
        alignSelf: 'center',
        width: (Dimensions.get('window').width * 104) / 320,
    },

    viewNumberthuongthao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // top: sizes._9sdp
    },

    viewWelcome: {
        flexDirection: 'row',
        width: sizes._screenWidth * 0.9,
        left: sizes._screenWidth * 0.05,
        justifyContent: 'space-between'
    },
    textWelcome: {
        color: colors.color_text_grey1,
        fontSize: sizes._16sdp,
        // marginTop: 15,
        fontFamily: 'LexendDeca-Regular',
    },
    textName: {
        color: colors.color_highlight,
        fontSize: sizes._16sdp,
        // marginTop: 15,
        fontFamily: 'LexendDeca-Medium',
        // width: sizes._screenWidth*0.9
    },
    viewTextWc: {
        flexDirection: 'row',
        top: sizes._5sdp
    },
    dotTask: {
        width: sizes._8sdp,
        height: sizes._8sdp,
        backgroundColor: colors.color_highlight,
        borderRadius: sizes._8sdp,
        left: sizes._8sdp,
        top: sizes._12sdp
    },
    textTask: {
        color: colors.textDetail,
        fontSize: sizes._12sdp,
        fontFamily: 'LexendDeca-Light',
        top: sizes._8sdp
    },
    arrowDown: {
        height: sizes._36sdp,
        width: sizes._36sdp
    },
    viewMyWork: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // width: sizes._screenWidth*0.9,
        // left: sizes._screenWidth*0.05,
        top: sizes._12sdp
    },
    viewThuongThao: {
        height: sizes._140sdp,
        width: sizes._screenWidth * 0.28,
        backgroundColor: colors.bgThuongThao,
        borderRadius: sizes._24sdp,
        justifyContent: 'space-between',
        marginLeft: sizes._11sdp
    },
    viewKyNhay: {
        height: sizes._140sdp,
        width: sizes._screenWidth * 0.28,
        backgroundColor: colors.color_alert_warning,
        borderRadius: sizes._24sdp,
        justifyContent: 'space-between',
        marginLeft: sizes._11sdp

    },
    viewKyDuyet: {
        height: sizes._140sdp,
        width: sizes._screenWidth * 0.28,
        backgroundColor: colors.bgKyDuyet,
        borderRadius: sizes._24sdp,
        justifyContent: 'space-between',
        marginLeft: sizes._11sdp

    },
    textThuongThao: {
        color: colors.color_white_grey,
        fontSize: sizes._14sdp,
        fontFamily: 'LexendDeca-Regular',
        left: sizes._9sdp,
        top: sizes._16sdp,
        width: sizes._screenWidth * 0.2
    },
    numberThuongThao: {
        fontSize: sizes._32sdp,
        color: colors.color_white_grey,
        fontFamily: 'LexendDeca-Medium',
        // top: sizes._9sdp,
        left: sizes._9sdp,
    },
    maskThuongThao: {
        width: sizes._76sdp,
        height: sizes._80sdp,
        // top: sizes.
    },
    mTitle: {
        fontSize: sizes._14sdp,
        fontWeight: '600',
        lineHeight: sizes._20sdp,
        color: colors.color_text_grey1,
        paddingHorizontal: sizes._16sdp,
        paddingVertical: sizes._15sdp,
    },
    footerComponent: {
        marginBottom: sizes._85sdp
    }, mTitleCount: {
        fontSize: sizes._14sdp,
        fontWeight: '400',
        lineHeight: sizes._20sdp,
        color: colors.color_primary2,
    }, mSeparator: {backgroundColor: 'transparent', height: sizes._1sdp,},
    cSeparator: {
        backgroundColor: colors.color_white_grey,
        marginHorizontal: sizes._14sdp,
        height: sizes._1sdp,
    },
    separator: {
        marginHorizontal: sizes._20sdp,
        height: sizes._1sdp,
        backgroundColor: colors.color_grey4,
    }, flatList: {
        top: sizes._14sdp
    },
    add: {
        height: sizes._11sdp,
        width: sizes._11sdp,
        marginTop: 25,
    },
    viewList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: sizes._screenWidth * 0.9,
        alignSelf: 'center'
    }

});

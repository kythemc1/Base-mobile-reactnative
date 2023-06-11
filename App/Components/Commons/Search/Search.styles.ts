import { StyleSheet } from 'react-native';
import sizes from 'Configs/UI/Sizes';
import { colors } from 'Configs/UI/Colors';

export const styles = StyleSheet.create({
    mContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: sizes._16sdp,
        width: sizes._screenWidth*0.8,
        height: sizes._40sdp,
        backgroundColor: colors.color_white_grey,
        borderRadius: sizes._8sdp,
        borderColor:colors.color_grey3,
        borderWidth:sizes._1sdp

    },
    mInput: {
        color: colors.color_grey2,
        fontSize: sizes._16sdp,
        fontWeight: '300',
        flex: 1,
        height: sizes._40sdp,
        alignItems:'center',
        paddingHorizontal: sizes._16sdp
    },
    mButtonView:{
        paddingHorizontal: sizes._4sdp,
        paddingVertical: sizes._10sdp,
    },
    mButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: sizes._8sdp,
        borderWidth: sizes._1sdp,
        borderColor: colors.color_alert_info,
        borderRadius: sizes._8sdp,
        backgroundColor: colors.color_grey5,
    },
    mIconButton:{
        width: sizes._24sdp,
        height: sizes._24sdp,
        tintColor: colors.color_grey2,
        marginRight: sizes._6sdp,
    },
    mTitle:{
        fontSize: sizes._12sdp,
        fontWeight: '400',
        lineHeight: sizes._16sdp,
        color: colors.color_grey2,
        fontFamily: 'LexendDeca-Light',
    },
    mButtonActive:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: sizes._8sdp,
        borderWidth: sizes._1sdp,
        borderColor: colors.color_alert_info,
        borderRadius: sizes._8sdp,
        backgroundColor: colors.color_blue_tint4,
    },
    mTitleActive:{
        fontSize: sizes._12sdp,
        fontWeight: '400',
        lineHeight: sizes._16sdp,
        color: colors.color_primary1,
        fontFamily: 'LexendDeca-Light',
    },
    mIconX:{
        width: sizes._24sdp,
        height: sizes._24sdp,
        tintColor: colors.color_primary1,
        marginRight: sizes._6sdp,
    }
});

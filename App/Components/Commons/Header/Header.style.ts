import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {backgroundColor: colors.color_background},
    mContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.color_background,
        borderBottomRightRadius: sizes._20sdp,
        borderBottomLeftRadius: sizes._20sdp
    },
    mBody: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mTitle: {
        color: colors.color_text_grey1,
        fontSize: sizes._18sdp,
        fontWeight: 'bold',
        textAlign: 'left',
        marginRight: sizes._115sdp,
    },
    mTitleContainer: {
        alignItems: 'flex-start',
    },
    imgLogo: {
        height: sizes._40sdp,
        width: sizes._100sdp
    },
    avatar: {
        width: sizes._34sdp,
        height: sizes._34sdp,
        borderRadius: sizes._20sdp,
        marginRight: sizes._15sdp
    },

    viewLogo: {
        marginLeft: sizes._screenWidth * 0.05,
        height: sizes._40sdp,
        width: sizes._100sdp
    },


    bell: {
        width: sizes._24sdp,
        height: sizes._24sdp,

    },
    viewAvatar: {
        width: sizes._screenWidth * 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewNoti: {
        height: sizes._12sdp,
        width: sizes._12sdp,
        backgroundColor: colors.color_primary2,
        borderRadius: sizes._10sdp,
        position: 'absolute',
        left: sizes._10sdp,
        top: sizes._4sdp,
    },
    textInNoti: {
        position: 'absolute',
        color: colors.color_white,
        fontSize: sizes._8sdp,
        alignSelf: 'center'
    },
    mBadge: {
        position: 'absolute',
        right: sizes._65sdp,
        top: sizes._15sdp
    }
});

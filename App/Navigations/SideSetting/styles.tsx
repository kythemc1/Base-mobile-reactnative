import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    mModalContainer: {
        width: sizes._screenWidth * 0.7,
        height: sizes._screenHeight / 1.1,
    },
    mContainer: {
        width: sizes._screenWidth * 0.7,
        height: sizes._screenHeight / 1.1,
        backgroundColor: colors.color_grey6,
        marginTop: Platform.OS == 'ios' ? sizes._10sdp : sizes._50sdp,
        marginRight: sizes._70sdp,
        marginLeft: sizes._18sdp,
        borderRadius: sizes._16sdp,
        marginBottom: sizes._24sdp,
    },
    mLogoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: sizes._50sdp,
        marginTop: sizes._24sdp,
        marginHorizontal: sizes._16sdp,
    },
    mLogo: {
        width: sizes._100sdp,
        height: sizes._35sdp,
    },
    mTextVersion: {
        fontSize: sizes._12sdp,
        fontWeight: '400',
        lineHeight: sizes._16sdp,
        color: colors.color_grey2,
        fontFamily: 'LexendDeca-Light',
    },
    mProfileView: {
        flexDirection: 'row',
        marginTop: sizes._8sdp,
        height: sizes._50sdp,
        borderTopColor: colors.color_grey4,
        borderBottomColor: colors.color_grey4,
        borderTopWidth: sizes._1sdp,
        borderBottomWidth: sizes._1sdp,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: sizes._16sdp
    },
    mTextProfile: {
        width: sizes._screenWidth * 0.5,
        fontSize: sizes._14sdp,
        fontWeight: '400',
        lineHeight: sizes._20sdp,
        color: colors.color_primary1,
        fontFamily: 'LexendDeca-Light',
    },
    mTextProfileEmail: {
        width: sizes._screenWidth * 0.5,
        fontSize: sizes._14sdp,
        fontWeight: '300',
        lineHeight: sizes._20sdp,
        color: colors.color_text_grey1,
        fontFamily: 'LexendDeca-Light',
    },
    mMainMenu: {
        flexDirection: 'row',
        marginHorizontal: sizes._16sdp,
        marginTop: sizes._22sdp,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    mIcon: {
        width: sizes._20sdp,
        height: sizes._20sdp,
        marginRight: sizes._10sdp,
        tintColor: colors.color_icons
    },
    mTextMainMenu: {
        fontSize: sizes._14sdp,
        fontWeight: '400',
        lineHeight: sizes._20sdp,
        color: colors.color_dark_grey,
        fontFamily: 'LexendDeca-Light',
    },
    mProgressView: {
        marginLeft: sizes._50sdp,
        marginRight: sizes._26sdp,
        marginTop: sizes._8sdp,
    },
    mProgress: {
        borderRadius: sizes._10sdp,
    },
    mTextProgress: {
        fontSize: sizes._10sdp,
        fontWeight: '300',
        lineHeight: sizes._12sdp,
        color: colors.color_grey2,
        fontFamily: 'LexendDeca-Light',
        marginTop: sizes._5sdp,
    },
    mTextCountStorage: {
        fontSize: sizes._10sdp,
        fontWeight: '600',
        lineHeight: sizes._14sdp,
        color: colors.color_primary1,
        fontFamily: 'LexendDeca-Light',
    },
    mTextCountDocument: {
        fontSize: sizes._10sdp,
        fontWeight: '600',
        lineHeight: sizes._14sdp,
        color: colors.color_alert_error,
        fontFamily: 'LexendDeca-Light',
    },
    mLineDashed: {
        borderColor: colors.color_blue_tint4,
        borderWidth: sizes._1sdp,
        marginTop: sizes._26sdp,
        marginHorizontal: sizes._16sdp,
        borderStyle: 'dashed',
    },
});

import {StyleSheet} from 'react-native';
import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';

export const styles = StyleSheet.create({
    mContainer: {
        backgroundColor: colors.color_white,
        flex: sizes._1sdp,
        marginHorizontal: sizes._14sdp,
        justifyContent: 'center',
        paddingHorizontal: sizes._16sdp,
    },

    cContainer: {
        justifyContent: 'center',
        height: sizes._screenHeight * 0.11,
    },
    cContainerV: {
        justifyContent: 'center',
        marginVertical: sizes._16sdp,
    },
    mRowTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mColum: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    mColumIcon: {
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
    },
    mTitle: {
        marginLeft: sizes._16sdp,
        fontSize: sizes._16sdp,
        fontWeight: '400',
        lineHeight: sizes._24sdp,
        color: colors.color_dark_grey,
        width: sizes._screenWidth * 0.6,
        fontFamily: 'LexendDeca-Light',
    },
    mIconContainer: {
        width: sizes._32sdp,
        height: sizes._32sdp,
        backgroundColor: 'red',
    },
    mIcon: {
        width: sizes._32sdp,
        height: sizes._32sdp,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    mRowBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mTextDate: {
        marginLeft: sizes._46sdp,
        fontSize: sizes._12sdp,
        fontWeight: '300',
        lineHeight: sizes._16sdp,
        color: colors.color_grey1,
        fontStyle: 'normal',
        fontFamily: 'LexendDeca-Light',
    },
    mTextDateV: {
        fontSize: sizes._12sdp,
        fontWeight: '300',
        lineHeight: sizes._16sdp,
        color: colors.color_grey1,
        fontStyle: 'normal',
        fontFamily: 'LexendDeca-Light',
    },
    mStatus: {
        height: sizes._24sdp,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: sizes._8sdp,
        paddingVertical: sizes._4sdp,
        borderRadius: sizes._8sdp,
    },
    mIcons: {
        width: sizes._12sdp,
        height: sizes._12sdp,
        marginRight: sizes._8sdp,
    },
    text: {
        fontWeight: '400',
        fontSize: sizes._12sdp,
        lineHeight: sizes._16sdp,
        fontFamily: 'LexendDeca-Light',
    },
    imgDocument: {
        width: sizes._screenWidth * 0.86,
        height: sizes._screenHeight * 0.16,
        backgroundColor: colors.color_grey3,
        marginVertical: sizes._12sdp,
        borderRadius: sizes._8sdp,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

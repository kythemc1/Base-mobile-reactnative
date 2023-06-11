import {StyleSheet} from 'react-native';
import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';

export const styles = StyleSheet.create({
    mContainer: {
        flex: 1,
        backgroundColor: colors.color_background,
    },
    mContainerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: sizes._16sdp,
        width: sizes._screenWidth * 0.8,
        height: sizes._40sdp,
        backgroundColor: colors.color_white_grey,
        borderRadius: sizes._8sdp,
        borderColor: colors.color_grey3,
        borderWidth: sizes._1sdp

    },
    mContent: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        fontSize: sizes._14sdp,
        fontWeight: '400',
        fontFamily: 'LexendDeca-Light',
        color: colors.color_grey2,
    },
    mLoading: {justifyContent: 'center', alignItems: 'center'},
    mSeparator: {backgroundColor: 'transparent', height: sizes._1sdp,},
    cSeparator: {
        backgroundColor: colors.color_background,
        marginHorizontal: sizes._14sdp,
        height: sizes._1sdp,
    },
    separator: {
        marginHorizontal: sizes._18sdp,
        height: sizes._1sdp,
        backgroundColor: colors.color_grey4,
    },
    mInput: {
        color: colors.color_grey2,
        fontSize: sizes._16sdp,
        fontWeight: '300',
        flex: 1,
        height: sizes._40sdp,
        alignItems: 'center',
        paddingHorizontal: sizes._16sdp
    },
});

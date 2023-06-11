import {StyleSheet} from 'react-native';
import sizes from 'Configs/UI/Sizes';
import {colors} from 'Configs/UI/Colors';

export const styles = StyleSheet.create({
    mItemSelect: {
        paddingLeft: sizes._36sdp,
        height: sizes._32sdp,
        justifyContent: 'center',
        borderBottomWidth: sizes._1sdp,
        borderBottomColor: colors.color_grey3,
        marginHorizontal: sizes._16sdp
    },
    mTextItemSelect: {
        fontSize: sizes._14sdp,
        fontWeight: '400',
        lineHeight: sizes._20sdp,
        fontFamily: 'LexendDeca-Light',
        color: colors.color_grey1,
    },
    mBottomSheet: {
        borderTopLeftRadius: sizes._32sdp,
        borderTopRightRadius: sizes._32sdp,
        height: sizes._screenHeight * 0.9,
        shadowColor: colors.color_dark_grey,
        shadowOffset: {
            width: 0,
            height: sizes._3sdp,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: colors.color_white,
    },
    mTitleBottomSheet: {
        textAlign: 'center',
        fontSize: sizes._18sdp,
        lineHeight: sizes._26sdp,
        fontWeight: '400',
        color: colors.color_primary1,
        fontFamily: 'LexendDeca-Bold',
    },
    mViewText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: sizes._24sdp,
    },
    mText: {
        textAlign: 'center',
        fontSize: sizes._14sdp,
        lineHeight: sizes._20sdp,
        fontWeight: '300',
        color: colors.color_grey2,
        fontFamily: 'LexendDeca-Bold',
    },
    mViewTextDate: {
        height: sizes._36sdp,
        paddingHorizontal: sizes._16sdp,
        backgroundColor: colors.color_grey6,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizes._40sdp,
    },
    mTextDate: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: colors.color_primary2,
        fontSize: sizes._14sdp,
        lineHeight: sizes._20sdp,
        fontWeight: '400',
        fontFamily: 'LexendDeca-Bold',
    }
});
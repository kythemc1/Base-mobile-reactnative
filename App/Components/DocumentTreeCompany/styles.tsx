import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    mContainer: {
        flex: 1,
        backgroundColor: colors.color_background,
    },
    mItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: sizes._36sdp,
        paddingHorizontal: sizes._16sdp,
    },
    mContent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: sizes._screenWidth * 0.75,
    },
    mIconTree: {
        width: sizes._24sdp,
        height: sizes._24sdp,
        marginRight: sizes._8sdp,
    },
    text: {
        fontSize: sizes._14sdp,
        fontWeight: '400',
        lineHeight: sizes._20sdp,
        fontFamily: 'LexendDeca-Light',
    },
    mIconRight:{
        width: sizes._24sdp,
        height: sizes._24sdp,
        tintColor:colors.color_text
    }
});

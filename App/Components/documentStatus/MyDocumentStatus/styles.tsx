import {StyleSheet} from 'react-native';
import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';

export const styles = StyleSheet.create({
    mContainer: {
        backgroundColor: colors.color_background,
    },
    mAccordion: {
        paddingHorizontal: sizes._16sdp,
        // borderRadius: sizes._8sdp
    },
    mTextAccordion: {
        fontSize: sizes._14sdp,
        fontWeight: '400', lineHeight: sizes._20sdp,
        fontFamily: 'LexendDeca-Light',
    },
    mTextItem: {
        fontSize: sizes._14sdp,
        fontWeight: '400', lineHeight: sizes._20sdp,
        fontFamily: 'LexendDeca-Light',
    },
    mItem: {
        marginLeft: sizes._36sdp,
        marginRight: sizes._20sdp,
        borderRadius: sizes._8sdp
    },
    mIcon: {
        marginLeft: sizes._16sdp,
        width: sizes._20sdp,
        height: sizes._20sdp,
    }
});
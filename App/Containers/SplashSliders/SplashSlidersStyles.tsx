import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';
import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    subtitle: {
        color: colors.color_grey1,
        fontSize: sizes._14sdp,
        marginBottom: sizes._16sdp,
        textAlign: 'center',
        lineHeight: sizes._20sdp,
        fontFamily: 'LexendDeca-Regular'
    },
    title: {
        color: colors.color_primary1,
        fontSize: sizes._28sdp,
        fontWeight: '600',
        lineHeight: sizes._36sdp,
        marginBottom: sizes._22sdp,
        fontFamily: 'LexendDeca-Bold',
        textAlign: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    indicator: {
        height: sizes._6sdp,
        width: sizes._6sdp,
        backgroundColor: colors.color_blue_tint4,
        marginHorizontal: sizes._4sdp,
        borderRadius: sizes._6sdp,
    },
    mIndicatorContainer:
        {
            height: sizes._screenHeight * 0.25,
            justifyContent: 'space-between',
            paddingHorizontal: sizes._16sdp,
        },
    mIndicator: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: sizes._20sdp,
    }
});

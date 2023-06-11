import {StyleSheet} from 'react-native';
import sizes from 'Configs/UI/Sizes';
import {colors} from 'Configs/UI/Colors';

export const styles = StyleSheet.create({


    mContainerInputNormal: {
        flexDirection: 'row',
        width: sizes._screenWidth * 0.9,
        height: sizes._screenHeight * 0.06,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.color_grey5,
        borderRadius: sizes._12sdp
    },
    mContainerInputUserName: {
        flexDirection: 'row',
        width: sizes._screenWidth * 0.9,
        height: sizes._screenHeight * 0.06,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.color_grey5,
        borderRadius: sizes._12sdp
    },
    mContainerInputPassWord: {
        flexDirection: 'row',
        width: sizes._screenWidth * 0.9,
        height: sizes._screenHeight * 0.06,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.color_grey5,
        borderRadius: sizes._12sdp
    },

    mIcon: {
        width: sizes._screenWidth * 0.06,
        height: sizes._screenHeight * 0.03,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: sizes._12sdp
    },
    img:{
        width: sizes._screenWidth * 0.06,
        height: sizes._screenHeight * 0.03,
    },

    mIconEye: {
        width: sizes._screenWidth * 0.06,
        height: sizes._screenHeight * 0.03,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: sizes._12sdp
    },

    mInputNormal: {
        width: sizes._screenWidth * 0.9,
        height: sizes._screenHeight * 0.06,
        paddingHorizontal: sizes._12sdp,
        color: colors.color_dark_grey
    },
    mInputUserName: {
        width: sizes._screenWidth * 0.8,
        height: sizes._screenHeight * 0.06,
        paddingHorizontal: sizes._16sdp,
        color: colors.color_dark_grey
    },
    mInputPassWord: {
        width: sizes._screenWidth * 0.7,
        height: sizes._screenHeight * 0.05,
        paddingLeft: sizes._12sdp,
        color: colors.color_dark_grey
    },
    mContainerInputError: {
        flexDirection: 'row',
        width: sizes._screenWidth * 0.9,
        height: sizes._screenHeight * 0.06,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: -sizes._6sdp
    },
    mIconError: {
        width: sizes._screenWidth * 0.04,
        height: sizes._screenHeight * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: sizes._12sdp
    },
    mTextError: {
        width: sizes._screenWidth * 0.75,
        fontSize: sizes._12sdp,
        fontWeight: '300',
        lineHeight: sizes._16sdp,
        justifyContent: 'flex-start',
        color: colors.color_grey1,
        textAlign: 'left',
        paddingHorizontal: sizes._12sdp
    },
});

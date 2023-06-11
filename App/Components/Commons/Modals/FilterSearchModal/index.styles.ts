import { StyleSheet } from 'react-native';
import sizes from 'Configs/UI/Sizes';
import { colors } from 'Configs/UI/Colors';

export const styles = StyleSheet.create({
    gContainer: {
        backgroundColor: colors.grey0,
        height: sizes._screenHeight * 0.6,
        borderRadius: sizes._20sdp,
        alignItems: 'center',
        paddingHorizontal: sizes._screenWidth * 0.03,
        justifyContent: 'space-evenly'
    },
    mContainerTitle: {
        flex: 1,
        justifyContent: 'center'
    },
    mContentTitle: {
        flex: 1,
        alignItems: 'flex-start'
    },
    mContainerDropdown: {
        borderBottomLeftRadius: sizes._10sdp,
        borderBottomRightRadius: sizes._10sdp,
        fontSize: sizes._14sdp
    },
    mContainerDropdownCreator: {
        borderTopLeftRadius: sizes._10sdp,
        borderTopRightRadius: sizes._10sdp,
        fontSize: sizes._14sdp
    },
    mTitleSearch: {
        color: colors.color_highlight,
        fontSize: sizes._18sdp,
        fontWeight: 'bold'
    },
    mInputContainer: {
        backgroundColor: colors.grey0,
        borderColor: colors.grey7,
        borderWidth: 0.5,
        width: sizes._screenWidth * 0.8,
        height: sizes._screenHeight * 0.05,
        borderRadius: 8,
        justifyContent: 'center'
    },
    mDropdown: {
        width: sizes._screenWidth * 0.8,
        height: sizes._screenHeight * 0.05,
        borderColor: colors.grey7,
        borderWidth: 0.5,
        borderRadius: sizes._8sdp,
        paddingHorizontal: sizes._screenWidth * 0.025
    },
    mInput: {
        flex: 1,
        height: sizes._screenHeight * 0.05,
        paddingHorizontal: sizes._screenWidth * 0.025
    },
    mPlaceholderStyle: {
        fontSize: sizes._14sdp,
        color: colors.grey6
    },
    mSelectedTextStyle: {
        fontSize: sizes._14sdp,
        color: colors.color_text
    },
    mTitle: {
        color: colors.color_highlight,
        fontSize: sizes._14sdp,
        fontWeight: 'bold',
        paddingBottom: sizes._screenHeight * 0.01
    },
    mButtonContainer: {
        flex: 1,
        paddingTop: sizes._screenHeight * 0.02
    },
    inputSearch: {
        color: colors.color_text,
        borderRadius: sizes._14sdp,
        fontSize: sizes._12sdp,
        height:sizes._screenHeight*0.04  }

});

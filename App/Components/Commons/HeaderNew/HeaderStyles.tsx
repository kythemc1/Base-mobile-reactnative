import { Dimensions, StyleSheet } from 'react-native';
import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color_grey6,
        height: sizes._56sdp
    },
    bellringing: {
        height: sizes._40sdp,
        width: sizes._100sdp
    },
    avatar: {
        height: sizes._32sdp,
        width:sizes._32sdp,
        // marginLeft: 10
    },
    viewbell: {
        top : sizes._3sdp
    },
    viewLogo: {
        marginLeft: sizes._screenWidth*0.05,
        height: sizes._40sdp,
        width: sizes._100sdp
    },

    viewheader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    bell:{
        width: sizes._24sdp,
        height: sizes._24sdp,

    },
    viewAvatar:{
        width:sizes._screenWidth*0.2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewNoti:{
        height: sizes._12sdp,
        width: sizes._12sdp,
        backgroundColor: colors.color_primary2,
        borderRadius:sizes._10sdp,
        position: 'absolute',
        left: sizes._10sdp,
        top: sizes._4sdp,
    },
    textInNoti:{
        position: 'absolute',
        color: colors.color_white,
        fontSize:sizes._8sdp,
        alignSelf: 'center'  }

});

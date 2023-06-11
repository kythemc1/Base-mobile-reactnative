import {Platform, StyleSheet} from 'react-native';
import sizes from 'Configs/UI/Sizes';
import {colors} from 'Configs/UI/Colors';

export const  styles=StyleSheet.create({
    modalContainer:{
        width: sizes._screenWidth * 0.6,
        backgroundColor: colors.color_grey6,
        marginTop: Platform.OS == 'ios' ? sizes._screenHeight * 0.3 : sizes._screenHeight * 0.3,
        marginRight: sizes._screenWidth * 0.2,
        marginLeft: sizes._screenWidth * 0.2,
        borderRadius: sizes._16sdp,
        marginBottom: sizes._screenHeight * 0.5,
    },
    viewText:{height: sizes._screenHeight * 0.15},
    textConfirm:{
        fontSize: sizes._12sdp,
        color: colors.color_grey2,
        fontFamily: 'LexendDeca-Medium',
        textAlign: 'center',
        marginTop: sizes._50sdp    },
    viewButton:{height: sizes._40sdp,width:sizes._100sdp,borderWidth:sizes._1sdp,borderColor:colors.color_button_confirm,borderRadius:sizes._8sdp,bottom:sizes._20sdp,alignSelf: 'center'},
    textPress:{color:colors.color_grey2,textAlign:'center',top: sizes._8sdp}
});

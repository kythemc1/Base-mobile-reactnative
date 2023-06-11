import React from 'react';
import { StyleSheet } from 'react-native';
import styleShare from '../../Utils/Styles';
import sizes from 'Configs/UI/Sizes';
import {colors} from 'Configs/UI/Colors';

const styleNotification = StyleSheet.create({
    // viewContent: {
    //     backgroundColor: '#e6e6e6',
    //     // backgroundColor: "red",
    //     paddingHorizontal: 20,
    //     paddingVertical: 10
    // },
    // viewItem: {
    //     backgroundColor: '#fff',
    //     minHeight: 100,
    //     width: '100%',
    //     borderRadius: 10,
    //     padding:10,
    //     marginBottom:20,
    //     flexDirection:'row',
    //     borderColor: '#e0e7f4',
    //     borderWidth: 1,
    //     shadowColor: 'rgba(0,0,0,0.1)',
    //     shadowOffset: {
    //         width: 0,
    //         height: 5
    //     },
    //     shadowOpacity: 1,
    //     elevation: 5,
    // },
    mark:{height:24,width:24,borderWidth:1,borderColor:'#8F969D',borderRadius:4},
    selectAll:{
        flexDirection : 'row'
    },
    viewMark:{
        marginLeft:sizes._screenWidth*0.05,
        marginRight:sizes._screenWidth*0.05,
        justifyContent: 'space-between',
        flexDirection: 'row',
        bottom: sizes._8sdp
    },
    textSelect:{
        color: colors.textunder,
        marginLeft: sizes._8sdp,
        fontFamily: 'LexendDeca-Regular',
        fontSize: sizes._14sdp
    },
    circleSuccess:{
        height: sizes._16sdp,
        width: sizes._16sdp,
        marginTop: sizes._2sdp    },
    viewContainer:{flex: 1,backgroundColor:colors.bgNoti},
    viewBar:{backgroundColor:colors.bgNoti},
    leftPress:{width: sizes._25sdp, height: sizes._34sdp, marginLeft: sizes._12sdp},
    logo:{width: sizes._25sdp, height:sizes._34sdp},
    viewBadge:{position: 'absolute', right: sizes._65sdp, top: sizes._15sdp},
    viewAvatar:{marginRight: sizes._15sdp}
});

export default styleNotification;

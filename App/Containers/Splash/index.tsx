import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './SplashStyles';
import images from 'Configs/Constants/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from 'Configs/UI/Colors';
import {useDispatch} from 'react-redux';
import {CLEAR_DATA_DOCUMENT_TYPE} from 'Store/Reducers/documentTypeSlice';
import {CLEAR_DATA_MY_DOCUMENT, GET_LIST_MY_DOCUMENT_SUCCESS} from 'Store/Reducers/myDocumentSlice';
import { CLEAR_DATA } from 'Store/Reducers/amoutTextSlice';
import {actionsDocumentOfCompany} from 'Store/Actions/actionsDocumentOfCompany';

export default function Splash({navigation}: any) {
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(async () => {
            const name = await AsyncStorage.getItem('firstLogin');
            if (name !== null) {
                navigation.navigate('SignIn');
            } else {
                navigation.navigate('SplashSliders');
            }
            dispatch(CLEAR_DATA_DOCUMENT_TYPE());
            dispatch(CLEAR_DATA_MY_DOCUMENT());
            dispatch(CLEAR_DATA());
        }, 1000);
    }, []);
    return (
        <LinearGradient
            style={styles.container}
            colors={[colors.color_white, colors.color_white, colors.color_white, colors.color_white, colors.color_white_grey]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}>
            <View style={{flex: 2}}/>
            <View style={styles.logo}>
                <Image
                    style={styles.image}
                    source={images.LogoSidoc}
                />
            </View>
        </LinearGradient>
    );
}



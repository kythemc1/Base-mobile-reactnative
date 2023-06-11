import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Animated, Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useAccount} from 'Hooks/API/Auth';
import {styles} from 'Navigations/BottomTabNavigation/BottomTabNavigation.style';
import icons from 'Configs/Constants/icons';
import {NavigationContainer} from '@react-navigation/native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Home from 'Containers/Home/Home';
import {colors} from 'Configs/UI/Colors';
import MyDocuments from 'Containers/MyDocuments/MyDocuments';
import DocumentOfCompany from 'Containers/DocumentOfCompany/DocumentOfCompany';
import messaging from '@react-native-firebase/messaging';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Store/reduxProvider';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_PATHS } from 'Services/Api';
import { ModalBiometricConfirm } from 'Components/ModalBiometricConfirm';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = ({navigation}: any) => {
    const {t} = useTranslation();
    const [modalShow, setModalShow] = useState(false);
    const [showSetting, setShowSetting] = useState(false);
    const [showModalBiometric,setShowModalBiometric]=useState(false);
    const dispatch = useDispatch();
    useAccount();
    const userId = useSelector(
        (state: RootState) => state.auth.user?.id,
    );
    const token = useSelector((state: RootState) => state.auth.auth.token);
    const reQuesUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        async function getUniqueId() {
            if (Platform.OS == 'ios') {
                await DeviceInfo.syncUniqueId().then((uniqueId) => {
                    console.log(uniqueId, 'ios');
                    AsyncStorage.setItem('uniqueId', uniqueId);
                });
            } else {
                await DeviceInfo.getUniqueId().then((uniqueId) => {
                    console.log(uniqueId, 'android');
                    AsyncStorage.setItem('uniqueId', uniqueId);
                });
            }
        }
        const getFcmTokenFireBase = async () => {

            const tokenDevice = await AsyncStorage.getItem('fcmToken');
            console.log('Token device cũ', tokenDevice);
            if (!tokenDevice) {
                try {
                    const tokenDevice = await messaging().getToken();
                    if (tokenDevice) {
                        console.log('Token device mới', tokenDevice);
                        await AsyncStorage.setItem('fcmToken', tokenDevice);
                    } else {
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        };
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
            await getFcmTokenFireBase();
            await getUniqueId();
        }
    };
    const setTokenDevice=async ()=>{

        reQuesUserPermission();

        const deviceId = DeviceInfo.getDeviceId();

        const uniqueId = await AsyncStorage.getItem('uniqueId');
        const fcmTokenDevice = await AsyncStorage.getItem('fcmToken');
        console.log( 'dasdassssssss',userId);
        await axios.post(
            `${API_PATHS.SEND_USER_DEVICE}`,
            {
                userDeviceId: '',
                userId: `${userId}`,
                deviceId: `${deviceId}`,
                deviceToken: `${fcmTokenDevice}`,
                uniqueId: `${uniqueId}`
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then((res) => {
            // console.log(res.data);
        });

    };
    useEffect(()=>{
        setTokenDevice();
    },[]);
    const _renderIcon = (routeName: string, selectedTab: any) => {
        let icon: any = icons.ic_my_document;
        let nameTab = '';
        switch (routeName) {
        case 'myDocument':
            icon = icons.ic_my_document;
            nameTab = `${t('tabs.my_documents')}`;
            break;
        case 'companyDocument':
            icon = icons.ic_company_document;
            nameTab = `${t('tabs.company_documents')}`;
            break;
        }

        return (
            <View style={styles.tabBarItem}>
                <Image
                    source={icon}
                    style={[
                        styles.img,
                        {
                            tintColor:
                routeName === selectedTab
                    ? colors.color_primary1
                    : colors.color_grey2,
                        },
                    ]}
                    resizeMode={'contain'}
                />
                <Text
                    style={[
                        styles.text,
                        {
                            color:
                routeName === selectedTab
                    ? colors.color_primary1
                    : colors.color_grey2,
                        },
                    ]}>
                    {nameTab}
                </Text>
            </View>
        );
    };
    const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
        return (
            <TouchableOpacity onPress={() => navigate(routeName)}>
                {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    return (
        <NavigationContainer independent={true}>
            <CurvedBottomBar.Navigator
                type="UP"
                height={75}
                bgColor={colors.color_white}
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="home"
                borderTopLeftRight
                renderCircle={({navigate, selectedTab}) => (
                    <Animated.View style={styles.btnCircleUp}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                navigate('home');
                            }}>
                            <Image
                                source={icons.ic_sidoc_logo}
                                style={styles.imgCircle}
                                resizeMode={'contain'}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                )}
                tabBar={renderTabBar}>
                <CurvedBottomBar.Screen
                    name="home"
                    position="CENTER"
                    component={() => <Home navigation={navigation} />}
                />
                <CurvedBottomBar.Screen
                    name="myDocument"
                    position="LEFT"
                    component={() => <MyDocuments navigation={navigation} />}
                />
                <CurvedBottomBar.Screen
                    name="companyDocument"
                    component={() => <DocumentOfCompany navigation={navigation} />}
                    position="RIGHT"
                />
            </CurvedBottomBar.Navigator>
            <ModalBiometricConfirm onDismiss={()=>setShowModalBiometric(false)} visible={showModalBiometric} onPressTurnOff={()=>setShowModalBiometric(false)} onPressTurnOn={()=>setShowModalBiometric(false)}/>
        </NavigationContainer>
    );
};
export default BottomTabNavigation;

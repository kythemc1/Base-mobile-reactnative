import {View} from 'react-native-ui-lib';
import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import BottomTabNavigation from './BottomTabNavigation/BottomTabNavigation';
import SignIn from '../Containers/SignIn';
import Notification from '../Containers/Notification';
import {StatusBar} from 'react-native';
import {useLang} from '../Hooks/useLang';
import Navigator from '../Utils/Navigator';
import Splash from '../Containers/Splash';
import Splashsliders from 'Containers/SplashSliders';
import BackLogin from '../Containers/BackLogin';
import PasswordRecovery from 'Containers/PasswordRecovery';
import ChangePassword from 'Containers/ChangePassword/ChangePassword';
import ChangePasswordSuccess from 'Containers/ChangePasswordSuccess/ChangPasswordSuccess';
import {SearchMyDocument} from 'Containers/Search/myDocumentSearch/MyDocumentSearch';
import {DocumentOfCompanySearch} from 'Containers/Search/DocumentOfCompanySearch/DocumentOfCompanySearch';

export default function AppNavigation() {
    useLang();
    const navigationRef = useRef<any | null>(null);
    // const isLogged = useSelector((state: RootState) => state.auth.auth.isLogged);

    const onRef = (ref: any) => {
        Navigator.setContainer(ref?.current);
    };

    useEffect(() => {
        onRef(navigationRef);
        console.log(navigationRef.current.getState());
    }, [navigationRef]);

    return (
        <View flex bg-white>
            <StatusBar
                translucent
                backgroundColor={'transparent'}
                barStyle={'dark-content'}
            />
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName={'Splash'}>
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{
                            gestureEnabled: false,
                        }}
                    />
                    <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
                    <Stack.Screen name="SplashSliders" component={Splashsliders} />
                    <Stack.Screen name="TabNavigation" component={BottomTabNavigation} />
                    <Stack.Screen name="Notification" component={Notification} />
                    <Stack.Screen name="BackLogin" component={BackLogin} />
                    <Stack.Screen name="ChangePassword" component={ChangePassword} />
                    <Stack.Screen
                        name="ChangePasswordSuccess"
                        component={ChangePasswordSuccess}
                    />
                    <Stack.Screen name="searchMyDocument" component={SearchMyDocument} />
                    <Stack.Screen
                        name="DocumentOfCompanySearch"
                        component={DocumentOfCompanySearch}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

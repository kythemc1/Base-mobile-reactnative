import DeviceInfo from 'react-native-device-info';
import {Alert, Platform} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const deviceId = DeviceInfo.getDeviceId();

export async function getUniqueId() {
    if (Platform.OS == 'ios') {
        await DeviceInfo.syncUniqueId().then((uniqueId) => {
            console.log(uniqueId, 'ios');
        });
    } else {
        await DeviceInfo.getUniqueId().then((uniqueId) => {
            console.log(uniqueId, 'android');
        });
    }
}

// hỏi quyền cho phép thông báo lấy token device ios
export const reQuesUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        await getFcmTokenFireBase();

    }
};

// get token device
export const getFcmTokenFireBase = async () => {

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

// tương tác với màn hình
export const NotificationService = async () => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    await messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:( Khi app chạy ở chế độ chạy nền chưa quit)',
            remoteMessage.notification,
        );
        // navigation.navigate(remoteMessage.data.type);
    });

    // foreground notification
    await messaging().onMessage(async (remoteMessage) => {
        console.log(remoteMessage, 'Foreground notification (Trạng thái khi mở ở trong ứng dụng)');
        Alert.alert('Trạng thái ForeGround');
    });
    // Check whether an initial notification is available
    await messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:(Trạng thái khi quit app)',
                    remoteMessage,
                );
                // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
            }
            // setLoading(false);
        });
};

import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        flex: 7,
    },
    image: {
        alignSelf: 'center',
        height: 200,
        width: 150,
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
});

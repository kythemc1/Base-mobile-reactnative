import {TouchableOpacity, Text} from 'react-native-ui-lib';
import React from 'react';
import {SafeAreaView} from 'react-native';

export default function Report() {
    return (
        <SafeAreaView>
            <TouchableOpacity flex bg-red justify-center items-center>
                <Text text-primary5>Transfer</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

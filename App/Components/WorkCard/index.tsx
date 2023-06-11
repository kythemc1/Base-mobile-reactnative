import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from 'Components/WorkCard/styles';
interface props {
  text: string;
  number: number;
  imageLink: string;
  bgColor: string;
  images: any;
  onPress?: () => void;
}
export default function WorkCard(props: props) {
    return (
        <TouchableOpacity
            style={{...styles.viewThuongThao, backgroundColor: `${props.bgColor}`}}
            onPress={props.onPress}>
            <Text style={styles.textThuongThao}>{props.text}</Text>
            <View style={{...styles.viewNumberthuongthao}}>
                <Text style={styles.numberThuongThao}>{props.number}</Text>
                <Image style={styles.maskThuongThao} source={props.images} />
            </View>
        </TouchableOpacity>
    );
}

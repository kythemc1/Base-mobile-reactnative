import React from 'react';
import {
    View,
    Image, TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../Store/reduxProvider';

import icons from 'Configs/Constants/icons';
import {Appbar, Avatar, Badge} from 'react-native-paper';
import {styles} from 'Components/Commons/HeaderNew/HeaderStyles';
import images from 'Configs/Constants/images';

interface headerInterface {
    onPress: () => void;
    onShowProfile: () => void;
}

export default function Header(props: headerInterface) {
    const name = useSelector((state: RootState) => state.auth.user?.username);
    return (
        <Appbar.Header mode={'center-aligned'} style={{backgroundColor: 'transparent'}}>
            <View style={styles.viewLogo}>
                <Image
                    style={styles.bellringing}
                    source={images.img_logo_sidoc}
                />
            </View>
            <Appbar.Content title={''}/>
            <Appbar.Action icon={icons.ic_noti} onPress={props.onPress}/>
            <Badge style={{position: 'absolute', right: 65, top: 15}} size={15}>99+</Badge>
            <TouchableOpacity style={{width: 32, height: 32, borderRadius: 20, marginRight: 15}}
                onPress={props.onShowProfile}>
                <Avatar.Image source={{uri: 'https://i.pravatar.cc/300'}} size={32}/>
            </TouchableOpacity>

        </Appbar.Header>
    );
}


import React, {useState} from 'react';
import {Image, TouchableOpacity, View, FlatList, Text} from 'react-native';
import {useNotification} from 'Hooks/useNotification';
import icons from 'Configs/Constants/icons';
import {Appbar, Avatar, Badge, Card} from 'react-native-paper';
import {RootState} from 'Store/reduxProvider';
import {Noti} from 'Components/Commons/Noti';
import styles from './styleNotification';
import {useTranslation} from 'react-i18next';
const Notification = (props: any) => {
    const [showSelectAll,setShowSelectAll]=useState(false);
    const {navigation} = props;
    const leftPress = () => {
        navigation.goBack();
    };
    const {listNotification} = useNotification();
    const {t} = useTranslation();
    return (
        <View style={styles.viewContainer}>
            <View style={{flex: 1,justifyContent: 'space-between'}}>
                <Appbar.Header style={styles.viewBar} mode={'center-aligned'}>
                    <TouchableOpacity onPress={leftPress} style={styles.leftPress}>
                        <Image source={icons.ic_logo_sidoc} style={styles.logo} resizeMode={'contain'}/>
                    </TouchableOpacity>
                    <Appbar.Action icon={icons.ic_menu}/>
                    <Appbar.Content title={''}/>
                    <Appbar.Action icon={icons.ic_noti}/>
                    <Badge style={styles.viewBadge}
                        size={15}>{listNotification.filter((item:any) => item.hasReadNotification == false).length}</Badge>
                    <Avatar.Image source={{uri: 'https://i.pravatar.cc/300'}} size={32} style={styles.viewAvatar}/>
                </Appbar.Header>
                <View style={styles.viewMark}>

                    <TouchableOpacity style={styles.selectAll} onPress={()=>{setShowSelectAll(!showSelectAll);}}>
                        <View style={styles.mark}></View>
                        <Text style={styles.textSelect}>{t('noti.select')}</Text>
                    </TouchableOpacity>
                    {showSelectAll ?
                        <View style={styles.selectAll}>
                            <Image style={styles.circleSuccess} source={icons.ic_detail}/>
                            <Text style={styles.textSelect}>{t('noti.mark')}</Text>
                        </View>:
                        <View style={styles.selectAll}>
                        </View>
                    }

                </View>
            </View>
            <View style={{flex: 6}}>
                <FlatList
                    data={listNotification}
                    renderItem={({item}: any) => {
                        return (
                        // <Card mode={'outlined'} style={{marginVertical: 6, marginHorizontal: 12}}>
                        //     <Card.Title title={item.titleNotification} subtitle={item.contentNotification}
                        //         removeClippedSubviews={true} subtitleNumberOfLines={5}
                        //         subtitleStyle={{width: '100%'}}/>
                        //     <Card.Title title={`${item.hasReadNotification == true ? 'Đã đọc' : 'Chưa đọc'}`}
                        //         titleStyle={{alignSelf: 'flex-end'}}
                        //     />
                        //
                        // </Card>
                            <Noti itemNotification={item} showSelectAll={showSelectAll}/>
                        );
                    }}
                    // keyExtractor={(item: any) => item.dataIdNotification}
                    removeClippedSubviews={false} />
            </View>
        </View>
    );
};

export default Notification;

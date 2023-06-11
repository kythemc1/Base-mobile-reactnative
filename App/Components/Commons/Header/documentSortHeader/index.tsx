import {Image, Text, TouchableOpacity, View} from 'react-native';
import icons from 'Configs/Constants/icons';
import React from 'react';
import {styles} from 'Components/Commons/Header/documentSortHeader/styles';
import { useSelector } from 'react-redux';
import { RootState } from 'Store/reduxProvider';

interface sortInterface {
    onPressView?: () => void;
    statusIcon?: boolean;
    onPressSort?: () => void;
    statusSortIcon?: boolean;
    title?:string
}

export const Sort = (props: sortInterface) => {
    return (
        <View
            style={styles.mContainer}>
            <TouchableOpacity
                onPress={props.onPressSort}
                style={styles.mSort}>
                <Image
                    source={props.statusSortIcon ? icons.ic_sort_asc : icons.ic_sort_desc}
                    style={styles.icon}
                    resizeMode={'contain'}
                />
                <Text style={styles.mTitle} >{props.title}</Text>
                <Image
                    source={icons.ic_arrow_down}
                    style={styles.icon}
                    resizeMode={'contain'}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onPressView}>
                <Image
                    source={props.statusIcon ? icons.ic_elements : icons.ic_view_list}
                    style={styles.imgView}
                    resizeMode={'contain'}
                />
            </TouchableOpacity>
        </View>
    );
};
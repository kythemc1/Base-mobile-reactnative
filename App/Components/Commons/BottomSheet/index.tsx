import {Image, Text, TouchableOpacity, View} from 'react-native';
import icons from 'Configs/Constants/icons';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';
import {List} from 'react-native-paper';
import { SET_SORT_DOCUMENT, SET_SORT_ID} from 'Store/Reducers/myDocumentSlice';
import sizes from 'Configs/UI/Sizes';
import {IdSort} from 'Configs/Constants/ConstantsId';

interface bottomTabInterface {
    statusIcon: boolean;
    handleChangeSortIcon?: any;
}

export const ContentBottomSheet = (props: bottomTabInterface) => {
    const {t} = useTranslation();
    const {sortId} = useSelector((state: RootState) => ({
        sortDocumentName: state.myDocument.sortDocument,
        sortId: state.myDocument.sortId,
    }));
    const dispatch = useDispatch();

    function handleSetDocumentSortName(e: any) {
        const id = e._dispatchInstances.memoizedProps.nativeID;
        dispatch(SET_SORT_ID(id));
        if (id == IdSort.id_name) {
            dispatch(SET_SORT_DOCUMENT(`${t('sort.name')}`));
        }
        if (id == IdSort.id_date) {
            dispatch(SET_SORT_DOCUMENT(`${t('sort.date_time')}`));
        }
    }

    return (
        <View>
            {/* Title bottom sheet*/}
            <View style={{alignItems: 'center'}}>
                <Text>{t('sort.sort')}</Text>
            </View>
            <View style={{paddingVertical: sizes._28sdp}}>
                <List.Item
                    onPress={e => {
                        handleSetDocumentSortName(e);
                        props.handleChangeSortIcon();
                    }}
                    title={t('sort.name')}
                    left={() =>
                        sortId === IdSort.id_name ? (
                            <List.Icon
                                icon={props.statusIcon ? icons.ic_sort_asc : icons.ic_sort_desc}
                                style={{marginLeft: sizes._12sdp}}
                            />
                        ) : (
                            <View style={{marginLeft: sizes._36sdp}}></View>
                        )
                    }
                    id={IdSort.id_name}
                />
                <List.Item
                    onPress={e => {
                        handleSetDocumentSortName(e);
                        props.handleChangeSortIcon();
                    }}
                    title={t('sort.date_time')}
                    left={() =>
                        sortId === IdSort.id_date ? (
                            <List.Icon
                                icon={props.statusIcon ? icons.ic_sort_asc : icons.ic_sort_desc}
                                style={{marginLeft: sizes._12sdp}}
                            />
                        ) : (
                            <View style={{marginLeft: sizes._36sdp}}></View>
                        )
                    }
                    id={IdSort.id_date}
                />
            </View>
        </View>
    );
};

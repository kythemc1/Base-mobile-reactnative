import React, {useEffect, useRef, useState} from 'react';
import {
    FlatList,
    Platform,
    RefreshControl,
    ScrollView,
    Text,
    View,
} from 'react-native';
import Header from 'Components/Commons/Header/Header';
import {ItemMyDocument} from 'Components/Commons/Item/documentItem';
import {styles} from 'Containers/MyDocuments/styles';
import {Sort} from 'Components/Commons/Header/documentSortHeader';
import {useTranslation} from 'react-i18next';
import {colors} from 'Configs/UI/Colors';
import {ListMyDocumentInterface} from 'Store/Models';
import {useDispatch, useSelector} from 'react-redux';
import {
    GET_DATA_SEARCH_DOCUMENT_SUCCESS,
    SET_SORT_STATUS,
    SET_SORT_TYPE,
} from 'Store/Reducers/myDocumentSlice';
import RBSheet from 'react-native-raw-bottom-sheet';
import sizes from 'Configs/UI/Sizes';
import {ContentBottomSheet} from 'Components/Commons/BottomSheet';
import {useDocument} from 'Hooks/useDocument';
import RNOptionBottomSheet from 'Components/RNOptionBottomSheet/RNOtionBottomSheet';

interface Interface {
  navigation: any;
}

export default function MyDocuments(props: Interface) {
    const [statusView, setStatusView] = useState(true);
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [paramsOption, setParamsOption] = useState<ListMyDocumentInterface>();
    const refOpBSheet = useRef();
    const {
        sortStatus,
        sortDocumentName,
        listMyDocument,
        totalElement,
        isLoading,
        refreshControl,
    } = useDocument();

    const refRBSheet = useRef();

    function handleChangeSortIcon() {
    // @ts-ignore
        refRBSheet.current.close();
        dispatch(SET_SORT_STATUS(!sortStatus));
    }
    return (
        <View style={{flex: 1, backgroundColor: colors.color_background}}>
            {/*header*/}
            <Header
                navigation={props.navigation}
                typeHeader="search_header"
                statusSelect={false}
                onPress={() => {
                    props.navigation.navigate('Notification');
                }}
                onPressSearch={() => {
                    props.navigation.navigate('searchMyDocument');
                    dispatch(GET_DATA_SEARCH_DOCUMENT_SUCCESS([]));
                }}
            />
            {/*Bottom sheet*/}
            <RBSheet
                // @ts-ignore
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                animationType={'fade'}
                customStyles={{
                    wrapper: {
                        backgroundColor: colors.color_opacity,
                    },
                    container: {
                        borderTopLeftRadius: sizes._32sdp,
                        borderTopRightRadius: sizes._32sdp,
                        height: sizes._screenHeight * 0.45,
                        shadowColor: colors.color_dark_grey,
                        shadowOffset: {
                            width: 0,
                            height: sizes._3sdp,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,
                        elevation: 6,
                    },
                    draggableIcon: {
                        backgroundColor: colors.color_white,
                    },
                }}>
                <ContentBottomSheet
                    statusIcon={sortStatus}
                    handleChangeSortIcon={handleChangeSortIcon}
                />
            </RBSheet>
            {/* Option Bottom sheet*/}
            <RBSheet
                // @ts-ignore
                ref={refOpBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                animationType={'fade'}
                customStyles={{
                    wrapper: {
                        backgroundColor: colors.color_opacity,
                    },
                    container: {
                        borderTopLeftRadius: sizes._32sdp,
                        borderTopRightRadius: sizes._32sdp,
                        height: sizes._48sdp * 9,
                        paddingBottom: sizes._16sdp,
                        shadowColor: colors.color_dark_grey,
                        shadowOffset: {
                            width: 0,
                            height: sizes._3sdp,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,
                        elevation: 6,
                    },
                    draggableIcon: {
                        backgroundColor: colors.color_white,
                    },
                }}>
                {/* @ts-ignore */}
                <RNOptionBottomSheet
                    params={paramsOption}
                    title={
                        `${paramsOption?.documentCode}` +
            '-' +
            `${paramsOption?.documentName}`
                    }
                />
            </RBSheet>
            <ScrollView
                style={{flex: 1}}
                refreshControl={
                    Platform.OS == 'ios' ? (
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={refreshControl}
                            tintColor={colors.color_primary1}
                        />
                    ) : (
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={refreshControl}
                            colors={[colors.color_primary1]}
                        />
                    )
                }>
                {/*Phần sort screen*/}
                <View style={{marginTop: sizes._4sdp}}>
                    <Sort
                        title={
                            sortDocumentName === ''
                                ? `${t('sort.date_time')}`
                                : sortDocumentName
                        }
                        statusSortIcon={sortStatus}
                        // @ts-ignore
                        onPressSort={() => {
                            // @ts-ignore
                            refRBSheet.current.open();
                            dispatch(SET_SORT_TYPE(true));
                        }}
                        onPressView={() => {
                            setStatusView(!statusView);
                        }}
                        statusIcon={statusView}
                    />
                    <Text style={styles.mTitle}>
                        {t('my_document.waiting_for_process')}
                        <Text style={styles.mTitleCount}>
                            {'(' + `${totalElement}` + ')'}
                        </Text>
                    </Text>
                </View>
                {/*Content*/}
                <FlatList
                    inverted={true}
                    data={listMyDocument}
                    extraData={listMyDocument}
                    ItemSeparatorComponent={() => (
                        // Kẻ chân giữa 2 item
                        <View style={styles.mSeparator}>
                            <View style={styles.cSeparator}>
                                <View style={styles.separator} />
                            </View>
                        </View>
                    )}
                    removeClippedSubviews={true}
                    renderItem={({
                        item,
                        index,
                    }: {
            item: ListMyDocumentInterface;
            index: number;
          }) => {
                        return (
                        // Item list
                            <ItemMyDocument
                                statusView={statusView}
                                data={listMyDocument}
                                indexData={index}
                                itemData={item}
                                onHandleOption={() => {
                                    setParamsOption(item);
                                    // @ts-ignore
                                    refOpBSheet.current.open();
                                }}
                            />
                        );
                    }}
                    keyExtractor={item => `${item.documentId}`}
                    ListHeaderComponent={<View style={{height: sizes._80sdp}}></View>}
                />
            </ScrollView>
        </View>
    );
}

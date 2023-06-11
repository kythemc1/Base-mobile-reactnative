import {
    View,
    Text,
    ScrollView,
    FlatList,
    Platform,
    RefreshControl,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './styles';
import {useDocumentOfCompany} from 'Hooks/useDocumentOfCompany';
import Header from 'Components/Commons/Header/Header';
import {NavigationProp} from '@react-navigation/native';
import {ItemDocumentCompany} from 'Components/Commons/Item/documentCompany';
import {Sort} from 'Components/Commons/Header/documentSortHeader';
import sizes from 'Configs/UI/Sizes';
import {useTranslation} from 'react-i18next';
import {colors} from 'Configs/UI/Colors';
import {InterfaceCompanyDocument} from 'Utils/Modals';
import RBSheet from 'react-native-raw-bottom-sheet';
import RNOptionBottomSheet from 'Components/RNOptionBottomSheet/RNOtionBottomSheet';
import {ContentBottomSheet} from 'Components/Commons/BottomSheet';
import {useDispatch} from 'react-redux';
import {SET_SORT_STATUS} from 'Store/Reducers/documentCompanySlice';

interface DocumentOfCompanyInterface {
  navigation: NavigationProp<any>;
}
const DocumentOfCompany = (props: DocumentOfCompanyInterface) => {
    const {
        dataAllDocumentCompany,
        totalElements,
        isLoading,
        sortStatus,
        sortName,
        refreshControl,
    } = useDocumentOfCompany();
    const [paramsOption, setParamsOption] = useState<InterfaceCompanyDocument>();
    const [statusView, setStatusView] = useState<boolean>(true);
    const refOpBSheet = useRef<any>();
    const refRBSheet = useRef<any>();
    const {t} = useTranslation();
    const dispatch = useDispatch();
    function handleChangeSortIcon() {
    // @ts-ignore
        refRBSheet.current.close();
        dispatch(SET_SORT_STATUS(!sortStatus));
    }
    return (
        <View style={{flex: 1}}>
            {/* Header */}
            <Header
                typeHeader={'search_header'}
                navigation={props.navigation}
                onPressSearch={() =>
                    props.navigation.navigate('DocumentOfCompanySearch')
                }
                onPress={() => props.navigation.navigate('Notification')}
            />
            {/*Bottom sheet*/}
            {/* @ts-ignore */}
            <RBSheet
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
            {/* @ts-ignore */}
            <RBSheet
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
                <RNOptionBottomSheet
                    params={paramsOption}
                    title={`${paramsOption?.code}` + '-' + `${paramsOption?.name}`}
                />
            </RBSheet>
            {/* Content */}
            <ScrollView
                style={{flex: 1, backgroundColor: colors.color_background}}
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
                        title={sortName === '' ? `${t('sort.date_time')}` : sortName}
                        statusSortIcon={sortStatus}
                        // @ts-ignore
                        onPressSort={() => {
                            // @ts-ignore
                            refRBSheet.current.open();
                        }}
                        onPressView={() => {
                            setStatusView(!statusView);
                        }}
                        statusIcon={statusView}
                    />
                    <Text style={styles.mTitle}>
                        {t('my_document.waiting_for_process')}
                        <Text style={styles.mTitleCount}>
                            {'(' + `${totalElements}` + ')'}
                        </Text>
                    </Text>
                </View>
                <FlatList
                    inverted={true}
                    ListHeaderComponent={<View style={{height: sizes._70sdp}}></View>}
                    ItemSeparatorComponent={() => (
                        // Kẻ chân giữa 2 item
                        <View style={styles.mSeparator}>
                            <View style={styles.cSeparator}>
                                <View style={styles.separator} />
                            </View>
                        </View>
                    )}
                    keyExtractor={(item: InterfaceCompanyDocument) => item.documentId}
                    data={dataAllDocumentCompany}
                    extraData={dataAllDocumentCompany}
                    removeClippedSubviews
                    renderItem={({item, index}) => {
                        return (
                            <ItemDocumentCompany
                                data={dataAllDocumentCompany}
                                indexData={index}
                                itemData={item}
                                statusView={statusView}
                                onHandleOption={() => {
                                    setParamsOption(item);
                                    refOpBSheet.current.open();
                                }}
                            />
                        );
                    }}
                />
            </ScrollView>
        </View>
    );
};

export default DocumentOfCompany;

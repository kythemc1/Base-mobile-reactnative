import {Search} from 'Components/Commons/Search/Search';
import {
    FlatList,
    Image,
    Platform,
    RefreshControl,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
    GET_DATA_SEARCH_DOCUMENT_SUCCESS,
    SET_FLAG_STATUS,
    SET_NAME_STATUS_DOCUMENT,
    SET_STATUS_DOCUMENT,
    SET_STATUS_ID,
} from 'Store/Reducers/myDocumentSlice';
import {ItemMyDocument} from 'Components/Commons/Item/documentItem';
import React, {useEffect, useRef, useState} from 'react';
import {colors} from 'Configs/UI/Colors';
import {pageSize} from 'Configs/Constants/PageSize';
import {RootState} from 'Store/reduxProvider';
import {ListMyDocumentInterface, ParamsMyDocument} from 'Store/Models';
import {styles} from 'Containers/Search/myDocumentSearch/styles';
import {useTranslation} from 'react-i18next';
import {DocumentTypeSearch} from '../../../Components/documentTypeSearch';
import {MyDocumentStatus} from 'Components/documentStatus/MyDocumentStatus/MyDocumentStatus';
import {DocumentDateSearch} from 'Components/documentDate/SelectDate';
import {useDocumentSearch} from 'Hooks/useDocumentSearch';
import {useDebounce} from 'Hooks/useDebounce';
import {constantsId} from 'Configs/Constants/ConstantsId';
import {Appbar} from 'react-native-paper';
import sizes from 'Configs/UI/Sizes';
import icons from 'Configs/Constants/icons';
import RBSheet from 'react-native-raw-bottom-sheet';
import RNOptionBottomSheet from 'Components/RNOptionBottomSheet/RNOtionBottomSheet';

export const SearchMyDocument = ({navigation}: any) => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const [keyWord, setKeyWord] = useState<string>('');
    const [visibleType, setVisibleType] = useState<boolean>(false);
    const [visibleStatus, setVisibleStatus] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);
    const [visibleDate, setVisibleDate] = useState<boolean>(false);
    const {getSearchDocument} = useDocumentSearch();
    const {
        token,
        dataSearchDocument,
        totalElement,
        documentStatus,
        documentTypeId,
        startDate,
        endDate,
        nameDate,
        isLoading,
        flagStatus,
        statusId,
    } = useSelector((state: RootState) => ({
        token: state.auth.auth.token,
        dataSearchDocument: state.myDocument.dataSearchDocument,
        totalElement: state.myDocument.totalElement,
        documentStatus: state.myDocument.documentStatus,
        documentTypeId: state.documentType.documentTypeId,
        statusId: state.myDocument.statusId,
        startDate: state.myDocument.startDate,
        endDate: state.myDocument.endDate,
        nameDate: state.myDocument.nameDate,
        isLoading: state.myDocument.isLoading,
        flagStatus: state.myDocument.flagStatus,
    }));
    const [paramsOption, setParamsOption] = useState<ListMyDocumentInterface>();
    const refOpBSheet = useRef();
    const {debounce} = useDebounce();
    // function load more data
    function handleLoadMore() {
        if (page < Math.ceil(totalElement / 10) - 1) {
            setPage(page + 1);
        }
    }
    // function debounce
    function searchByKeyWord(text: string) {
        debounce(() => setKeyWord(text), 1000);
    }

    function searchByStatus() {
        debounce(() => {
            const params: ParamsMyDocument = {page: page, size: pageSize[10]};
            if (keyWord) {
                params.keyword = keyWord;
            }
            if (documentTypeId.length > 0) {
                params.documentTypeIds = documentTypeId;
            }
            if (documentStatus) {
                params.status = documentStatus;
            }
            if (documentStatus == constantsId.id_MANAGE) {
                delete params.status;
            }
            if (documentStatus == constantsId.id_PROCESS) {
                delete params.status;
            }
            if (nameDate) {
                params.dateTo = endDate;
                params.dateFrom = startDate;
            }

            getSearchDocument(
                params,
                `${token}`,
                dataSearchDocument,
                flagStatus,
            );
        }, 1000);
    }

    //function show modal

    function handleShowModal(field: 'type' | 'status' | 'date') {
        switch (field) {
        case 'type':
            setVisibleType(true);
            break;
        case 'status':
            setVisibleStatus(true);
            break;
        case 'date':
            setVisibleDate(true);
            break;
        default:
            break;
        }
    }

    //function hide modal
    function handleHideModal(field: 'type' | 'status' | 'date') {
        switch (field) {
        case 'type':
            setVisibleType(false);
            break;
        case 'status':
            setVisibleStatus(false);
            break;
        case 'date':
            setVisibleDate(false);
            break;
        default:
            break;
        }
    }

    useEffect(() => {
        const paramsObj = {
            keyWord,
            documentTypeId,
            documentStatus,
            nameDate,
        };
        const checkObj = Object.keys(paramsObj).filter(
            obj => (paramsObj as any)[obj] && (paramsObj as any)[obj].length > 0,
        );
        if (checkObj.length > 0) {
            searchByStatus();
        }
    }, [keyWord, documentTypeId, documentStatus, nameDate, page, flagStatus]);
    return (
        <View style={styles.mContainer}>
            <Appbar.Header style={{backgroundColor: colors.color_background}}>
                <Appbar.BackAction
                    onPress={() => {
                        navigation.goBack();
                        dispatch(SET_STATUS_ID(''));
                        dispatch(SET_STATUS_DOCUMENT(''));
                        dispatch(SET_NAME_STATUS_DOCUMENT(''));
                    }}
                    color={colors.color_grey2}
                    size={sizes._24sdp}
                />
                <View style={styles.mContainerHeader}>
                    <View>
                        <Image
                            source={icons.ic_search}
                            style={{
                                width: sizes._24sdp,
                                height: sizes._24sdp,
                                tintColor: colors.color_grey2,
                            }}
                        />
                    </View>
                    <TextInput
                        placeholder={`${t('header.search')}`}
                        placeholderTextColor={colors.color_grey2}
                        style={styles.mInput}
                        defaultValue={''}
                        onChangeText={text => {
                            dispatch(GET_DATA_SEARCH_DOCUMENT_SUCCESS([]));
                            if (flagStatus == 'manage') {
                                searchByKeyWord(text);
                                dispatch(SET_FLAG_STATUS('manage'));
                            } else {
                                searchByKeyWord(text);
                                dispatch(SET_FLAG_STATUS('process'));
                            }
                        }}
                        numberOfLines={1}
                        onFocus={() => {
                            dispatch(GET_DATA_SEARCH_DOCUMENT_SUCCESS([]));
                        }}
                    />
                </View>
            </Appbar.Header>
            <ScrollView
                refreshControl={
                    Platform.OS == 'ios' ? (
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={handleLoadMore}
                            tintColor={colors.color_primary1}
                        />
                    ) : (
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={handleLoadMore}
                            colors={[colors.color_primary1]}
                        />
                    )
                }>
                <Search
                    handleVisibleType={() => handleShowModal('type')}
                    handleVisibleStatus={() => handleShowModal('status')}
                    handleVisibleDate={() => handleShowModal('date')}
                    typeButtonTab={'myDocument'}
                />
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
                            height: sizes._screenHeight * 0.65,
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
                {dataSearchDocument.length > 0 ? (
                    <FlatList
                        inverted
                        ItemSeparatorComponent={() => (
                            // Kẻ chân giữa 2 item
                            <View style={styles.mSeparator}>
                                <View style={styles.cSeparator}>
                                    <View style={styles.separator} />
                                </View>
                            </View>
                        )}
                        extraData={dataSearchDocument}
                        data={dataSearchDocument}
                        renderItem={({item, index}) => (
                            <ItemMyDocument
                                statusView={true}
                                data={dataSearchDocument}
                                itemData={item}
                                indexData={index}
                                onHandleOption={() => {
                                    setParamsOption(item);
                                    // @ts-ignore
                                    refOpBSheet.current.open();
                                }}
                            />
                        )}
                        removeClippedSubviews={true}
                        keyExtractor={(item: ListMyDocumentInterface) =>
                            `${item.documentId}`
                        }
                    />
                ) : (
                    <View style={styles.mContent}>
                        <Text style={styles.text}>{t('search.not_find')}</Text>
                    </View>
                )}
                <MyDocumentStatus
                    visible={visibleStatus}
                    hideModal={() => handleHideModal('status')}
                />
                <DocumentTypeSearch
                    visible={visibleType}
                    hideModal={() => handleHideModal('type')}
                />
                <DocumentDateSearch
                    visible={visibleDate}
                    hidenVisible={() => handleHideModal('date')}
                />
            </ScrollView>
        </View>
    );
};

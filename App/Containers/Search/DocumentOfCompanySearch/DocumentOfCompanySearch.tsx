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
    SET_NAME_STATUS_DOCUMENT,
    SET_STATUS_DOCUMENT,
    SET_STATUS_ID,
} from 'Store/Reducers/myDocumentSlice';
import React, {useEffect, useRef, useState} from 'react';
import {colors} from 'Configs/UI/Colors';
import {pageSize} from 'Configs/Constants/PageSize';
import {RootState} from 'Store/reduxProvider';
import {ListMyDocumentInterface} from 'Store/Models';
import {styles} from 'Containers/Search/DocumentOfCompanySearch/styles';
import {useTranslation} from 'react-i18next';
import {DocumentTypeSearch} from '../../../Components/documentTypeSearch';
import {DocumentDateSearch} from 'Components/documentDate/SelectDate';
import {useDebounce} from 'Hooks/useDebounce';
import {Appbar} from 'react-native-paper';
import sizes from 'Configs/UI/Sizes';
import icons from 'Configs/Constants/icons';
import RBSheet from 'react-native-raw-bottom-sheet';
import RNOptionBottomSheet from 'Components/RNOptionBottomSheet/RNOtionBottomSheet';
import DocumentTreeCompany from 'Components/DocumentTreeCompany/DocumentTreeCompany';
import DocumentSubTree from 'Components/DocumentTreeCompany/DocumentSubTree/DocumentSubTree';
import {DocumentCompanyStatus} from 'Components/documentStatus/companyDocumentStatus/DocumentCompanyStatus';
import {
    InterfaceCompanyDocument,
    ParamsGetAllDocumentCompany,
} from 'Utils/Modals';
import {actionsDocumentOfCompany} from 'Store/Actions/actionsDocumentOfCompany';
import {ItemDocumentCompany} from 'Components/Commons/Item/documentCompany';
import {GET_DATA_SEARCH} from 'Store/Reducers/documentCompanySlice';

export const DocumentOfCompanySearch = ({navigation}: any) => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const [keyWord, setKeyWord] = useState<string>('');
    const [visibleType, setVisibleType] = useState<boolean>(false);
    const [visibleStatus, setVisibleStatus] = useState<boolean>(false);
    const [visibleDate, setVisibleDate] = useState<boolean>(false);
    const [visibleTree, setVisibleTree] = useState<boolean>(false);
    const [visibleSubTree, setVisibleSubTree] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);
    const {
        totalElement,
        documentTypeId,
        startDate,
        endDate,
        nameDate,
        isLoading,
        nameTree,
        idSubTree,
        idTree,
        dataTree,
        dataSearch,
        parentId,
        type,
        status,
    } = useSelector((state: RootState) => ({
        totalElement: state.documentCompany.totalElement,
        documentTypeId: state.documentType.documentTypeId,
        startDate: state.myDocument.startDate,
        endDate: state.myDocument.endDate,
        nameDate: state.myDocument.nameDate,
        isLoading: state.documentCompany.isLoadingDocumentCompany,
        idTree: state.documentCompany.idTree,
        nameTree: state.documentCompany.nameTree,
        idSubTree: state.documentCompany.idSubTree,
        dataTree: state.documentCompany.dataTreeDocumentWithRole,
        dataSearch: state.documentCompany.dataSearch,
        parentId: state.documentCompany.parentId,
        type: state.documentCompany.type,
        status: state.documentCompany.status,
    }));

    const [paramsOption, setParamsOption] = useState<InterfaceCompanyDocument>();
    const refOpBSheet = useRef<any>();
    const {searchDocumentByNodeTreeCompany} = actionsDocumentOfCompany();
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
        dispatch(GET_DATA_SEARCH([]));
    }

    function searchByStatus(flag: boolean) {
        debounce(() => {
            const params: ParamsGetAllDocumentCompany = {
                page: page,
                size: pageSize[10],
                nodeId: dataTree.id,
                nodeType: dataTree.type,
                parentId: dataTree.parentId,
            };
            if (idTree) {
                params.nodeId = idTree;
            }
            if (idSubTree) {
                params.nodeId = idSubTree;
            }
            if (parentId) {
                params.parentId = parentId;
            }
            if (type) {
                params.nodeType = type;
            }
            if (keyWord) {
                params.keyword = keyWord;
            }
            if (documentTypeId.length > 0) {
                params.documentTypeIdList = documentTypeId;
            }
            if (status) {
                params.statusList = status;
            }
            if (nameDate) {
                params.dateTo = endDate;
                params.dateFrom = startDate;
            }
            searchDocumentByNodeTreeCompany(params, dataSearch);
        }, 1000);
    }

    //function show modal
    function handleShowModal(field: 'type' | 'status' | 'date' | 'tree') {
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
        case 'tree':
            setVisibleTree(true);
            break;
        default:
            break;
        }
    }

    //function hide modal
    function handleHideModal(field: 'type' | 'status' | 'date' | 'tree') {
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
        case 'tree':
            setVisibleTree(false);
            break;
        default:
            break;
        }
    }

    useEffect(() => {
        const paramsObj = {
            keyWord,
            documentTypeId,
            status,
            nameDate,
            idTree,
            idSubTree,
            parentId,
            type,
        };
        const checkObj = Object.keys(paramsObj).filter(
            obj => (paramsObj as any)[obj] && (paramsObj as any)[obj].length > 0,
        );
        if (checkObj.length > 0) {
            searchByStatus(true);
        } else {
            dispatch(GET_DATA_SEARCH([]));
        }
    }, [
        keyWord,
        documentTypeId,
        status,
        nameDate,
        page,
        idTree,
        idSubTree,
        type,
        parentId,
        nameTree,
    ]);
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
                            searchByKeyWord(text);
                        }}
                        numberOfLines={1}
                        onFocus={() => {}}
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
                    handleVisibleTree={() => handleShowModal('tree')}
                    typeButtonTab={'documentCompany'}
                />
                {/* Option Bottom sheet*/}
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
                            height: sizes._screenHeight * 0.6,
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
                {dataSearch?.length > 0 ? (
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
                        extraData={dataSearch}
                        data={dataSearch}
                        renderItem={({item, index}) => (
                            <ItemDocumentCompany
                                statusView={true}
                                data={dataSearch}
                                itemData={item}
                                indexData={index}
                                onHandleOption={() => {
                                    setParamsOption(item);
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
                <DocumentSubTree
                    visible={visibleSubTree}
                    onUnvisible={() => setVisibleSubTree(false)}
                    onBackpress={() => {
                        setVisibleSubTree(false);
                        setTimeout(() => {
                            handleShowModal('tree');
                        }, 300);
                    }}
                />
                <DocumentTreeCompany
                    onBackPress={() => handleHideModal('tree')}
                    visible={visibleTree}
                    handleUnVisible={() => handleHideModal('tree')}
                    onShowSubTree={() => {
                        handleHideModal('tree');
                        setTimeout(() => {
                            setVisibleSubTree(true);
                        }, 300);
                    }}
                />
                <DocumentCompanyStatus
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

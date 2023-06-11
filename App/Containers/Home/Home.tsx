import React, {useEffect, useState} from 'react';
import {
    View,
    ScrollView,
    Text,
    FlatList,
    RefreshControl,
    Platform,
} from 'react-native';
import {PieChartComponent} from 'Components/PieChartComponent/PieChartComponent';
import {styles} from './HomeStyles';
import {colors} from 'Configs/UI/Colors';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';
import {useGetAmountOfText} from 'Hooks/useGetAmountOfText';
import WorkCard from 'Components/WorkCard';
import {ListMyDocumentInterface, MyDocumentInterface} from 'Store/Models';
import images from 'Configs/Constants/images';
import {ItemMyDocument} from 'Components/Commons/Item/documentItem';
import {pageSize} from 'Configs/Constants/PageSize';
import axios from 'axios';
import {API_PATHS} from 'Services/Api';
import sizes from 'Configs/UI/Sizes';
import {
    GET_DATA_SEARCH_DOCUMENT_SUCCESS,
    SET_FLAG_STATUS,
    SET_IS_LOADING,
    SET_NAME_STATUS_DOCUMENT,
    SET_STATUS_DOCUMENT,
    SET_STATUS_ID,
    SET_TOTAL_ELEMENT,
} from 'Store/Reducers/myDocumentSlice';
import Header from 'Components/Commons/Header/Header';
import {SET_STATUS_RENDER} from 'Store/Reducers/documentTypeSlice';
import {
    DocumentNodeStatus,
    DocumentStatus,
} from 'Configs/Constants/StatusDocument';
import {constantsId} from 'Configs/Constants/ConstantsId';
import {actionsDocumentOfCompany} from 'Store/Actions/actionsDocumentOfCompany';

export default function Dashboard({navigation}: {navigation: any}) {
    const dispatch = useDispatch();
    const [statusView, setStatusView] = useState(true);
    const [dataDocument, setDataDocument] = useState<any>([]);
    const [page, setPage] = useState<number>(0);
    const {t} = useTranslation();
    const {name, listMyDocument, totalElement, token, isLoading} = useSelector(
        (state: RootState) => ({
            name: state.auth.user?.fullNameUser,
            listMyDocument: state.myDocument.listMyDocument,
            totalElement: state.myDocument.totalElement,
            token: state.auth.auth.token,
            isLoading: state.myDocument.isLoading,
        }),
    );

    function handleSelectStatus(
        status: string,
        statusName: string,
        flag: 'manage' | 'process',
    ) {
        dispatch(SET_STATUS_DOCUMENT(status));
        dispatch(SET_NAME_STATUS_DOCUMENT(statusName));
        dispatch(SET_FLAG_STATUS(flag));
        dispatch(SET_IS_LOADING(true));
        dispatch(GET_DATA_SEARCH_DOCUMENT_SUCCESS([]));
        navigation.navigate('searchMyDocument');
    }
    //get list document
    async function getListDocument() {
        dispatch(SET_IS_LOADING(true));
        await axios
            .post(
                API_PATHS.GET_ALL_DOCUMENT,
                {
                    page: page,
                    size: pageSize[10],
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            )
            .then(res => {
                const newData = res.data.data.data;
                setDataDocument([
                    ...dataDocument,
                    ...newData.map((state: MyDocumentInterface) => ({
                        documentId: state.documentId,
                        documentName: state.name,
                        documentCode: state.code,
                        documentTypeName: state.documentTypeName,
                        emailPartner: state.emailPartner,
                        contractingParties: state.namePartner,
                        createdDate: state.createdDate,
                        status: state.status,
                    })),
                ]);
                dispatch(SET_TOTAL_ELEMENT(res.data.data.totalElements));
                dispatch(SET_IS_LOADING(false));
            });
    }

    const {amountData} = useGetAmountOfText();
    // Load page
    const onHandleLoadPage = () => {
        if (page < Math.ceil(totalElement / 10) - 1) {
            setPage(page + 1);
            setDataDocument([]);
        }
    };
    const {getTreeDocumentWithRole} = actionsDocumentOfCompany();
    useEffect(() => {
        getListDocument();
        getTreeDocumentWithRole();
    }, [page]);

    return (
        <View style={styles.container}>
            <View style={{}}>
                <Header
                    navigation={navigation}
                    typeHeader={'normal'}
                    onPress={() => {
                        navigation.navigate('Notification');
                    }}
                />
            </View>

            <FlatList
                refreshControl={
                    Platform.OS == 'ios' ? (
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={() => {
                                onHandleLoadPage();
                            }}
                            tintColor={colors.color_primary1}
                        />
                    ) : (
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={() => {
                                onHandleLoadPage();
                            }}
                            colors={[colors.color_primary1]}
                        />
                    )
                }
                showsVerticalScrollIndicator={false}
                style={styles.flatList}
                ListHeaderComponent={
                    <>
                        <View style={styles.viewWelcome}>
                            <View style={styles.viewTextWc}>
                                <Text style={styles.textWelcome}>
                                    {t('dash-board.welcome')},{' '}
                                </Text>
                                <Text
                                    numberOfLines={1}
                                    ellipsizeMode={'tail'}
                                    style={styles.textName}>
                                    {name}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.guild}>
                            <Text style={styles.textCongViec}>
                                {t('dash-board.your-work')}
                            </Text>

                            <ScrollView
                                horizontal={true}
                                style={styles.viewMyWork}
                                showsHorizontalScrollIndicator={false}>
                                {/* Đang xử lý */}
                                <WorkCard
                                    text={t('dash-board.process-document')}
                                    //@ts-ignore
                                    number={amountData.processingDocumentNumber}
                                    imageLink={''}
                                    bgColor={colors.bgThuongThao}
                                    images={images.maskNegotiation}
                                    onPress={() => {
                                        handleSelectStatus(
                                            DocumentNodeStatus.PROCESSED,
                                            t('status.processed'),
                                            'process',
                                        );
                                        dispatch(SET_STATUS_ID(constantsId.id_9_STATUS_PROCESSED));
                                    }}
                                />
                                {/* Tài liệu hết hạn */}
                                <WorkCard
                                    text={t('dash-board.expire-document')}
                                    //@ts-ignore
                                    number={amountData.expireDocumentNumber}
                                    imageLink={''}
                                    bgColor={colors.color_alert_warning}
                                    images={images.maskExpire}
                                />
                                {/* Tôi quản lý */}
                                <WorkCard
                                    text={t('dash-board.manage-document')}
                                    //@ts-ignore
                                    number={amountData.manageDocumentNumber}
                                    imageLink={''}
                                    bgColor={colors.bgKyDuyet}
                                    images={images.maskExpire}
                                    onPress={() => {
                                        handleSelectStatus(
                                            constantsId.id_MANAGE,
                                            t('status.manage'),
                                            'manage',
                                        );
                                        dispatch(SET_STATUS_ID(constantsId.id_MANAGE));
                                    }}
                                />
                                {/* Tài liệu hoàn thành */}
                                <WorkCard
                                    text={t('dash-board.done-document')}
                                    //@ts-ignore
                                    number={amountData.doneDocumentNumber}
                                    imageLink={''}
                                    bgColor={colors.color_alert_success}
                                    images={images.maskNegotiation}
                                    onPress={() => {
                                        handleSelectStatus(
                                            DocumentStatus.DONE,
                                            t('status.done'),
                                            'manage',
                                        );
                                        dispatch(SET_STATUS_ID(constantsId.id_5_STATUS_DONE));
                                    }}
                                />
                            </ScrollView>
                            <Text style={styles.textCongViec}>
                                {t('dash-board.company-doc')}
                            </Text>
                            <View style={styles.viewthongke}>
                                <View style={styles.boxthongkeview}>
                                    <View style={styles.viewpie}>
                                        <PieChartComponent />
                                    </View>
                                    <View style={styles.viewdotnhap}>
                                        <View style={styles.nhap}>
                                            <View style={styles.line}>
                                                <View style={styles.dotyellow} />
                                                <Text style={styles.khoangcach}>
                                                    {t('dash-board.draft')}
                                                </Text>
                                            </View>
                                            <View style={styles.line}>
                                                <View style={styles.dotgreen} />
                                                <Text style={styles.khoangcach}>
                                                    {t('dash-board.complete')}
                                                </Text>
                                            </View>
                                        </View>
                                        <View>
                                            <View style={styles.line}>
                                                <View style={styles.dotblue} />
                                                <Text style={styles.khoangcach}>
                                                    {t('dash-board.signer')}
                                                </Text>
                                            </View>
                                            <View style={styles.line}>
                                                <View style={styles.dotred} />
                                                <Text style={styles.khoangcach}>
                                                    {t('dash-board.denied')}
                                                </Text>
                                            </View>
                                        </View>

                                        <View>
                                            <View style={styles.line}>
                                                <View style={styles.dotorange} />
                                                <Text style={styles.khoangcach}>
                                                    {t('dash-board.negotiation')}
                                                </Text>
                                            </View>
                                            <View style={styles.line}>
                                                <View style={styles.dotpurple} />
                                                <Text style={styles.khoangcach}>
                                                    {t('dash-board.cancelled')}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.viewList, {paddingBottom: sizes._16sdp}]}>
                                <Text style={styles.textthongke}>
                                    {t('dash-board.contract-list')}
                                </Text>
                            </View>
                        </View>
                    </>
                }
                ItemSeparatorComponent={() => (
                    // Kẻ chân giữa 2 item
                    <View style={styles.mSeparator}>
                        <View style={styles.cSeparator}>
                            <View style={styles.separator} />
                        </View>
                    </View>
                )}
                removeClippedSubviews={true}
                // contentContainerStyle={{paddingBottom: sizes._85sdp}}
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
                        />
                    );
                }}
                keyExtractor={item => `${item.documentId}`}
                data={dataDocument}
                extraData={dataDocument}
                ListFooterComponent={<View style={{height: sizes._80sdp}}></View>}
            />
        </View>
    );
}

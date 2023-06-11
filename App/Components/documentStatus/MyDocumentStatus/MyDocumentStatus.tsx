import {ScrollView, Modal} from 'react-native';
import {Appbar, List} from 'react-native-paper';
import icons from 'Configs/Constants/icons';
import {useTranslation} from 'react-i18next';
import {colors} from 'Configs/UI/Colors';
import {styles} from 'Components/documentStatus/MyDocumentStatus/styles';
import sizes from 'Configs/UI/Sizes';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';
import {
    DocumentNodeStatus,
    DocumentStatus,
} from 'Configs/Constants/StatusDocument';
import {
    SET_FLAG_STATUS,
    SET_IS_LOADING,
    SET_NAME_STATUS_DOCUMENT,
    SET_STATUS_DOCUMENT,
    SET_STATUS_ID,
} from 'Store/Reducers/myDocumentSlice';
import {constantsId} from 'Configs/Constants/ConstantsId';
import {SET_STATUS_RENDER} from 'Store/Reducers/documentTypeSlice';

export const MyDocumentStatus = ({
    visible,
    hideModal,
}: {
  visible: boolean;
  hideModal: () => void;
}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {statusId, statusRender} = useSelector((state: RootState) => ({
        statusId: state.myDocument.statusId,
        statusRender: state.documentType.statusRender,
    }));

    function handleSetId(e: any) {
        const id = e._dispatchInstances.memoizedProps.nativeID;
        dispatch(SET_STATUS_ID(id));
    }

    function handleSelectStatus(
        status: string,
        statusName: string,
        flag: 'manage' | 'process',
    ) {
        dispatch(SET_STATUS_DOCUMENT(status));
        dispatch(SET_NAME_STATUS_DOCUMENT(statusName));
        dispatch(SET_FLAG_STATUS(flag));
        hideModal();
        dispatch(SET_STATUS_RENDER(!statusRender));
    }

    return (
        <Modal
            style={styles.mContainer}
            visible={visible}>
            <Appbar.Header
                style={{
                    height: sizes._40sdp,
                    backgroundColor: colors.color_white,
                }}>
                <Appbar.BackAction
                    onPress={() => {
                        hideModal();
                    }}
                />
                <Appbar.Content title={t('status.document_status')} />
            </Appbar.Header>

            <ScrollView
                style={{
                    paddingTop: sizes._12sdp,
                    backgroundColor: colors.color_white,
                }}
                showsVerticalScrollIndicator={false}>
                {/* Tôi quản lý */}
                <List.Accordion
                    title={t('status.manage')}
                    id={constantsId.id_1_STATUS_DRAFT}
                    left={() => (
                        <List.Icon
                            icon={icons.ic_user}
                            color={
                                statusId == constantsId.id_MANAGE
                                    ? colors.color_white
                                    : colors.color_dark_grey
                            }
                        />
                    )}
                    right={() => (
                        <List.Icon
                            icon={icons.ic_minus}
                            color={
                                statusId == constantsId.id_MANAGE
                                    ? colors.color_white
                                    : colors.color_dark_grey
                            }
                        />
                    )}
                    onPress={() => {
                        handleSelectStatus(
                            constantsId.id_MANAGE,
                            t('status.manage'),
                            'manage',
                        );
                        dispatch(SET_STATUS_ID(constantsId.id_MANAGE));
                    }}
                    expanded={true}
                    style={[
                        styles.mAccordion,
                        {
                            backgroundColor:
                statusId == constantsId.id_MANAGE
                    ? colors.color_primary1
                    : colors.color_grey5,
                        },
                    ]}
                    titleStyle={[
                        styles.mTextAccordion,
                        {
                            color:
                statusId == constantsId.id_MANAGE
                    ? colors.color_white
                    : colors.color_dark_grey,
                        },
                    ]}>
                    {/* Nháp */}
                    <List.Item
                        title={t('status.draft')}
                        titleStyle={[
                            styles.mTextItem,
                            {
                                color:
                  statusId === constantsId.id_1_STATUS_DRAFT
                      ? colors.color_white
                      : colors.color_grey1,
                            },
                        ]}
                        left={() => (
                            <List.Icon
                                icon={icons.ic_receipt}
                                color={
                                    statusId === constantsId.id_1_STATUS_DRAFT
                                        ? colors.color_white
                                        : colors.color_grey1
                                }
                                style={styles.mIcon}
                            />
                        )}
                        style={[
                            styles.mItem,
                            {
                                backgroundColor:
                  statusId === constantsId.id_1_STATUS_DRAFT
                      ? colors.color_primary1
                      : colors.color_white,
                                marginTop:
                  statusId === constantsId.id_1_STATUS_DRAFT ? sizes._8sdp : 0,
                            },
                        ]}
                        id={constantsId.id_1_STATUS_DRAFT}
                        onPress={e => {
                            handleSelectStatus(
                                DocumentStatus.DRAFT,
                                t('status.draft'),
                                'manage',
                            );
                            handleSetId(e);
                        }}
                    />
                    {/* Đang thương thảo */}
                    <List.Item
                        title={t('status.negotiating')}
                        titleStyle={[
                            styles.mTextItem,
                            {
                                color:
                  statusId === constantsId.id_2_STATUS_NEGOTIATING
                      ? colors.color_white
                      : colors.color_grey1,
                            },
                        ]}
                        left={() => (
                            <List.Icon
                                icon={icons.ic_messagesx1}
                                color={
                                    statusId === constantsId.id_2_STATUS_NEGOTIATING
                                        ? colors.color_white
                                        : colors.color_grey1
                                }
                                style={styles.mIcon}
                            />
                        )}
                        style={[
                            styles.mItem,
                            {
                                backgroundColor:
                  statusId === constantsId.id_2_STATUS_NEGOTIATING
                      ? colors.color_primary1
                      : colors.color_white,
                                marginTop:
                  statusId === constantsId.id_2_STATUS_NEGOTIATING
                      ? sizes._8sdp
                      : 0,
                            },
                        ]}
                        id={constantsId.id_2_STATUS_NEGOTIATING}
                        onPress={e => {
                            handleSelectStatus(
                                DocumentStatus.NEGOTIATING,
                                t('status.negotiating'),
                                'manage',
                            );
                            handleSetId(e);
                        }}
                    />
                    {/* Đã thương thảo */}
                    <List.Item
                        title={t('status.negotiated')}
                        titleStyle={[
                            styles.mTextItem,
                            {
                                color:
                  statusId === constantsId.id_3_STATUS_NEGOTIATED
                      ? colors.color_white
                      : colors.color_grey1,
                            },
                        ]}
                        left={() => (
                            <List.Icon
                                icon={icons.ic_message_tick}
                                color={
                                    statusId === constantsId.id_3_STATUS_NEGOTIATED
                                        ? colors.color_white
                                        : colors.color_grey1
                                }
                                style={styles.mIcon}
                            />
                        )}
                        style={[
                            styles.mItem,
                            {
                                backgroundColor:
                  statusId === constantsId.id_3_STATUS_NEGOTIATED
                      ? colors.color_primary1
                      : colors.color_white,
                                marginTop:
                  statusId === constantsId.id_3_STATUS_NEGOTIATED
                      ? sizes._8sdp
                      : 0,
                            },
                        ]}
                        id={constantsId.id_3_STATUS_NEGOTIATED}
                        onPress={e => {
                            handleSelectStatus(
                                DocumentStatus.NEGOTIATED,
                                t('status.negotiated'),
                                'manage',
                            );
                            handleSetId(e);
                        }}
                    />
                    {/* Đang trình ký */}
                    <List.Item
                        title={t('status.signing')}
                        titleStyle={[
                            styles.mTextItem,
                            {
                                color:
                  statusId === constantsId.id_4_STATUS_SIGNING
                      ? colors.color_white
                      : colors.color_grey1,
                            },
                        ]}
                        left={() => (
                            <List.Icon
                                icon={icons.ic_pen_tool}
                                color={
                                    statusId === constantsId.id_4_STATUS_SIGNING
                                        ? colors.color_white
                                        : colors.color_grey1
                                }
                                style={styles.mIcon}
                            />
                        )}
                        style={[
                            styles.mItem,
                            {
                                backgroundColor:
                  statusId === constantsId.id_4_STATUS_SIGNING
                      ? colors.color_primary1
                      : colors.color_white,
                                marginTop:
                  statusId === constantsId.id_4_STATUS_SIGNING
                      ? sizes._8sdp
                      : 0,
                            },
                        ]}
                        id={constantsId.id_4_STATUS_SIGNING}
                        onPress={e => {
                            handleSelectStatus(
                                DocumentStatus.SIGNING,
                                t('status.signing'),
                                'manage',
                            );
                            handleSetId(e);
                        }}
                    />
                    {/* Đã hoàn thành */}
                    <List.Item
                        title={t('status.done')}
                        titleStyle={[
                            styles.mTextItem,
                            {
                                color:
                  statusId === constantsId.id_5_STATUS_DONE
                      ? colors.color_white
                      : colors.color_grey1,
                            },
                        ]}
                        left={() => (
                            <List.Icon
                                icon={icons.ic_star}
                                color={
                                    statusId === constantsId.id_5_STATUS_DONE
                                        ? colors.color_white
                                        : colors.color_grey1
                                }
                                style={styles.mIcon}
                            />
                        )}
                        style={[
                            styles.mItem,
                            {
                                backgroundColor:
                  statusId === constantsId.id_5_STATUS_DONE
                      ? colors.color_primary1
                      : colors.color_white,
                                marginTop:
                  statusId === constantsId.id_5_STATUS_DONE ? sizes._8sdp : 0,
                            },
                        ]}
                        id={constantsId.id_5_STATUS_DONE}
                        onPress={e => {
                            handleSelectStatus(
                                DocumentStatus.DONE,
                                t('status.done'),
                                'manage',
                            );
                            handleSetId(e);
                        }}
                    />
                    {/* Từ chối */}
                    <List.Item
                        title={t('status.rejected')}
                        titleStyle={[
                            styles.mTextItem,
                            {
                                color:
                  statusId === constantsId.id_6_STATUS_REJECTED
                      ? colors.color_white
                      : colors.color_grey1,
                            },
                        ]}
                        left={() => (
                            <List.Icon
                                icon={icons.ic_clipboard_close}
                                color={
                                    statusId === constantsId.id_6_STATUS_REJECTED
                                        ? colors.color_white
                                        : colors.color_grey1
                                }
                                style={styles.mIcon}
                            />
                        )}
                        style={[
                            styles.mItem,
                            {
                                backgroundColor:
                  statusId === constantsId.id_6_STATUS_REJECTED
                      ? colors.color_primary1
                      : colors.color_white,
                                marginTop:
                  statusId === constantsId.id_6_STATUS_REJECTED
                      ? sizes._8sdp
                      : 0,
                            },
                        ]}
                        id={constantsId.id_6_STATUS_REJECTED}
                        onPress={e => {
                            handleSelectStatus(
                                DocumentStatus.REJECTED,
                                t('status.rejected'),
                                'manage',
                            );
                            handleSetId(e);
                        }}
                    />
                    {/* Huỷ bỏ */}
                    <List.Item
                        title={t('status.canceled')}
                        titleStyle={[
                            styles.mTextItem,
                            {
                                color:
                  statusId === constantsId.id_7_STATUS_CANCELED
                      ? colors.color_white
                      : colors.color_grey1,
                            },
                        ]}
                        left={() => (
                            <List.Icon
                                icon={icons.ic_slash}
                                color={
                                    statusId === constantsId.id_7_STATUS_CANCELED
                                        ? colors.color_white
                                        : colors.color_grey1
                                }
                                style={styles.mIcon}
                            />
                        )}
                        style={[
                            styles.mItem,
                            {
                                backgroundColor:
                  statusId === constantsId.id_7_STATUS_CANCELED
                      ? colors.color_primary1
                      : colors.color_white,
                                marginTop:
                  statusId === constantsId.id_7_STATUS_CANCELED
                      ? sizes._8sdp
                      : 0,
                                marginBottom:
                  statusId === constantsId.id_7_STATUS_CANCELED
                      ? sizes._8sdp
                      : 0,
                            },
                        ]}
                        id={constantsId.id_7_STATUS_CANCELED}
                        onPress={e => {
                            handleSelectStatus(
                                DocumentStatus.CANCELED,
                                t('status.canceled'),
                                'manage',
                            );
                            handleSetId(e);
                        }}
                    />
                </List.Accordion>

                {/* Tôi xử lý */}
                <List.Accordion
                    title={t('status.handle')}
                    id={constantsId.id_1_STATUS_DRAFT}
                    left={() => (
                        <List.Icon
                            icon={icons.ic_chart}
                            color={
                                statusId == constantsId.id_PROCESS
                                    ? colors.color_white
                                    : colors.color_dark_grey
                            }
                        />
                    )}
                    right={() => (
                        <List.Icon
                            icon={icons.ic_minus}
                            color={
                                statusId == constantsId.id_PROCESS
                                    ? colors.color_white
                                    : colors.color_dark_grey
                            }
                        />
                    )}
                    onPress={e => {
                        handleSelectStatus(
                            constantsId.id_PROCESS,
                            t('status.handle'),
                            'process',
                        );
                        dispatch(SET_STATUS_ID(constantsId.id_PROCESS));
                    }}
                    expanded={true}
                    style={[
                        styles.mAccordion,
                        {
                            backgroundColor:
                statusId == constantsId.id_PROCESS
                    ? colors.color_primary1
                    : colors.color_grey5,
                        },
                    ]}
                    titleStyle={[
                        styles.mTextAccordion,
                        {
                            color:
                statusId == constantsId.id_PROCESS
                    ? colors.color_white
                    : colors.color_dark_grey,
                        },
                    ]}>
                    {/* Chờ xử lý */}
                    <List.Item
                        title={t('status.waiting')}
                        titleStyle={[
                            styles.mTextItem,
                            {
                                color:
                  statusId === constantsId.id_8_STATUS_PROCESSING
                      ? colors.color_white
                      : colors.color_grey1,
                            },
                        ]}
                        left={() => (
                            <List.Icon
                                icon={icons.ic_receipt}
                                color={
                                    statusId === constantsId.id_8_STATUS_PROCESSING
                                        ? colors.color_white
                                        : colors.color_grey1
                                }
                                style={styles.mIcon}
                            />
                        )}
                        style={[
                            styles.mItem,
                            {
                                backgroundColor:
                  statusId === constantsId.id_8_STATUS_PROCESSING
                      ? colors.color_primary1
                      : colors.color_white,
                                marginTop:
                  statusId === constantsId.id_8_STATUS_PROCESSING
                      ? sizes._8sdp
                      : 0,
                            },
                        ]}
                        id={constantsId.id_8_STATUS_PROCESSING}
                        onPress={e => {
                            handleSelectStatus(
                                DocumentNodeStatus.PROCESSING,
                                t('status.waiting'),
                                'process',
                            );
                            handleSetId(e);
                        }}
                    />
                    {/* Đang xử lý */}
                    <List.Item
                        title={t('status.processed')}
                        titleStyle={[
                            styles.mTextItem,
                            {
                                color:
                  statusId === constantsId.id_9_STATUS_PROCESSED
                      ? colors.color_white
                      : colors.color_grey1,
                            },
                        ]}
                        left={() => (
                            <List.Icon
                                icon={icons.ic_activity}
                                color={
                                    statusId === constantsId.id_9_STATUS_PROCESSED
                                        ? colors.color_white
                                        : colors.color_grey1
                                }
                                style={styles.mIcon}
                            />
                        )}
                        style={[
                            styles.mItem,
                            {
                                backgroundColor:
                  statusId === constantsId.id_9_STATUS_PROCESSED
                      ? colors.color_primary1
                      : colors.color_white,
                                marginTop:
                  statusId === constantsId.id_9_STATUS_PROCESSED
                      ? sizes._8sdp
                      : 0,
                            },
                        ]}
                        id={constantsId.id_9_STATUS_PROCESSED}
                        onPress={e => {
                            handleSelectStatus(
                                DocumentNodeStatus.PROCESSED,
                                t('status.processed'),
                                'process',
                            );
                            handleSetId(e);
                        }}
                    />
                    {/* Đã xử lý */}
                    <List.Item
                        title={t('status.done')}
                        titleStyle={[
                            styles.mTextItem,
                            {
                                color:
                  statusId === constantsId.id_10_STATUS_DONE__PROCESSING
                      ? colors.color_white
                      : colors.color_grey1,
                            },
                        ]}
                        left={() => (
                            <List.Icon
                                icon={icons.ic_star}
                                color={
                                    statusId === constantsId.id_10_STATUS_DONE__PROCESSING
                                        ? colors.color_white
                                        : colors.color_grey1
                                }
                                style={styles.mIcon}
                            />
                        )}
                        style={[
                            styles.mItem,
                            {
                                backgroundColor:
                  statusId === constantsId.id_10_STATUS_DONE__PROCESSING
                      ? colors.color_primary1
                      : colors.color_white,
                                marginTop:
                  statusId === constantsId.id_10_STATUS_DONE__PROCESSING
                      ? sizes._8sdp
                      : 0,
                            },
                        ]}
                        id={constantsId.id_10_STATUS_DONE__PROCESSING}
                        onPress={e => {
                            handleSelectStatus(
                                DocumentNodeStatus.DONE,
                                t('status.done'),
                                'process',
                            );
                            handleSetId(e);
                        }}
                    />
                    {/* Từ chối */}
                    <List.Item
                        title={t('status.rejected')}
                        titleStyle={[
                            styles.mTextItem,
                            {
                                color:
                  statusId === constantsId.id_11_STATUS_REJECTED_PROCESSING
                      ? colors.color_white
                      : colors.color_grey1,
                            },
                        ]}
                        left={() => (
                            <List.Icon
                                icon={icons.ic_clipboard_close}
                                color={
                                    statusId === constantsId.id_11_STATUS_REJECTED_PROCESSING
                                        ? colors.color_white
                                        : colors.color_grey1
                                }
                                style={styles.mIcon}
                            />
                        )}
                        style={[
                            styles.mItem,
                            {
                                backgroundColor:
                  statusId === constantsId.id_11_STATUS_REJECTED_PROCESSING
                      ? colors.color_primary1
                      : colors.color_white,
                                marginTop:
                  statusId === constantsId.id_11_STATUS_REJECTED_PROCESSING
                      ? sizes._8sdp
                      : 0,
                            },
                        ]}
                        id={constantsId.id_11_STATUS_REJECTED_PROCESSING}
                        onPress={e => {
                            handleSelectStatus(
                                DocumentNodeStatus.REJECTED,
                                t('status.rejected'),
                                'process',
                            );
                            handleSetId(e);
                        }}
                    />
                    {/* Huỷ bỏ */}
                    <List.Item
                        title={t('status.canceled')}
                        titleStyle={[
                            styles.mTextItem,
                            {
                                color:
                  statusId === constantsId.id_12_STATUS_CANCELED_PROCESSING
                      ? colors.color_white
                      : colors.color_grey1,
                            },
                        ]}
                        left={() => (
                            <List.Icon
                                icon={icons.ic_slash}
                                color={
                                    statusId === constantsId.id_12_STATUS_CANCELED_PROCESSING
                                        ? colors.color_white
                                        : colors.color_grey1
                                }
                                style={styles.mIcon}
                            />
                        )}
                        style={[
                            styles.mItem,
                            {
                                backgroundColor:
                  statusId === constantsId.id_12_STATUS_CANCELED_PROCESSING
                      ? colors.color_primary1
                      : colors.color_white,
                                marginTop:
                  statusId === constantsId.id_12_STATUS_CANCELED_PROCESSING
                      ? sizes._8sdp
                      : 0,
                                marginBottom:
                  statusId === constantsId.id_12_STATUS_CANCELED_PROCESSING
                      ? sizes._8sdp
                      : 0,
                            },
                        ]}
                        id={constantsId.id_12_STATUS_CANCELED_PROCESSING}
                        onPress={e => {
                            handleSelectStatus(
                                DocumentNodeStatus.CANCELED,
                                t('status.canceled'),
                                'process',
                            );
                            handleSetId(e);
                        }}
                    />
                </List.Accordion>
            </ScrollView>
        </Modal>
    );
};

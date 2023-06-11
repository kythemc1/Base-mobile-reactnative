import {ScrollView, Modal} from 'react-native';
import {Appbar, List} from 'react-native-paper';
import icons from 'Configs/Constants/icons';
import {useTranslation} from 'react-i18next';
import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';
import {DocumentStatus} from 'Configs/Constants/StatusDocument';
import {SET_STATUS_ID} from 'Store/Reducers/myDocumentSlice';
import {constantsId} from 'Configs/Constants/ConstantsId';
import {styles} from './styles';
import {SET_NAME_STATUS, SET_STATUS} from 'Store/Reducers/documentCompanySlice';

export const DocumentCompanyStatus = ({
    visible,
    hideModal,
}: {
  visible: boolean;
  hideModal: () => void;
}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {statusId} = useSelector((state: RootState) => ({
        statusId: state.myDocument.statusId,
    }));

    function handleSetId(e: any) {
        const id = e._dispatchInstances.memoizedProps.nativeID;
        dispatch(SET_STATUS_ID(id));
    }

    function handleSelectStatus(status: string, statusName: string) {
        dispatch(SET_STATUS([status]));
        dispatch(SET_NAME_STATUS(statusName));
        hideModal();
    }

    return (
        <Modal style={styles.mContainer} visible={visible}>
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
                        handleSelectStatus(DocumentStatus.DRAFT, t('status.draft'));
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
                statusId === constantsId.id_4_STATUS_SIGNING ? sizes._8sdp : 0,
                        },
                    ]}
                    id={constantsId.id_4_STATUS_SIGNING}
                    onPress={e => {
                        handleSelectStatus(DocumentStatus.SIGNING, t('status.signing'));
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
                        handleSelectStatus(DocumentStatus.DONE, t('status.done'));
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
                statusId === constantsId.id_6_STATUS_REJECTED ? sizes._8sdp : 0,
                        },
                    ]}
                    id={constantsId.id_6_STATUS_REJECTED}
                    onPress={e => {
                        handleSelectStatus(DocumentStatus.REJECTED, t('status.rejected'));
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
                statusId === constantsId.id_7_STATUS_CANCELED ? sizes._8sdp : 0,
                            marginBottom:
                statusId === constantsId.id_7_STATUS_CANCELED ? sizes._8sdp : 0,
                        },
                    ]}
                    id={constantsId.id_7_STATUS_CANCELED}
                    onPress={e => {
                        handleSelectStatus(DocumentStatus.CANCELED, t('status.canceled'));
                        handleSetId(e);
                    }}
                />
            </ScrollView>
        </Modal>
    );
};

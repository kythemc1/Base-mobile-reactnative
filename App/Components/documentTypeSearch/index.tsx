import Header from 'Components/Commons/Header/Header';
import {useDocumentType} from 'Hooks/useDocumentType';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';
import {style} from 'Components/documentTypeSearch/style';
import {DocumentTypeInterface} from 'Store/Models';
import {useDispatch, useSelector} from 'react-redux';
import {
    SET_DOCUMENT_TYPE_ID,
    SET_DOCUMENT_TYPE_NAME,
} from 'Store/Reducers/documentTypeSlice';
import {useTranslation} from 'react-i18next';
import {RootState} from 'Store/reduxProvider';
import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';
import {Appbar} from 'react-native-paper';
import {SET_FLAG_STATUS} from 'Store/Reducers/myDocumentSlice';

interface DocumentType {
  visible: boolean;
  hideModal?: any;
}

export const DocumentTypeSearch = (props: DocumentType) => {
    const dispatch = useDispatch();
    const {dataDocumentType} = useDocumentType();
    const {t} = useTranslation();
    const {documentTypeID, flagStatus} = useSelector((state: RootState) => ({
        documentTypeID: state.documentType.documentTypeId,
        flagStatus: state.myDocument.flagStatus,
    }));

    function handleSelectType(typeId:[string], typeName:string) {
        if (flagStatus == 'manage') {
            dispatch(SET_FLAG_STATUS('manage'));
        } else {
            dispatch(SET_FLAG_STATUS('process'));
        }
        dispatch(SET_DOCUMENT_TYPE_ID(typeId));
        dispatch(SET_DOCUMENT_TYPE_NAME(typeName));
    }
    return (
        <Modal
            style={style.mContainer}
            visible={props.visible}
            animationType={'fade'}>
            <Appbar.Header
                style={{
                    height: sizes._40sdp,
                    backgroundColor: colors.color_white,
                }}>
                <Appbar.Content title={t('header.document_type')} />
            </Appbar.Header>
            <View style={style.mBody}>
                <FlatList
                    data={dataDocumentType}
                    ItemSeparatorComponent={() => {
                        return (
                        // Kẻ chân giữa 2 item
                            <View style={style.mSeparator}>
                                <View style={style.cSeparator}>
                                    <View style={style.separator} />
                                </View>
                            </View>
                        );
                    }}
                    renderItem={({item}: {item: DocumentTypeInterface}) => {
                        return (
                            <View>
                                {
                                    // @ts-ignore
                                    documentTypeID == item.documentTypeId ? (
                                        <TouchableOpacity
                                            style={[
                                                style.mItemSelectActive,
                                                {backgroundColor: colors.color_primary1},
                                            ]}
                                            onPress={() => {
                                                props.hideModal();
                                                handleSelectType([item.documentTypeId],item.name);
                                            }}>
                                            <Text
                                                ellipsizeMode={'tail'}
                                                numberOfLines={1}
                                                style={[style.mTextItem, {color: colors.color_white}]}>
                                                {item.name}
                                            </Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity
                                            style={style.mItemSelect}
                                            onPress={() => {
                                                props.hideModal();
                                                handleSelectType([item.documentTypeId],item.name);
                                            }}>
                                            <Text
                                                ellipsizeMode={'tail'}
                                                numberOfLines={1}
                                                style={style.mTextItem}>
                                                {item.name}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        );
                    }}
                    keyExtractor={item => `${item.documentTypeId}`}
                    removeClippedSubviews={true}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </Modal>
    );
};

import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {styles} from 'Components/Commons/Search/Search.styles';
import {colors} from 'Configs/UI/Colors';
import icons from 'Configs/Constants/icons';
import sizes from 'Configs/UI/Sizes';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {
    GET_DATA_SEARCH_DOCUMENT_SUCCESS,
    SET_END_DATE,
    SET_NAME_DATE,
    SET_START_DATE,
    SET_STATUS_DOCUMENT,
    SET_STATUS_ID,
} from 'Store/Reducers/myDocumentSlice';
import {RootState} from 'Store/reduxProvider';
import {
    SET_DOCUMENT_TYPE_ID,
    SET_DOCUMENT_TYPE_NAME,
} from 'Store/Reducers/documentTypeSlice';
import {CLEAR} from 'Store/Reducers/documentCompanySlice';

interface searchInterface {
  defaultValue?: string | null;
  onChangeText?: (text: string) => void;
  typeButtonTab?: 'myDocument' | 'documentCompany';
  navigation?: any;
  handleVisibleType?: any;
  handleVisibleStatus?: any;
  handleVisibleDate?: any;
  handleVisibleTree?: any;
}

export const Search = (props: searchInterface) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {
        nameStatusDocument,
        idStatus,
        documentTypeName,
        nameDate,
        nameTree,
        nameSubTree,
        treeData,
        nameStatus,
    } = useSelector((state: RootState) => ({
        nameStatusDocument: state.myDocument.nameStatusDocument,
        idStatus: state.myDocument.statusId,
        documentTypeName: state.documentType.documentTypeName,
        nameDate: state.myDocument.nameDate,
        nameTree: state.documentCompany.nameTree,
        nameSubTree: state.documentCompany.nameSubTree,
        treeData: state.documentCompany.dataTreeDocumentWithRole,
        nameStatus: state.documentCompany.nameStatus,
    }));

    function compileString() {
        let string = treeData.name + '/';
        if (!nameTree) return string;

        string += nameTree + '/';

        if (!nameSubTree) return string;

        string += nameSubTree;

        return string;
    }

    return (
        <>
            <ScrollView
                horizontal={true}
                style={{marginHorizontal: sizes._16sdp}}
                removeClippedSubviews={true}
                showsHorizontalScrollIndicator={false}>
                {props.typeButtonTab == 'myDocument' ? (
                    <>
                        <View style={styles.mButtonView}>
                            {idStatus === '' ? (
                                <ButtonTab
                                    title={t('name_button_tab.status')}
                                    icon={icons.ic_messages}
                                    onPress={() => {
                                        props.handleVisibleStatus();
                                    }}
                                    type={'normal'}
                                />
                            ) : (
                                <ButtonTab
                                    title={nameStatusDocument}
                                    onPress={() => {
                                        props.handleVisibleStatus();
                                        dispatch(GET_DATA_SEARCH_DOCUMENT_SUCCESS([]));
                                    }}
                                    onPressClear={() => {
                                        dispatch(SET_STATUS_ID(''));
                                        dispatch(GET_DATA_SEARCH_DOCUMENT_SUCCESS([]));
                                        dispatch(SET_STATUS_DOCUMENT(''));
                                    }}
                                    type={'item'}
                                />
                            )}
                        </View>
                        <View style={styles.mButtonView}>
                            {documentTypeName == '' ? (
                                <ButtonTab
                                    title={t('name_button_tab.document_type')}
                                    icon={icons.ic_list_contract}
                                    type={'normal'}
                                    onPress={() => {
                                        props.handleVisibleType();
                                    }}
                                />
                            ) : (
                                <ButtonTab
                                    title={documentTypeName}
                                    onPress={() => {
                                        props.handleVisibleType();
                                        dispatch(GET_DATA_SEARCH_DOCUMENT_SUCCESS([]));
                                    }}
                                    onPressClear={() => {
                                        dispatch(SET_DOCUMENT_TYPE_NAME(''));
                                        dispatch(SET_DOCUMENT_TYPE_ID([]));
                                        dispatch(GET_DATA_SEARCH_DOCUMENT_SUCCESS([]));
                                    }}
                                    type={'item'}
                                />
                            )}
                        </View>
                        <View style={styles.mButtonView}>
                            {nameDate == '' ? (
                                <ButtonTab
                                    title={t('name_button_tab.date')}
                                    icon={icons.ic_clock}
                                    type={'normal'}
                                    onPress={() => {
                                        props.handleVisibleDate();
                                    }}
                                />
                            ) : (
                                <ButtonTab
                                    title={nameDate}
                                    onPress={() => {
                                        props.handleVisibleDate();
                                        dispatch(GET_DATA_SEARCH_DOCUMENT_SUCCESS([]));
                                    }}
                                    onPressClear={() => {
                                        dispatch(GET_DATA_SEARCH_DOCUMENT_SUCCESS([]));
                                        dispatch(SET_NAME_DATE(''));
                                        dispatch(SET_START_DATE(''));
                                        dispatch(SET_END_DATE(''));
                                    }}
                                    type={'item'}
                                />
                            )}
                        </View>
                    </>
                ) : (
                    <>
                        <View style={styles.mButtonView}>
                            {nameTree == '' ? (
                                <ButtonTab
                                    title={t('name_button_tab.department_unit_manager')}
                                    icon={icons.ic_briefcase}
                                    type={'normal'}
                                    onPress={() => props.handleVisibleTree()}
                                />
                            ) : (
                                <ButtonTab
                                    type="item"
                                    title={compileString()}
                                    onPress={() => props.handleVisibleTree()}
                                    onPressClear={() => dispatch(CLEAR())}
                                />
                            )}
                        </View>
                        <View style={styles.mButtonView}>
                            {idStatus === '' ? (
                                <ButtonTab
                                    title={t('name_button_tab.status')}
                                    icon={icons.ic_messages}
                                    onPress={() => {
                                        props.handleVisibleStatus();
                                    }}
                                    type={'normal'}
                                />
                            ) : (
                                <ButtonTab
                                    title={nameStatus}
                                    onPress={() => {
                                        props.handleVisibleStatus();
                                    }}
                                    onPressClear={() => {
                                        dispatch(CLEAR());
                                        dispatch(SET_STATUS_ID(''));
                                    }}
                                    type={'item'}
                                />
                            )}
                        </View>
                        <View style={styles.mButtonView}>
                            {documentTypeName == '' ? (
                                <ButtonTab
                                    title={t('name_button_tab.document_type')}
                                    icon={icons.ic_list_contract}
                                    type={'normal'}
                                    onPress={() => {
                                        props.handleVisibleType();
                                    }}
                                />
                            ) : (
                                <ButtonTab
                                    title={documentTypeName}
                                    onPress={() => {
                                        props.handleVisibleType();
                                    }}
                                    onPressClear={() => {
                                        dispatch(SET_DOCUMENT_TYPE_NAME(''));
                                        dispatch(SET_DOCUMENT_TYPE_ID([]));
                                    }}
                                    type={'item'}
                                />
                            )}
                        </View>
                        <View style={styles.mButtonView}>
                            {nameDate == '' ? (
                                <ButtonTab
                                    title={t('name_button_tab.date')}
                                    icon={icons.ic_clock}
                                    type={'normal'}
                                    onPress={() => {
                                        props.handleVisibleDate();
                                    }}
                                />
                            ) : (
                                <ButtonTab
                                    title={nameDate}
                                    onPress={() => {
                                        props.handleVisibleDate();
                                    }}
                                    onPressClear={() => {
                                        dispatch(SET_NAME_DATE(''));
                                        dispatch(SET_START_DATE(''));
                                        dispatch(SET_END_DATE(''));
                                    }}
                                    type={'item'}
                                />
                            )}
                        </View>
                    </>
                )}
            </ScrollView>
        </>
    );
};
export const ButtonTab = ({
    title,
    icon,
    onPress,
    type,
    onPressClear,
}: {
  title: string;
  icon?: any;
  onPress?: () => void;
  onPressClear?: () => void;
  type?: 'normal' | 'item';
}) => {
    return type === 'normal' ? (
        <TouchableOpacity style={styles.mButton} onPress={onPress}>
            <View>
                <Image source={icon} style={styles.mIconButton} />
            </View>
            <View>
                <Text style={styles.mTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    ) : (
        <View style={styles.mButtonActive}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.mTitleActive}>{title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressClear}>
                <Image source={icons.ic_x} style={styles.mIconX} />
            </TouchableOpacity>
        </View>
    );
};

import { KeyboardAvoidingView, Text, TextInput, View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './index.styles';
import sizes from 'Configs/UI/Sizes';
import { useTranslation } from 'react-i18next';
import { colors } from 'Configs/UI/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { useCreator } from 'Hooks/useCreator';
import { useCustomer } from 'Hooks/useCustomer';
import { SET_ISFOCUS_CREATOR, SET_VALUE_DROPDOWN_CREATOR } from 'Store/Reducers/creatorSlice';
import { SET_ISFOCUS_CUSTOMER, SET_VALUE_DROPDOWN_CUSTOMER } from 'Store/Reducers/customerSlice';
import { filterSearchInterface } from 'Utils/Modals';
import {Button} from 'Components/Commons/Button';


const FilterSearchModal = (props: filterSearchInterface) => {

    // hook
    const { valueCreator } = useCreator();
    const { valueCustomer } = useCustomer();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        valueDropdownCustomer,
        valueDropdownCreator,
        isFocusCustomer,
        isFocusCreator
    } = useSelector((state: any) => ({
        valueDropdownCustomer: state.customer.valueDropdownCustomer,
        valueDropdownCreator: state.creator.valueDropdownCreator,
        isFocusCustomer: state.customer.isFocusCustomer,
        isFocusCreator: state.creator.isFocusCreator
    }));


    // Functions.ts
    function onChangeItemDropdownCreator(item: any) {
        dispatch(SET_VALUE_DROPDOWN_CREATOR(item.value));
        dispatch(SET_ISFOCUS_CREATOR(false));
    }

    function onChangeItemDropdownCustomer(item: any) {
        dispatch(SET_VALUE_DROPDOWN_CUSTOMER(item.value));
        dispatch(SET_ISFOCUS_CUSTOMER(false));
    }

    // @ts-ignore
    return (
        <Modal isVisible={props.isVisible} backdropOpacity={0.4} onBackdropPress={props.onBackdropPress} hasBackdrop={true}>
            <KeyboardAvoidingView>
                <View style={styles.gContainer}>
                    <View style={styles.mContainerTitle}>
                        <Text style={styles.mTitleSearch}>{t('customer.title_search')}</Text>
                    </View>
                    <View style={styles.mContentTitle}>
                        <Text style={styles.mTitle}>
                            {t('customer.type_of_customer')}
                        </Text>
                        <Dropdown
                            style={[styles.mDropdown, isFocusCustomer && { borderColor: colors.color_shadow }]}
                            containerStyle={styles.mContainerDropdown}
                            itemContainerStyle={styles.mContainerDropdown}
                            placeholderStyle={styles.mPlaceholderStyle}
                            selectedTextStyle={styles.mSelectedTextStyle}
                            selectedTextProps={{ numberOfLines: 1, ellipsizeMode: 'tail' }}
                            data={valueCustomer}
                            maxHeight={sizes._130sdp}
                            // @ts-ignore
                            labelField="label"
                            // @ts-ignore
                            valueField="value"
                            placeholder={!isFocusCustomer ? `${t('customer.filter.placeholder_filter')}` : '...'}
                            value={valueDropdownCustomer}
                            onChange={item => {
                                onChangeItemDropdownCustomer(item);
                            }} />

                    </View>
                    <View style={styles.mContentTitle}>
                        <Text style={styles.mTitle}>
                            {t('customer.email')}
                        </Text>
                        <View style={styles.mInputContainer}>
                            <TextInput
                                defaultValue={props.defaultValueEmail}
                                placeholder={`${t('customer.email')}`}
                                style={styles.mInput}
                                onChangeText={props.onChangeTextEmail}
                            />
                        </View>
                    </View>

                    <View style={styles.mContentTitle}>
                        <Text style={styles.mTitle}>
                            {t('customer.phone_number')}
                        </Text>
                        <View style={styles.mInputContainer}>
                            <TextInput
                                defaultValue={props.defaultValuePhone}
                                placeholder={`${t('customer.phone_number')}`}
                                style={styles.mInput}
                                onChangeText={props.onChangeTextPhone} />
                        </View>
                    </View>
                    <View style={styles.mContentTitle}>
                        <Text style={styles.mTitle}>
                            {t('customer.author')}
                        </Text>
                        <Dropdown
                            style={[styles.mDropdown, isFocusCreator && { borderColor: colors.color_shadow }]}
                            containerStyle={styles.mContainerDropdownCreator}
                            itemContainerStyle={styles.mContainerDropdownCreator}
                            placeholderStyle={styles.mPlaceholderStyle}
                            selectedTextStyle={styles.mSelectedTextStyle}
                            search={true}
                            searchPlaceholder={`${t('customer.filter.placeholder_search')}`}
                            inputSearchStyle={styles.inputSearch}
                            dropdownPosition={'top'}
                            autoScroll={true}
                            data={valueCreator}
                            maxHeight={sizes._130sdp}
                            selectedTextProps={{ numberOfLines: 1, ellipsizeMode: 'tail' }}
                            // @ts-ignore
                            labelField="label"
                            // @ts-ignore
                            valueField="value"
                            placeholder={!isFocusCreator ? `${t('customer.filter.placeholder_filter')}` : '...'}
                            value={valueDropdownCreator}
                            onChange={item => {
                                onChangeItemDropdownCreator(item);
                            }} />
                    </View>
                    <View style={styles.mButtonContainer}>
                        <Button text={`${t('customer.title_search')}`} typeButton={'secondary'} sizeButton={'normal'} onPressButton={props.onPress}/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};
export default FilterSearchModal;

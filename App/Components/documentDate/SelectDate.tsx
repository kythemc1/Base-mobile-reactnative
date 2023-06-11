import Header from 'Components/Commons/Header/Header';
import {useTranslation} from 'react-i18next';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import {colors} from 'Configs/UI/Colors';
import {useRef, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch, useSelector} from 'react-redux';
import {
    GET_DATA_SEARCH_DOCUMENT_SUCCESS,
    SET_END_DATE,
    SET_FLAG_STATUS,
    SET_NAME_DATE,
    SET_START_DATE,
} from 'Store/Reducers/myDocumentSlice';
import {Button} from 'Components/Commons/Button';
import {RootState} from 'Store/reduxProvider';
import {styles} from 'Components/documentDate/style';

interface dateInterface {
  visible: boolean;
  hidenVisible: any;
}

const ButtonItem = ({onPress, title}: {onPress: () => void; title: string}) => {
    return (
        <TouchableOpacity style={styles.mItemSelect} onPress={onPress}>
            <Text style={styles.mTextItemSelect}>{title}</Text>
        </TouchableOpacity>
    );
};
export const DocumentDateSearch = (props: dateInterface) => {
    const refRBSheet = useRef();
    const dispatch = useDispatch();

    //date
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    //
    const {t} = useTranslation();
    const {lang, flagStatus} = useSelector((state: RootState) => ({
        lang: state.lang,
        flagStatus: state.myDocument.flagStatus,
    }));
    // ngày hôm nay
    const today = moment().format().slice(0, -15);
    // ngày hôm qua
    const yesterday = moment().subtract(1, 'days').format().slice(0, -15);
    // tuần này
    const startWeeks = moment().startOf('isoWeek').format().slice(0, -15);
    const endWeeks = moment().endOf('isoWeek').format().slice(0, -15);
    // tháng này
    const startMonth = moment().startOf('months').format().slice(0, -15);
    const endMonth = moment().endOf('months').format().slice(0, -15);
    // năm này
    const startYear = moment().startOf('years').format().slice(0, -15);
    const endYear = moment().endOf('years').format().slice(0, -15);
    // Từ ngày đến ngày
    const dateStartFomart = moment(startDate).format().slice(0, -15);
    const dateEndFomart = moment(endDate).format().slice(0, -15);

    // handle set date
    function hanldeActionDate(
        startDate: string,
        endDate: string,
        nameDate: string,
    ) {
        dispatch(GET_DATA_SEARCH_DOCUMENT_SUCCESS([]));
        dispatch(SET_START_DATE(startDate));
        dispatch(SET_END_DATE(endDate));
        dispatch(SET_NAME_DATE(nameDate));
        if (flagStatus == 'manage') {
            dispatch(SET_FLAG_STATUS('manage'));
        } else {
            dispatch(SET_FLAG_STATUS('process'));
        }
    }

    return (
        <Modal visible={props.visible}>
            <Header
                typeHeader="back_header"
                titleHeader={t('header.document_date')}
                onBackPress={() => {
                    props.hidenVisible();
                }}
            />
            <View style={{backgroundColor: colors.color_background, flex: 1}}>
                <ButtonItem
                    onPress={() => {
                        hanldeActionDate(today, today, `${t('search.today')}`);
                        props.hidenVisible();
                    }}
                    title={t('search.today')}
                />
                <ButtonItem
                    onPress={() => {
                        hanldeActionDate(yesterday, yesterday, `${t('search.yesterday')}`);
                        props.hidenVisible();
                    }}
                    title={t('search.yesterday')}
                />
                <ButtonItem
                    onPress={() => {
                        hanldeActionDate(startWeeks, endWeeks, `${t('search.weeks')}`);
                        props.hidenVisible();
                    }}
                    title={t('search.weeks')}
                />
                <ButtonItem
                    onPress={() => {
                        hanldeActionDate(startMonth, endMonth, `${t('search.months')}`);
                        props.hidenVisible();
                    }}
                    title={t('search.months')}
                />
                <ButtonItem
                    onPress={() => {
                        hanldeActionDate(startYear, endYear, `${t('search.years')}`);
                        props.hidenVisible();
                    }}
                    title={t('search.years')}
                />
                <ButtonItem
                    onPress={() => {
                        // @ts-ignore
                        refRBSheet.current.open();
                    }}
                    title={t('search.from_to')}
                />

                <RBSheet
                    // @ts-ignore
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    animationType={'slide'}
                    customStyles={{
                        wrapper: {
                            backgroundColor: 'transparent',
                        },
                        container: styles.mBottomSheet,
                        draggableIcon: {
                            backgroundColor: colors.color_white,
                        },
                    }}>
                    <Text style={styles.mTitleBottomSheet}>
                        {t('search.select_date')}
                    </Text>
                    <View style={styles.mViewText}>
                        <Text style={styles.mText}>{t('search.from_date')}</Text>
                        <View style={styles.mViewTextDate}>
                            <Text style={styles.mTextDate}>{`${dateStartFomart}`}</Text>
                        </View>
                    </View>
                    <View>
                        <DateTimePicker
                            testID="dateTimePicker"
                            dateFormat="day month year"
                            value={startDate}
                            mode={'date'}
                            onChange={(event, date: Date | any) => setStartDate(date)}
                            display="spinner"
                            textColor="black"
                            locale={`${lang.lang}`}
                        />
                    </View>
                    <View style={styles.mViewText}>
                        <Text style={styles.mText}>{t('search.to_date')}</Text>
                        <View style={styles.mViewTextDate}>
                            <Text style={styles.mTextDate}>{`${dateEndFomart}`}</Text>
                        </View>
                    </View>
                    <View>
                        <DateTimePicker
                            dateFormat="day month year"
                            testID="dateTimePicker"
                            value={endDate}
                            mode={'date'}
                            onChange={(event, date: Date | any) => setEndDate(date)}
                            display="spinner"
                            textColor="black"
                            locale={`${lang.lang}`}
                        />
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Button
                            typeButton="primary"
                            sizeButton="large"
                            text={t('search.text_button')}
                            onPressButton={() => {
                                props.hidenVisible();
                                hanldeActionDate(
                                    dateStartFomart,
                                    dateEndFomart,
                                    `${dateStartFomart}` + ' -> ' + `${dateEndFomart}`,
                                );
                                //@ts-ignore
                                refRBSheet.current.close();
                            }}
                        />
                    </View>
                </RBSheet>
            </View>
        </Modal>
    );
};

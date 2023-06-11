import Modal from 'react-native-modal';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from 'Components/Commons/Modals/InternetConnectionModal/index.styles';
import {useTranslation} from 'react-i18next';
import {Button} from 'Components/Commons/Button';

interface Props {
    isConnected: boolean | undefined;
    title: string,
    subtitle: string,
    img?: any;
    onPress?: () => void;
}

export const InternetConnectionModal = (props: Props) => {
    const {t} = useTranslation();
    return (
        <Modal isVisible={props.isConnected}
            statusBarTranslucent={true}
            backdropOpacity={0.4}>
            <View style={styles.mContainer}>
                <Image source={props.img} style={styles.img} resizeMode={'contain'}/>
                <Text style={styles.mTitle}>{props.title}</Text>
                <Text style={styles.mText}>
                    {props.subtitle}
                </Text>
                <View style={{marginHorizontal: 16}}>
                    <Button text={t('internet.title_button')} typeButton={'secondary'} sizeButton={'custom'}
                        onPressButton={props.onPress}/>
                </View>

            </View>
        </Modal>
    );
};

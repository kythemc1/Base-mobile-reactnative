import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from 'Configs/UI/Colors';
import { styles } from 'Components/Commons/Loading/index.styles';

interface State {
  loading: boolean | undefined;
}

export default function Loading({ loading }: State) {
    return (
        loading ?
            <View style={styles.mContainer}>
                <ActivityIndicator animating={loading} size={'large'} color={colors.color_button_confirm} />
            </View> : null
    );
}

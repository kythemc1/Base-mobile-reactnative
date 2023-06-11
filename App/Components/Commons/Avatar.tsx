import React from 'react';
import {FastImageProps} from 'react-native-fast-image';
import {View, Text, ViewProps} from 'react-native-ui-lib';

import FImage from './FImage';

const Avatar = ({
    size,
    source,
    ...props
}: {
  size: number;
  source: FastImageProps['source'];
} & ViewProps) => {
    return (
        <View
            bg-bg
            width={size}
            height={size}
            // @ts-expect-error
            radius={size / 2}
            overflowHidden
            {...props}>
            <FImage source={source} />
        </View>
    );
};

export default Avatar;

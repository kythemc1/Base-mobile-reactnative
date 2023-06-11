import React, {useState, useEffect} from 'react';
import {View} from 'react-native-ui-lib';
// import { InteractionManager } from 'react-native/types';
import {Fade, Placeholder, PlaceholderMedia} from 'rn-placeholder';

const AfterInteraction = ({
    disableAnimation,
    fade,
    children,
    skeleton,
    forceShow,
    ...props
}: any) => {
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFinished(true);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const defaultSkeleton = () => (
        <Placeholder shouldRasterizeIOS>
            <PlaceholderMedia
                isRound={false}
                style={{height: '100%', width: '100%'}}
            />
        </Placeholder>
    );

    const renderSkeleton = () =>
        skeleton || (!disableAnimation && defaultSkeleton());

    return (
        <View flex {...props}>
            {(finished && !forceShow && children) || renderSkeleton()}
        </View>
    );
};

export default AfterInteraction;

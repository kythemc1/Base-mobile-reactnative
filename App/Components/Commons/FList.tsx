import React, {useRef} from 'react';
import {
    FlatList,
    FlatListProps,
    StyleProp,
    StyleSheet,
    ViewStyle,
} from 'react-native';
import {Spacings, View, Text, Image} from 'react-native-ui-lib';
import {useScrollToTop} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import isEqual from 'react-fast-compare';

import {useRefreshByUser} from '../../Hooks/useRefreshByUser';
import AfterInteraction from './AfterInteraction';

const FList = ({
    hideInteraction = false,
    keyId = 'id',
    useSafeArea = false,
    data,
    refetch,
    loadMore,
    isFetching,
    hasNextPage,
    isSuccess,
    renderItem,
    contentContainerStyle,
    textEmpty = '',
    withSeparator,
    ...props
}: {
  data: any[];
  keyId?: string;
  useSafeArea?: boolean;
  hideInteraction?: boolean;
  refetch?: () => Promise<unknown>;
  loadMore?: () => Promise<unknown>;
  isFetching?: boolean;
  hasNextPage?: boolean;
  isSuccess?: boolean;
  renderItem: (item: any) => React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  textEmpty?: string;
  withSeparator?: boolean;
} & FlatListProps<any>) => {
    const flatlistRef = useRef<any>(null);
    const {bottom} = useSafeAreaInsets();

    const {isRefetchingByUser, refetchByUser} = useRefreshByUser(
        refetch ? refetch : async () => {},
    );

    useScrollToTop(flatlistRef);

    const renderList = () => (
        <FlatList
            ref={flatlistRef}
            keyExtractor={item => item[keyId]}
            data={data}
            renderItem={renderItem}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            onRefresh={refetchByUser}
            refreshing={isRefetchingByUser}
            contentContainerStyle={[
                useSafeArea && {paddingBottom: bottom + 16},
                styles.container,
                contentContainerStyle,
            ]}
            ItemSeparatorComponent={withSeparator ? Separator : null}
            {...props}
        />
    );

    if (hideInteraction) {
        return <View flex>{renderList()}</View>;
    }

    return (
        <AfterInteraction
            forceShow={isFetching && !data?.length && !isRefetchingByUser}>
            {renderList()}
        </AfterInteraction>
    );
};

const Separator = () => <View border-b-grey3 />;

export default React.memo(FList, isEqual);

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
});

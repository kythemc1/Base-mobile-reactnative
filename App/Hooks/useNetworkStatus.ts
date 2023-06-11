import { useEffect, useState } from 'react';
import NetInfo, { NetInfoState, NetInfoSubscription } from '@react-native-community/netinfo';

export const useNetworkStatus = () => {
    const [isConnected, setIsConnected] = useState<boolean | null>(true);

    useEffect(() => {
        const unsubscribe: NetInfoSubscription | null = null;

        const handleConnectivityChange = (state: NetInfoState) => {
            setIsConnected(state.isConnected);
        };

        NetInfo.fetch().then((state: NetInfoState) => {
            setIsConnected(state.isConnected);
        });

        NetInfo.addEventListener(handleConnectivityChange);
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [isConnected]);

    return isConnected;
};

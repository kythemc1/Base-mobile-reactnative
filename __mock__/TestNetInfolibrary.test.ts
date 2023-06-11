import NetInfo from '@react-native-community/netinfo';

describe('Test NetInfo library', () => {
    //Kiểm tra xem thư viện có import thành công hay không
    it('should import NetInfo successfully', () => {
        expect(NetInfo).toBeDefined();
    });
    // Kiểm tra kết nối internet:
    it('should have internet connectivity', () => {
        return NetInfo.fetch().then(state => {
            expect(state.isConnected).toBe(true);
        });
    });
    //Kiểm tra trạng thái của kết nối internet khi mất kết nối:
    it('should have no internet connectivity', () => {
        const unsubscribe = NetInfo.addEventListener(state => {
            expect(state.isConnected).toBe(false);
            unsubscribe();
        });
    });
});

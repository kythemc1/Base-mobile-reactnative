import renderer from 'react-test-renderer';
import { InternetConnectionModal } from 'Components/Commons/Modals/InternetConnectionModal/index';
jest.useRealTimers();
test('Test snap modal InternetConnetionModal', () => {
    const screen = renderer.create(<InternetConnectionModal isConnected={true} />).toJSON();
    expect(screen).toMatchSnapshot();
});

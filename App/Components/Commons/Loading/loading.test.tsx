import renderer from 'react-test-renderer';
import Loading from 'Components/Commons/Loading/index';
jest.useRealTimers();
test('Test loading component', () => {
    const tree = renderer.create(<Loading loading={true} />).toJSON();
    expect(tree).toMatchSnapshot();
});

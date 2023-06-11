import renderer from 'react-test-renderer';
import {Button} from 'Components/Commons/Button/index';

test('testButton', () => {
    const component = renderer.create(<Button text={'test'} typeButton={'secondary'} sizeButton={'compact'}
        onPressButton={() => {
        }}/>).toJSON();
    expect(component).toMatchSnapshot();

}, 100);

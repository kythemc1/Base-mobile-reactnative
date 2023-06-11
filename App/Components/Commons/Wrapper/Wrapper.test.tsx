import renderer from 'react-test-renderer';
import React from 'react';
import Wrapper from './Wrapper';
test('renders correctly', () => {
    const tree = renderer.create(<Wrapper children={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
});

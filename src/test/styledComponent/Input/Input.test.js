import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Input from '../../../components/styledComponent/Input/Input';

describe('testing the button element', () => {
  it('should mount button', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('border', '0.1rem solid #b3aaaa');
  });
});

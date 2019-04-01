import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Loader from './Loader';

describe('testing the button element', () => {
  it('should mount button', () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('position', 'absolute');
  });
});

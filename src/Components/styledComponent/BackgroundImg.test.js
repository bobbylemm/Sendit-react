import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import BackgroundImg from './BackgroundImg';

describe('testing the button element', () => {
  it('should mount button', () => {
    const tree = renderer.create(<BackgroundImg />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('background-position', 'center center');
  });
});

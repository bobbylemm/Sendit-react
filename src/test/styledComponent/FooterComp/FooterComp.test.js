import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import FooterComp from '../../../components/styledComponent/FooterComp/FooterComp';

describe('testing the button element', () => {
  it('should mount button', () => {
    const tree = renderer.create(<FooterComp />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('background', '#312c32');
  });
});

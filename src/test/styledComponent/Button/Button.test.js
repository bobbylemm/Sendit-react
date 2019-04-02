import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from '../../../components/styledComponent/Button';

describe('testing the button element', () => {
  it('should mount button', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('color', '#fff');
  });

  it('should apply styles according to passed props', () => {
    const tree = renderer.create(<Button primary small inlineButton />).toJSON();
    expect(tree).toHaveStyleRule('background', expect.stringContaining('#5680E9'));
    expect(tree).toHaveStyleRule('border', expect.stringContaining('0.1rem solid #5680E9'));
    expect(tree).toHaveStyleRule('padding', expect.stringContaining('0.4rem 0.5rem'));
    expect(tree).toHaveStyleRule('display', expect.stringContaining('inline-block'));
  });
});

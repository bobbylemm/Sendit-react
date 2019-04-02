import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Header, Nav } from '../../../components/styledComponent/NavbarComp/NavbarComp';

describe('testing the button element', () => {
  it('should mount button', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('z-index', '1');
  });
  it('should mount button', () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('margin-top', '1.7rem');
  });
});

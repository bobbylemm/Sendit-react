import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {
  Table, Td, Tdbig, Th, Thead, Tr, SpanMobileView, SpanView, Select
} from './TableComp';

describe('testing the button element', () => {
  it('should mount button', () => {
    const tree = renderer.create(<Table />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('border-collapse', 'collapse');
  });
  it('should mount button', () => {
    const tree = renderer.create(<Td />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('display', 'block', {
      media: '(max-width:650px)'
    });
  });
  it('should mount button', () => {
    const tree = renderer.create(<Tdbig />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('width', '11rem');
  });
  it('should mount button', () => {
    const tree = renderer.create(<Th />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('background', '#89bdd3');
  });
  it('should mount button', () => {
    const tree = renderer.create(<Thead />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('display', 'none', {
      media: '(max-width:650px)'
    });
  });
  it('should mount button', () => {
    const tree = renderer.create(<Tr />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('height', '5.2rem');
  });
  it('should mount button', () => {
    const tree = renderer.create(<SpanMobileView />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('border-radius', '0.3rem');
  });
  it('should mount button', () => {
    const tree = renderer.create(<SpanView />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('margin', '0 1rem 0 0');
  });
});

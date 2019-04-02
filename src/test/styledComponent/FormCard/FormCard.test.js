import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import FormCard from '../../../components/styledComponent/FormCard/FormCard';

describe('testing the button element', () => {
  it('should mount button', () => {
    const tree = renderer.create(<FormCard />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('background', '#efefef');
  });
});

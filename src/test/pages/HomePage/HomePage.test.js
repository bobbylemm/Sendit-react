import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import HomePage from '../../../pages/HomePage';

describe('Test the snapshot of the home page', () => {
  it('should match the snapshot', () => {
    const wrapper = renderer
      .create(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

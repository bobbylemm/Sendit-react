import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from './index';

describe('Testing the AppRouter component', () => {
  const mockedDispatch = jest.fn();
  const wrapper = shallow(<AppRouter dispatch={mockedDispatch} />);
  it('should render the AppRouter component correctly', () => {
    expect(wrapper.find('Route').exists()).toBe(true);
  });
});

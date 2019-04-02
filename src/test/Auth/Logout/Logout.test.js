import { mount, shallow } from 'enzyme';
import React from 'react';
import LogOut, { Logout, mapDispatchToProps } from '../../../Auth/Logout';

const props = {
  history: { push: jest.fn() },
  logoutUsers: jest.fn()
};

describe('Test the snapshot of the logout page', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<LogOut {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should test mapDispatchToProps', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).logoutUsers();
    expect(dispatch.mock.calls[0][0]).toBeDefined();
  });
  it('should test the mounted component', () => {
    const wrapper = mount(<Logout {...props} />);
    expect(props.history.push).toHaveBeenLastCalledWith('/');
    expect(wrapper).toEqual({});
  });
});

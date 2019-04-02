import { mount, shallow } from 'enzyme';
import React from 'react';
import { Logout } from './index';

const props = {
  history: { push: jest.fn() },
  logoutUsers: jest.fn()
};

describe('Test the snapshot of the admin page', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Logout {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  // it('should check state', () => {
  //   const handleSelect = jest.fn();
  //   const handleEdit = jest.fn();
  //   const handleCancel = jest.fn();
  //   const handleInput = jest.fn();
  //   const wrapper = mount(
  //     <AdminPage
  //       handleCancel={handleCancel}
  //       handleEdit={handleEdit}
  //       handleSelect={handleSelect}
  //       handleInput={handleInput}
  //       editState={false}
  //       tableNames={tableNames} parcels={parcels}
  //       {...props}
  //     />
  //   );
  //   wrapper
  //     .find('select')
  //     .simulate('change', { currentTarget: { options: [{ innerHTML: 'in-transit' }] } });
  //   wrapper
  //     .find('span')
  //     .at(4)
  //     .simulate('input', { target: { innerHTML: 'samana' } });
  //   wrapper.setState({ edit: false });
  //   expect(wrapper.state('editedStatus')).toEqual('in-transit');
  // });
});

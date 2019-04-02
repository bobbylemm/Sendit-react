import { shallow } from 'enzyme';
import React from 'react';
import { SuperAdminPage } from '../../../pages/SuperAdminPage';

const props = {
  getAllUsers: jest.fn(),
  allUsers: [{}],
  editState: false
};
const tableNames = ['User id', 'Username', 'email', 'isAdmin', 'Action'];

const users = [{}];
describe('Test the snapshot of the admin page', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <SuperAdminPage tableNames={tableNames} users={users} {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

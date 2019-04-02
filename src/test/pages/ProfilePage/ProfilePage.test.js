import { shallow } from 'enzyme';
import React from 'react';
import { ProfilePage, mapDispatchToProps } from '../../../pages/ProfilePage';

const props = {
  getAllUserParcels: jest.fn(),
  cancelParcel: jest.fn(),
  editDropOffLocation: jest.fn(),
  tableNames: {}
};
const userParcels = {
  data: {},
  isLoading: false
};
const parcels = [{}];
describe('Test the snapshot of the profile page', () => {
  it('should match the snapshot', () => {
    const handleView1 = jest.fn();
    const handleView2 = jest.fn();
    const wrapper = shallow(
      <ProfilePage
        handleView1={handleView1}
        handleView2={handleView2}
        userParcels={userParcels}
        parcels={parcels}
        {...props}
      />
    );
    const button1 = wrapper.find('button').at(0);
    const button2 = wrapper.find('button').at(1);
    button1.simulate('click');
    button2.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
  it('test mapDispatchToProps', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getAllUserParcels();
    mapDispatchToProps(dispatch).cancelParcel();
    mapDispatchToProps(dispatch).editDropOffLocation();
    expect(dispatch.mock.calls[0][0]).toBeDefined();
    expect(dispatch.mock.calls[1][0]).toBeDefined();
    expect(dispatch.mock.calls[2][0]).toBeDefined();
  });
});

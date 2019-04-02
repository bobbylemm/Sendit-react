import { mount, shallow } from 'enzyme';
import React from 'react';
import Tablerow from './index';
import {
  Table,
  Select,
  SpanView
} from '../styledComponent/TableComp/TableComp';
import Button from '../styledComponent/Button';

const tableNames = [
  'Package id',
  'Package name',
  'Dropoff location',
  'Pickup location',
  'Present location',
  'Weight',
  'Status',
  'Price',
  'Cancelled',
  'Action'
];
describe('Test the table row', () => {
  it('should match snapshot', () => {
    const tree = shallow(<Tablerow tableNames={tableNames} />);
    expect(tree).toMatchSnapshot();
  });
  it('should call the handle select function', () => {
    const wrapper = shallow(<Tablerow tableNames={tableNames} />);
    wrapper
      .find(Select)
      .dive()
      .simulate('click');
    wrapper
      .find(Select)
      .dive()
      .simulate('change');
    wrapper
      .find(Button)
      .dive()
      .simulate('click');

    wrapper
      .find(SpanView)
      .at(4)
      .dive()
      .simulate('input');
  });
  it('should test the table as a profile table', () => {
    const props = {
      userId: 1,
      parcelId: 1,
      packageName: 'moi moi',
      dropoffLocation: 'illasa',
      pickupLocation: 'abuja',
      presentLocation: 'abuja',
      weight: 1,
      quantity: 1,
      status: 'delivered',
      price: 500,
      cancelled: true,
      editAdminStatus: jest.fn(),
      userEmail: 'dodo@gmail.com',
      profileTable: true,
      editParcelLocation: jest.fn(),
      editParcelStatus: jest.fn(),
      editDropOffLocation: jest.fn()
    };
    const wrapper = shallow(
      <Tablerow {...props} profileTable tableNames={tableNames} />
    );
    wrapper.setState({ editedDropOffLocation: 'ilaje' });
    wrapper
      .find(Button)
      .at(0)
      .dive()
      .simulate('click', { target: { id: '1', innerHTML: 'save' } });
    console.log(
      wrapper
        .find(Button)
        .at(0)
        .dive()
        .html()
    );
    wrapper
      .find(Button)
      .at(1)
      .dive()
      .simulate('click');
    wrapper
      .find(SpanView)
      .at(2)
      .dive()
      .simulate('input');
  });
  it('should test the table superAdmin table', () => {
    const props = {
      userId: 1,
      parcelId: 1,
      editAdminStatus: jest.fn(),
      userEmail: 'dodo@gmail.com',
      superAdminTable: true,
      editParcelLocation: jest.fn(),
      editParcelStatus: jest.fn(),
      editDropOffLocation: jest.fn()
    };
    const editAdminStatus = jest.fn();
    const wrapper = shallow(
      <Tablerow
        editAdminStatus={editAdminStatus}
        {...props}
        superAdminTable
        tableNames={tableNames}
      />
    );
    wrapper.setState({ newStatus: 'admin' });
    wrapper
      .find(Button)
      .dive()
      .simulate('click', { target: { id: '1', innerHTML: 'save' } });
    wrapper
      .find(Select)
      .dive()
      .simulate('change');
  });
});

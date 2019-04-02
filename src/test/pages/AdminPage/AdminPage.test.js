import { shallow } from 'enzyme';
import React from 'react';
import { AdminPage } from '../../../pages/AdminPage';

const props = {
  getAllParcels: jest.fn(),
  allParcels: [{}],
  editState: false
};
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
const parcels = [{}];
describe('Test the snapshot of the admin page', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <AdminPage tableNames={tableNames} parcels={parcels} {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

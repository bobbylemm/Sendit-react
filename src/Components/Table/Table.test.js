import React from 'react';
import { shallow, mount } from 'enzyme';
import Table from './index';
import TableRow from '../TableRow';

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

const parcels = [];

describe('the Table component', () => {
  it('should mount the Table component', () => {
    const tree = shallow(<Table parcels={parcels} tableNames={tableNames} />);
    expect(tree).toMatchSnapshot();
  });
  it('should check for the th element', () => {
    const wrapper = mount(<Table parcels={parcels} tableNames={tableNames} />);
    expect(wrapper.find('tr')).toBeTruthy();
  });
});
describe('the table row component', () => {
  it('should mount the table row data', () => {
    const tree = shallow(<TableRow parcels={parcels} tableNames={tableNames} />);
    expect(tree).toMatchSnapshot();
  });
});

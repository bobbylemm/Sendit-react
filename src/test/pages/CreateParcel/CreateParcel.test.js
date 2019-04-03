import React from 'react';
import { shallow, mount } from 'enzyme';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import CreateParcelForm from '../../../pages/CreateParcel/CreateParcelForm';
import { CreateParcel } from '../../../pages/CreateParcel';

jest.mock('axios');
describe('create parcel form component', () => {
  let wrapper;
  let history;
  let wrapper4;
  let store1;
  let handleSubmit;
  let createParcel;

  beforeEach(() => {
    store1 = createStore(combineReducers({ form: formReducer }));
    const user = 'dodo';
    handleSubmit = jest.fn();
    createParcel = jest.fn();
    history = { push: jest.fn() };
    wrapper = mount(
      <Provider store={store1}>
        <CreateParcelForm />
      </Provider>
    );
    wrapper4 = mount(
      <Provider store={store1}>
        <CreateParcel
          user={user}
          createParcel={createParcel}
          history={history}
          handleSubmit={handleSubmit}
        />
      </Provider>
    );
  });
  it('should match the snap shot', () => {
    const tree = shallow(
      <Provider store={store1}>
        <CreateParcelForm />
      </Provider>
    );
    expect(tree.exists()).toBe(true);
    expect(tree).toMatchSnapshot();
  });
  it('should simulate change', () => {
    const input1 = wrapper.find('input').at(0);
    const input2 = wrapper.find('input').at(1);
    const input3 = wrapper.find('input').at(1);
    const input4 = wrapper.find('input').at(3);
    const input5 = wrapper.find('input').at(4);
    const price = wrapper.find('#parcelPrice');
    input1.simulate('change', { target: { value: 'rice' } });
    input2.simulate('change', { target: { value: 'illasa' } });
    input3.simulate('change', { target: { value: 'ketu' } });
    input4.simulate('change', { target: { value: 1 } });
    input5.simulate('change', { target: { value: 1 } });
    wrapper.setProps({
      packageName: 'rice',
      dropoffLocation: 'illasa',
      pickupLocation: 'ketu',
      weight: 1,
      quantity: 1
    });
    expect(price.text()).toEqual('₦');
  });
});

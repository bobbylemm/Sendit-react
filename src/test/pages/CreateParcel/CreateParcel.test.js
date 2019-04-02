import React from 'react';
import { shallow, mount } from 'enzyme';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import CreateParcelForm from '../../../pages/CreateParcel/CreateParcelForm';
import Createparcel, {
  mapDispatchToProps,
  mapStateToProps,
  CreateParcel
} from '../../../pages/CreateParcel';

const mockStore = configureMockStore();

jest.mock('axios');
// const mockStore = configureMockStore();
// test('should mount the signup container', () => {
//   const handleSubmit = jest.fn();
//   const wrapper = shallow(<SignupContainer />);
//   expect(wrapper).toMatchSnapshot();
// });
// test('should mount signup form', () => {
//   const wrapper = shallow(<SignupForm />);
//   expect(wrapper).toMatchSnapshot();
// });
describe('create parcel form component', () => {
  let wrapper;
  let history;
  let wrapper4;
  let store1;
  let handleSubmit;
  let createParcel;
  const initialState = {
    auth: {
      data: {
        user: 'dadada'
      },
      isLoading: true
    }
  };
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
    const input1 = wrapper.find('input').at(3);
    const input2 = wrapper.find('input').at(4);
    const price = wrapper.find('#parcelPrice');
    input1.simulate('change', { target: { value: 1 } });
    input2.simulate('change', { target: { value: 1 } });
    wrapper.setProps({ weight: 1, quantity: 1 });
    expect(price.text()).toEqual('₦500');
  });
  // it('should mount signup', () => {
  //   const store = mockStore(initialState);
  //   const wrapper2 = mount(
  //     <Provider store={store}>
  //       <Createparcel />
  //     </Provider>
  //   );
  //   expect(wrapper2.props().store.getState().auth.data.user).toBe('dadada');
  // });
  // it('should call the createParcel', () => {
  //   const form = wrapper4.find('form');
  //   const input1 = wrapper4.find('input').at(0);
  //   const input2 = wrapper4.find('input').at(1);
  //   const input3 = wrapper4.find('input').at(2);
  //   input1.simulate('change', { target: { value: 'sffffffff' } });
  //   input2.simulate('change', { target: { value: 'stufff@gmail.com' } });
  //   input3.simulate('change', { target: { value: 'sffffffff' } });
  //   form.simulate('submit');
  //   expect(createParcel).toHaveBeenCalled();
  //   // expect(history.push).toHaveBeenLastCalledWith('/');
  // });
  // describe('test mapStateToProps', () => {
  //   it('test mapStateToProps', () => {
  //     expect(mapStateToProps(initialState).user).toBe('dadada');
  //   });
  //   it('test mapDispatchToProps', () => {
  //     const dispatch = jest.fn();
  //     mapDispatchToProps(dispatch).createParcel();
  //     expect(dispatch.mock.calls[0][0]).toBeDefined();
  //   });
  // });
});

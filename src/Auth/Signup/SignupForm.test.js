import React from 'react';
import { shallow, mount } from 'enzyme';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SignupContainer, { mapDispatchToProps, mapStateToProps, Signup } from './index';
import SignupForm from './SignupForm/index';

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
describe('signup form component', () => {
  let wrapper;
  let history;
  let wrapper4;
  let handleSubmit;
  let registerUsers;
  const initialState = {
    auth: {
      data: {
        user: 'dadada'
      },
      isLoading: true
    }
  };
  beforeEach(() => {
    const store1 = createStore(combineReducers({ form: formReducer }));
    const user = 'dodo';
    handleSubmit = jest.fn();
    registerUsers = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<SignupForm />);
    wrapper4 = mount(
      <Provider store={store1}>
        <Signup
          user={user}
          registerUsers={registerUsers}
          history={history}
          handleSubmit={handleSubmit}
        />
      </Provider>
    );
  });
  it('should call history props', () => {});
  it('should match the snap shot', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it('should mount signup', () => {
    const store = mockStore(initialState);
    const wrapper2 = mount(
      <Provider store={store}>
        <SignupContainer />
      </Provider>
    );
    expect(wrapper2.props().store.getState().auth.data.user).toBe('dadada');
  });
  it('should call the registerUser', () => {
    const form = wrapper4.find('form');
    const input1 = wrapper4.find('input').at(0);
    const input2 = wrapper4.find('input').at(1);
    const input3 = wrapper4.find('input').at(2);
    input1.simulate('change', { target: { value: 'sffffffff' } });
    input2.simulate('change', { target: { value: 'stufff@gmail.com' } });
    input3.simulate('change', { target: { value: 'sffffffff' } });
    form.simulate('submit');
    expect(registerUsers).toHaveBeenCalled();
    // expect(history.push).toHaveBeenLastCalledWith('/');
  });
  describe('test mapStateToProps', () => {
    it('test mapStateToProps', () => {
      expect(mapStateToProps(initialState).user).toBe('dadada');
    });
    it('test mapDispatchToProps', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).registerUsers();
      expect(dispatch.mock.calls[0][0]).toBeDefined();
    });
  });
});

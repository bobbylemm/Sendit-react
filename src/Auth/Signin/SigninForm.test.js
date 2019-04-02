import React from 'react';
import { shallow, mount } from 'enzyme';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SigninContainer, {
  mapDispatchToProps,
  mapStateToProps,
  Signin
} from './index';
import SigninForm from './SigninForm/index';

const mockStore = configureMockStore();

jest.mock('axios');
describe('signup form component', () => {
  let wrapper;
  let history;
  let wrapper4;
  let handleSubmit;
  let loginUsers;
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
    loginUsers = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<SigninForm />);
    wrapper4 = mount(
      <Provider store={store1}>
        <Signin
          user={user}
          loginUsers={loginUsers}
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
  it('should mount signup container', () => {
    const store = mockStore(initialState);
    const wrapper2 = mount(
      <Provider store={store}>
        <SigninContainer />
      </Provider>
    );
    expect(wrapper2.props().store.getState().auth.data.user).toBe('dadada');
  });
  it('should re-render', () => {
    wrapper4.update();
  });
  it('should call the registerUser function', () => {
    const form = wrapper4.find('form');
    const input1 = wrapper4.find('input').at(0);
    const input2 = wrapper4.find('input').at(1);
    input1.simulate('change', { target: { value: 'sffffffff' } });
    input2.simulate('change', { target: { value: 'stufff@gmail.com' } });
    form.simulate('submit');
    expect(loginUsers).toHaveBeenCalled();
  });
  describe('test mapStateToProps', () => {
    it('test mapStateToProps', () => {
      expect(mapStateToProps(initialState).user).toBe('dadada');
    });
    it('test mapDispatchToProps', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).loginUsers();
      expect(dispatch.mock.calls[0][0]).toBeDefined();
    });
  });
});

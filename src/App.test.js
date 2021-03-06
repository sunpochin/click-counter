import React from 'react';
// import { render } from '@testing-library/react';
import Enzyme, {shallow, ShallowWrapper} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new EnzymeAdapter() })

import App from './App';


/**
 * Factory function to create a Shallowwrapper for the app component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
 */

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`) ; 
}

test('renders without errors', () => {

  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});


test('renders without errors', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  console.log('appComponent: ', appComponent )
  expect(appComponent.length).toBe(1)
});


test('renders increment button', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'increment-button');
  console.log('appComponent: ', appComponent )
  expect(appComponent.length).toBe(1)
});


test('renders counter display', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'counter-display');
  console.log('appComponent: ', appComponent )
  expect(appComponent.length).toBe(1)
});


test('renders counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0)
});

// moving away from "testing implementation"
test('clicking button increment counter ***display***', () => {
  const counter = 7;
  const wrapper = setup(null, {counter});

  // find button and click.
  const button = findByTestAttr(wrapper,'increment-button');
  button.simulate('click');

  // find display and test value.
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain( counter + 1) ;


});


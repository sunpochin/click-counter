import React from 'react';
// import { render } from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new EnzymeAdapter() })

import App from './App';

test('renders without errors', () => {

  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});


test('renders without errors', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  console.log('appComponent: ', appComponent )
  expect(appComponent.length).toBe(1)
});


test('renders increment button', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='increment-button']");
  console.log('appComponent: ', appComponent )
  expect(appComponent.length).toBe(1)
});


test('renders counter display', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='counter-display']");
  console.log('appComponent: ', appComponent )
  expect(appComponent.length).toBe(1)
});


test('renders counter starts at 0', () => {
});

// moving away from "testing implementation"
test('clicking button increment counter ***display***', () => {
});


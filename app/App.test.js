import { render } from 'enzyme';
import App from './App';
import React from 'react';
// import { expect } from 'chai';

describe('App', () => {

  const wrapper = render((
      <App/>
  ));

  it('should render a wrap div', () => {
      expect(wrapper.find(".wraper")).toHaveLength(1);
  });
  it('should render a header div', () => {
      expect(wrapper.find(".headerContainer")).toHaveLength(1);
  });
  it('should render a MainBlock div', () => {
      expect(wrapper.find(".MainBlock")).toHaveLength(1);
  });
});

import { shallow, render } from 'enzyme';
import ListView from './ListView';
import React from 'react';
import sinon from 'sinon';
// import { expect } from 'chai';

describe('ListView', () => {
  const changeProductsView = sinon.spy();

  const wrapper = shallow((
    <ListView changeProductsView = {changeProductsView}/>
  ));

  it('should render a button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should trigger changeProductsView when its clicked', () => {
       wrapper.find('button').simulate('click');
      expect(changeProductsView).toHaveProperty('callCount', 1);
  });
});

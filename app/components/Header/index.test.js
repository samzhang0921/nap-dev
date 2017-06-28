import { shallow, render, mount } from 'enzyme';
import Header from './index';
import React from 'react';
import { expect } from 'chai';

describe('Header', () => {
  const props = {
    data: {
      offset: 1,
      limit: 60,
      total: 100,
    }
  }
  const totalPage = 8;
  const currentPage = 2;
  const changeProductsView = true;
  const updateOffset = jest.fn();
  const updateSort = jest.fn();

  it('should render a ul', () => {
      const wrapper = mount(
        < Header
        offset = {props.data.offset}
        limit = {props.data.limit}
        total = {props.data.total}
        totalPage ={totalPage}
        currentPage = {currentPage}
        changeProductsView = {changeProductsView}
        updateOffset = {updateOffset}
        updateSort = {updateSort}
        />
      );
      expect(wrapper.find('select')).to.have.length(1);
      expect(wrapper.find('h1')).to.have.length(1);
      expect(wrapper.find('h1').text()).to.contain("what's new");
      expect(wrapper.find('ul')).to.have.length(1);
  });

});

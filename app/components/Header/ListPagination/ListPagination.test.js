import { shallow, render, mount } from 'enzyme';
import ListPagination from './ListPagination';
import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';

describe('ListPagination', () => {
  const totalPage = 10;
  const currentPage = 1;
  const updateOffset = sinon.spy();

  const mountWrapper = mount(
      <ListPagination totalPage={totalPage} currentPage={currentPage} updateOffset={updateOffset} />
  );
  const shallowWrapper = shallow(
      <ListPagination totalPage={totalPage} currentPage={currentPage} updateOffset={updateOffset} />
  );

  it('should render a ul', () => {
      expect(shallowWrapper.find('ul')).to.have.length(1);
  });

  it('should have correct props', () => {
      expect(mountWrapper.props().totalPage).to.equal(10);
  });

  it('should trigger updateOffset when its clicked', () => {
      mountWrapper.find('li').first().simulate('click');
      expect(updateOffset).to.have.property('callCount', 1);
  });
});

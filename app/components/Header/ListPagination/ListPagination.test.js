import { mount } from 'enzyme';
import ListPagination from './ListPagination';
import React from 'react';
import sinon from 'sinon';

describe('ListPagination', () => {
  const totalPage = 10;
  const currentPage = 1;
  const updateOffset = sinon.spy();

  const mountWrapper = mount((
      <ListPagination totalPage={totalPage} currentPage={currentPage} updateOffset={updateOffset} />
  ));

  it('should render a ul', () => {
      expect(mountWrapper.find('ul')).toHaveLength(1);
  });

  it('should have correct props', () => {
      expect(mountWrapper.props().totalPage).toEqual(10);
  });

  it('should trigger updateOffset when its clicked', () => {
      mountWrapper.find('li').first().simulate('click');
      expect(updateOffset).toHaveProperty('callCount', 1);
  });
});

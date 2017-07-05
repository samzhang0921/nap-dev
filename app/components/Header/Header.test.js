import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import Header from './index';

describe('Header', () => {
  const offset = 60;
  const limit = 60;
  const total = 500;
  const totalPage =9;
  const currentPage = 1;
  const changeProductsView = jest.fn();
  const updateOffset = jest.fn();
  const updateSort = jest.fn();

  it('should mount item ', () => {
    const tree = toJson(mount(<Header />));
    expect(tree).toMatchSnapshot();
  });

  it('should match its snapshot with items', () => {

    const tree = renderer.create(
      <Header
    offset = {offset}
    limit = {limit}
    total = {total}
    totalPage ={totalPage}
    currentPage = {currentPage}
    changeProductsView = {changeProductsView}
    updateOffset = {updateOffset}
    updateSort = {updateSort}/>
  ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

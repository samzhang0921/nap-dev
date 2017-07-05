import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import ListViewAndSort from './ListViewAndSort';

describe('ListViewAndSort', () => {

  const changeProductsView = jest.fn();
  const updateSort = jest.fn();

  it('should match its snapshot with items', () => {

    const tree = renderer.create(<ListViewAndSort changeProductsView={changeProductsView} updateSort={updateSort}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should change class on the onClick function', () => {

    const component = mount(<ListViewAndSort changeProductsView={changeProductsView} updateSort={updateSort}/>);
    component.find('select').simulate('change', {
      target: {
        value: 'Change function'
      }
    });
    expect(toJson(component)).toMatchSnapshot();
  });
});

import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import ListView from './ListView';

describe('ListView', () => {

  const changeProductsView = jest.fn();


  it('should match its snapshot with items', () => {

    const tree = renderer.create(<ListView changeProductsView = {changeProductsView}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should change class on the onClick function', () => {

    const component = mount(<ListView changeProductsView = {changeProductsView}/>);
    component.find('.ListView').simulate('click');
    expect(toJson(component)).toMatchSnapshot();
    expect(component.find('button').text()).toBe('Outfit View');
  });
});

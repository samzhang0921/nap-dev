import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import ListSort from './ListSort';

describe('ListSort', () => {

  const updateSort =jest.fn();

  it('should match its snapshot with items', () => {

    const tree = renderer.create(
    <ListSort updateSort={updateSort}/>
  ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should change update on the select change', () => {

    const component = mount(<ListSort updateSort={updateSort}/>);
    component.find('select').simulate('change');    
      expect(updateSort).toHaveBeenCalled();
  });
});

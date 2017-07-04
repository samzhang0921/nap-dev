import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import CategoryFilter from './CategoryFilter';

describe('CategoryFilter', () => {

  it('should match its snapshot with items', () => {

    const tree = renderer.create(<CategoryFilter/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

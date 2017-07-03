import { render } from 'enzyme';
import ReactDOM from 'react-dom';
import CategoryFilter from './CategoryFilter';
import React from 'react';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';

describe('CategoryFilter', () => {
  const items = [
    {
      id: 0,
      name: 'Clothing'
    }, {
      id: 40,
      name: 'Beachwear'
    }, {
      id: 48,
      name: 'Coat'
    }, {
      id: 46,
      name: 'Dress'
    }
  ];

  it('should match its snapshot with items', () => {
    const tree = renderer.create(
      <CategoryFilter items={items}/>
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import ListTitleAndTotal from './ListTitleAndTotal';

describe('ListTitleAndTotal', () => {

  const total =9;


  it('should mount item ', () => {
    const tree = toJson(mount(<ListTitleAndTotal />));
    expect(tree).toMatchSnapshot();
  });

  it('should match its snapshot with items', () => {

    const tree = renderer.create(
    <ListTitleAndTotal total={total}/>
  ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

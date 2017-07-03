import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import SideFilter from './SideFilter';

it('should render a todo item ', () => {
  const tree = toJson(shallow(<SideFilter data={[]} />));
  expect(tree).toMatchSnapshot();
});

it('should match its snapshot with items', () => {
  const data = ['a', 'b', 'c'];
  const tree = renderer.create(
    <SideFilter data={data} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

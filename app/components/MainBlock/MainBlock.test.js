import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import MainBlock from './MainBlock';

it('should render a todo item ', () => {
  const tree = toJson(shallow(<MainBlock data={[]} />));
  expect(tree).toMatchSnapshot();
});

it('should match its snapshot with items', () => {
  const data = ['a', 'b', 'c'];
  const tree = renderer.create(
    <MainBlock data={data} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

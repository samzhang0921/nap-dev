import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import Header from './index';

it('should render a todo item ', () => {
  const tree = toJson(shallow(<Header data={[]} />));
  expect(tree).toMatchSnapshot();
});

it('should match its snapshot with data', () => {
  const data = ['a', 'b', 'c'];
  const tree = renderer.create(
    <Header data={data} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

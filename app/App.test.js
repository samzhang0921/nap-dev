import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import App from './App';

it('should render a todo item ', () => {
  const tree = toJson(shallow(<App data={[]} />));
  expect(tree).toMatchSnapshot();
});

it('should match its snapshot with data', () => {
  const data = ['a', 'b', 'c'];
  const tree = renderer.create(
    <App data={data} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

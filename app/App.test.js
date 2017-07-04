import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  it('should mount item ', () => {
    const tree = toJson(mount(<App data={[]} />));
    expect(tree).toMatchSnapshot();
  });

});

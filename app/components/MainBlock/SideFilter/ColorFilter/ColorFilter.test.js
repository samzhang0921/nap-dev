
import React from 'react';
import ReactDOM from 'react-dom';
import ColorFilter from './ColorFilter';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('ColorFilter', () => {
  const data = [ {
                id:1001,
                name:"Animal print"
            },
            {
                id:2,
                name:"black"
            },
            {
                id:3,
                name:"Blue"
            }];
  it('should render a todo item ', () => {
    const tree = toJson(shallow(<ColorFilter data={[]} />));
    expect(tree).toMatchSnapshot();
  });

  it('should match its snapshot with items', () => {
    const data = ['a', 'b', 'c'];
    const tree = renderer.create(
      <ColorFilter data={data} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


});

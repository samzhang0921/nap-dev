import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import Color from './Color';

describe('Color', () => {
  const id =  1643;
  const name = "blue";

  it('should mount item ', () => {
    const tree = toJson(mount(<Color id={[]}/>));
    expect(tree).toMatchSnapshot();
  });

  it('should match its snapshot with items', () => {

    const tree = renderer.create(<Color id={id} name={name}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should change class on the onClick function', () => {
    const onChange = jest.fn();
    const component = mount(<Color id={id} name={name} updateColorList={onChange}/>);
    component.find('li').simulate('click');
    expect(component.find('.colorCheckedbox')).toHaveLength(1);
  });
});

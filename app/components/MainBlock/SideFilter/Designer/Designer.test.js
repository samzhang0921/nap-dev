import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import Designer from './Designer';

describe('Designer', () => {
  const id =  1643;
  const name = "A.P.C. Atelier de Production et de Création";

  it('should mount item ', () => {
    const tree = toJson(mount(<Designer data={[]}/>));
    expect(tree).toMatchSnapshot();
  });

  it('should match its snapshot with items', () => {

    const tree = renderer.create(<Designer id={id} name={name}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should change class on the onClick function', () => {
    const onChange = jest.fn();
      const tree = renderer.create(
        <Designer />
      );
      const component = mount(<Designer id={id} name={name} updateDesignerList={onChange}/>);
      component.find('li').simulate('click');
      expect(component.find('.filterCheckedbox')).toHaveLength(1);
    });
});

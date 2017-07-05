import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import ColorFilter from './ColorFilter';

describe('ColorFilter', () => {
  const pColor =  {
"id": 3,
"name": "Blue"
};

  it('should mount item ', () => {
    const tree = toJson(mount(<ColorFilter data={[]}/>));
    expect(tree).toMatchSnapshot();
  });

  it('should match its snapshot with items', () => {

    const tree = renderer.create(<ColorFilter colorList={[pColor]}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should change class on the onClick function', () => {
    const onChange = jest.fn();
    
      const component = mount(<ColorFilter colorList={[pColor]} updateColorList={onChange}/>);
      component.find('.clearFilter').simulate('click');
      expect(component.find('.filterCheckedbox')).toHaveLength(0);
    });
});

import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import DesignerFilter from './DesignerFilter';

describe('DesignerFilter', () => {
  const data1 = [
    {
      "id": 1643,
      "name": {
        "en": "A.P.C. Atelier de Production et de Création"
      }
    }
  ];

  it('should mount item ', () => {
    const tree = toJson(mount(<DesignerFilter data={[]}/>));
    expect(tree).toMatchSnapshot();
  });

  it('should match its snapshot with items', () => {

    const tree = renderer.create(<DesignerFilter designerList={data1}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should change class on the onClick function', () => {
    const onChange = jest.fn();
    
      const component = mount(<DesignerFilter designerList={data1} updateDesignerList={onChange}/>);
      component.find('.clearFilter').simulate('click');
      expect(component.find('.filterCheckedbox')).toHaveLength(0);
    });
});

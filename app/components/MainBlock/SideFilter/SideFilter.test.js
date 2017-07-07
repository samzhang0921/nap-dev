import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import SideFilter from './SideFilter';

describe('SideFilter', () => {
  it('should mount item ', () => {
    const tree = toJson(mount(<SideFilter data={{}}/>));
    expect(tree).toMatchSnapshot();
  });

  it('should match its snapshot with items', () => {
    const data1 = [
      {
        "id": 1643,
        "name": {
          "en": "A.P.C. Atelier de Production et de Création"
        }
      }
    ];
    const data2 = [
      {
        "id": 2,
        "name": "black"
      }
    ];
    const tree = renderer.create(<SideFilter designerList={data1} colorList={data2}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

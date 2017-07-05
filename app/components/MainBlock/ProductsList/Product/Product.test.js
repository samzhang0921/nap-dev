import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import Product from './Product';

describe('Product', () => {
  const data1 =
  {
    "sku": 543002,
    "name": "Cashmere wrap",
    "price": "£380",
    "color": [57],
    "brand_name": "Madeleine Thompson",
    "brand_id": 1031,
    "caregories": [
      {
        "id": 5,
        "children": [
          {
            "id": 4279,
            "children": [
              {
                "id": 5166
              }, {
                "id": 5179
              }
            ]
          }
        ]
      }
    ],
    "image": {
      "outfit": "//cache.net-a-porter.com/images/products/543002/543002_ou_sl.jpg",
      "pview": "//cache.net-a-porter.com/images/products/543002/543002_in_sl.jpg"
    }
  }


  it('should match its snapshot with items', () => {

    const tree = renderer.create(<Product product={data1}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should change class on the onClick function', () => {
    const onChange = jest.fn();
      const component = mount(<Product product={data1} showComponent={onChange}/>);
      component.find('.quickView').simulate('click');
      expect(component.find('.overlay')).toHaveLength(1);
    });
});

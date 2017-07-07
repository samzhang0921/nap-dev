import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import MainBlock from './MainBlock';

describe('MainBlock', () => {

  it('should match its snapshot with items', () => {
    const data = {
      "offset": 0,
      "limit": 60,
      "total": 500,
      "designers": [
        {
          "id": 1643,
          "name": {
            "en": "A.P.C. Atelier de Production et de Création"
          }
        }
      ],
      "colors": [
        {
          "id": 2,
          "name": "black"
        }
      ],
      "products": [
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
      ]
    }
    const tree = renderer.create(<MainBlock data={data}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

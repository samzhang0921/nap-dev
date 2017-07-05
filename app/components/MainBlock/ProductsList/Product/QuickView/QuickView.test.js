import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import QuickView from './QuickView';

describe('QuickView', () => {
  const data1 = 11


  it('should mount item ', () => {
    const tree = toJson(mount(<QuickView data={[]}/>));
    expect(tree).toMatchSnapshot();
  });

  it('should match its snapshot with items', () => {

    const tree = renderer.create(<QuickView id={data1}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should change class on the onClick function', () => {
    const onChange = jest.fn();
      const tree = renderer.create(
        <QuickView />
      );
      const component = mount(<QuickView id={data1} updateDesignerList={onChange}/>);
      component.find('.quickView').simulate('click');
      expect(component.find('.overlay')).toHaveLength(0);
    });
});

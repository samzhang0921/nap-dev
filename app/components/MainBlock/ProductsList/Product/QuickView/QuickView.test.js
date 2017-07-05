import React from 'react';
import {
  mount
} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import QuickView from './QuickView';

describe('QuickView', () => {
      const id = 11;
      const showComponent = jest.fn();
      const toggleImage = jest.fn();

            it('should match its snapshot with items', () => {

                const tree = renderer.create( < QuickView
                  id = {id}
                  showComponent = {showComponent}
                  toggleImage = {toggleImage}
                  />).toJSON();

                  expect(tree).toMatchSnapshot();
                });

              it('should change class on the onClick function', () => {

                  const component = mount( < QuickView
                    id = {id}
                    showComponent = {showComponent}
                    toggleImage = {toggleImage}
                    />);
                    component.find('.close').simulate('click'); expect(component.find('img')).toHaveLength(0);
                  });
              });

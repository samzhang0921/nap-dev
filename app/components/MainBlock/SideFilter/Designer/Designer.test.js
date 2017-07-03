
import React from 'react';
import ReactDOM from 'react-dom';
import Designer from './Designer';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Designer', () => {
  const data = ['L', 'b', 'c'];

    it('should render a todo item ', () => {
      const tree = toJson(shallow(<Designer data={[]} />));
      expect(tree).toMatchSnapshot();
    });

    it('should match its snapshot with data', () => {
      const data = ['Learn react', 'rest', 'go out'];
      const tree = renderer.create(
        <Designer data={data} />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('should pass a selected value to the onChange function', () => {
   const tree = renderer.create(
     <Designer />
   );
   const component = shallow(<Designer data={data} />);
   component.find('li').first().simulate('change', { target: {
     value: 'Change function' }
   });

   expect(toJson(component)).toMatchSnapshot();
 });

});

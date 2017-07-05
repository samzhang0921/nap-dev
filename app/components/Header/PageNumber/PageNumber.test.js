import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import PageNumber from './PageNumber';

describe('PageNumber', () => {
  const page = 10;
  const currentPage = 1;
  const totalPage = 15;
  const updateOffset = jest.fn();

      it('should mount without props ', () => {
      const tree = toJson(mount(<PageNumber />));
      expect(tree).toMatchSnapshot();
    });

    it('should match its snapshot with props', () => {

      const tree = renderer.create(
      <PageNumber page={page} currentPage={currentPage} totalPage={totalPage} updateOffset = {updateOffset} />
    ).toJSON();

      expect(tree).toMatchSnapshot();
    });

  it('should trigger updateOffset when its clicked', () => {
    const component = mount(<PageNumber page={page} currentPage={currentPage} totalPage={totalPage} updateOffset = {updateOffset} />);
    component.find('li').first().simulate('click');
      expect(updateOffset).toHaveBeenCalled();
  });
});

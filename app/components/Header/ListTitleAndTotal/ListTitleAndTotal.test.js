import { render } from 'enzyme';
import React from 'react';
import ListTitleAndTotal from './ListTitleAndTotal';


describe('ListPagination', () => {

  const total= 10;
const wrapper = render((
    <ListTitleAndTotal total={total}/>
));

  it('should render without throwing an error', () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  it('should mount in a full DOM', () => {
    expect(wrapper.find('.ListTitleAndTotal')).toHaveLength(1);
  });
});

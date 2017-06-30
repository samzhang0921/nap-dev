import { render } from 'enzyme';
import React from 'react';
import ListSort from './ListSort';
import sinon from 'sinon';

describe('ListSort', () => {

const updateSort = sinon.spy();
const wrapper = render((
    <ListSort updateSort={updateSort}/>
));

it('should render select', () => {
        expect(wrapper.find('select')).toHaveLength(1);
});
});

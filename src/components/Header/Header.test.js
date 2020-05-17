import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAtrr, checkProps } from '../../Utils';

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {
    describe('Checking Proptypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                head: 'Test Head',
            };
            const propsErr = checkProps(Header, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });
});

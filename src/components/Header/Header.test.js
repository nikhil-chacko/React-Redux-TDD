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

    describe('Have Props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                head: 'Test Head',
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'HeadComponent');
            expect(component.length).toBe(1);
        });

        it('Should render an h1', () => {
            const h1 = findByTestAtrr(wrapper, 'Heading');
            expect(h1.length).toBe(1);
        });
    });
});

import React from 'react';
import Button from './index';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../Utils';

const setUp = (props = {}) => {
    const component = shallow(<Button {...props} />);
    return component;
};

describe('Button Component', () => {
    describe('Check proptypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                buttonText: 'Sample Text',
            };
            const propsErr = checkProps(Button, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have Props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Sample Text',
            };
            wrapper = setUp(props);
        });

        it('Should render without warning', () => {
            const component = findByTestAtrr(wrapper, 'ButtonComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a Button', () => {
            const button = findByTestAtrr(wrapper, 'button');
            expect(button.length).toBe(1);
        });
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../Utils';
import Post from './index';

describe('Post Item Component', () => {
    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some text',
            };
            const propsError = checkProps(Post, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Some Text',
            };
            wrapper = shallow(<Post {...props} />);
        });

        it('Should render without error', () => {
            const component = findByTestAtrr(wrapper, 'PostComponent');
            expect(component.length).toBe(1);
        });
        it('Should render a title', () => {
            const component = findByTestAtrr(wrapper, 'PostTitle');
            expect(component.length).toBe(1);
        });
        it('Should render a desc', () => {
            const component = findByTestAtrr(wrapper, 'componentDesc');
            expect(component.length).toBe(1);
        });

        describe('Should NOT render', () => {
            let wrapper;
            beforeEach(() => {
                const props = {};
                wrapper = shallow(<Post {...props} />);
            });

            it('Component is not rendered', () => {
                const component = findByTestAtrr(wrapper, 'PostComponent');
                expect(component.length).toBe(1);
            });
        });
    });
});

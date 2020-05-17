import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { findByTestAtrr } from './Utils';

const setUp = () => {
    const wrapper = shallow(<App />);
    return wrapper;
};

describe('App component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setUp();
    });

    it('Tests app Component', () => {
        const component = findByTestAtrr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });
});

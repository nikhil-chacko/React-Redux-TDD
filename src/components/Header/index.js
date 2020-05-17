import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ head }) => {
    return (
        <div data-test='HeadComponent'>
            <h1 data-test='Heading'>{head}</h1>
        </div>
    );
};

Header.propTypes = {
    head: PropTypes.string,
};

export default Header;

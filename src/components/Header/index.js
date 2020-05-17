import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ head }) => {
    return <div>{head}</div>;
};

Header.propTypes = {
    head: PropTypes.string,
};

export default Header;

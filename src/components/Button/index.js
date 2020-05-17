import React from 'react';
import PropTypes from 'prop-types';

const index = ({ buttonText }) => {
    return (
        <div data-test='ButtonComponent'>
            <button data-test='button'>{buttonText}</button>
        </div>
    );
};

index.propTypes = {
    buttonText: PropTypes.string,
};

export default index;

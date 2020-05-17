import React from 'react';
import PropTypes from 'prop-types';

const index = ({ buttonText, increaseCounter, decreaseCounter }) => {
    return (
        <div data-test='ButtonComponent'>
            {buttonText === 'Increment' ? (
                <button data-test='button' onClick={increaseCounter}>
                    {buttonText}
                </button>
            ) : (
                <button data-test='button' onClick={decreaseCounter}>
                    {buttonText}
                </button>
            )}
        </div>
    );
};

index.propTypes = {
    buttonText: PropTypes.string,
};

export default index;

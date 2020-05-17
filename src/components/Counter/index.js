import React from 'react';
import PropTypes from 'prop-types';

const index = ({ count }) => {
    return (
        <div>
            <h3>Counter :{count}</h3>
        </div>
    );
};

index.propTypes = {
    count: PropTypes.number,
};

export default index;

import React from 'react';
import PropTypes from 'prop-types';

const index = ({ title, desc }) => {
    return (
        <div data-test='PostComponent'>
            <h1 data-test='PostTitle'>{title}</h1>
            <p data-test='componentDesc'>{desc}</p>
        </div>
    );
};

index.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default index;

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Counter from './components/Counter';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

function App({ fetchPosts }) {
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const [counter, setCounter] = useState(0);

    const incCount = () => setCounter(counter + 1);
    const decCount = () => setCounter(counter - 1);

    return (
        <div className='App' data-test='appComponent'>
            <Header head='Posts' />
            <Counter count={counter} />
            <Button buttonText='Increment' increaseCounter={incCount} />
            <Button buttonText='Decrement' decreaseCounter={decCount} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};

export default connect(mapStateToProps, { fetchPosts })(App);

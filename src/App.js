import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Counter from './components/Counter';
import Post from './components/Post';
import { connect } from 'react-redux';
import { fetchPosts, fetchPost } from './actions';

function App({ fetchPosts, posts, fetchPost }) {
    useEffect(() => {
        fetchPosts();
        fetchPost(1);
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
            {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                    title,
                    desc: body,
                };
                return <Post key={index} {...configListItem} />;
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};

export default connect(mapStateToProps, { fetchPosts, fetchPost })(App);

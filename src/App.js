import React from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
    return (
        <div className='App' data-test='appComponent'>
            <Header head='Posts' />
            <Counter />
            <Button buttonText='Increment' />
            <Button buttonText='Decrement'></Button>
        </div>
    );
}

export default App;

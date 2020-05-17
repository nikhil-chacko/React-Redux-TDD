import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
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

export default App;

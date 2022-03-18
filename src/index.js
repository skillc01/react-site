import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function App2() {
    return(
        <h1>Second App</h1>
    )
}

ReactDOM.render(
    <>
        <App/>
        <App2/>
    </>,
    document.getElementById('root')
    
);

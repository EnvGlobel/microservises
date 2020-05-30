import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { CssBaseline } from '@material-ui/core';
import './index.css';

ReactDOM.render(
    <React.Fragment>
        <CssBaseline />
        <App />
    </React.Fragment>
    , document.getElementById('root'));
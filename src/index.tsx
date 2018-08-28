import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Main from './Main'
import { BrowserRouter } from 'react-router-dom';
import express from "cors"
// var app = express()

// const cors = require('cors')

// app.use(cors())

ReactDOM.render(
    <BrowserRouter>
        <Main/>
    </BrowserRouter>, 
    document.getElementById('root')
);


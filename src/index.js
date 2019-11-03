import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import './assets/styles/index.scss';
import './assets/styles/style.scss';
import './assets/styles/card.scss';

import AppLayout from './layout/applayout';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <Route component={AppLayout} />
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

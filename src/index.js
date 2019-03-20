import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/app';
import * as ServiceWorker from './service-worker';

import './global-style.scss';

ReactDOM.render(<App />, document.getElementById('root'));

// Learn more about service workers: https://bit.ly/CRA-PWA
ServiceWorker.unregister();

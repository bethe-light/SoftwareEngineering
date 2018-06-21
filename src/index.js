import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/Router.css';

import App from './componet/Home';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

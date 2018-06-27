import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//dataset pass into as a prop
let data = [89, 30, 25, 32, 72];
ReactDOM.render(<App data={data}/>, document.getElementById('root'));
registerServiceWorker();

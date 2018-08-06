import { React } from 'react';
import { ReactDOM } from 'react-dom';
import './index.css'
import App from App;
import registreServiceWorker from './registreServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registreServiceWorker();
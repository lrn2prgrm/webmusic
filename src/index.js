import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Recommended from './components/RecommendedPage'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routing from './Routing';
import {store} from './store/index';
import Loader from './components/container/main/loader';
import {Provider} from 'react-redux';
import Error from './components/container/main/Error';

ReactDOM.render(<Provider store={store}><div><Loader /><Routing /><Error /></div></Provider>, document.getElementById('root'));
registerServiceWorker();

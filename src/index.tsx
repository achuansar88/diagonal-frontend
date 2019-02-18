import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';

// Create a history of your choosing (we're using a browser history in this case)

import { Provider } from 'react-redux';
import { createStore } from 'redux';
// redux reducers
import { rootReducer } from './modules/shared/reducers/index';
import { StoreState } from './modules/shared/types/index';
import { RomanticComedies } from './modules/shared/actions';
import 'antd/dist/antd.css';

// demo
const store = createStore<StoreState,RomanticComedies,any,any>(rootReducer, {
  romanticComedies: []
});
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
        {/* refreshed */}
        <App />
    </Router>
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

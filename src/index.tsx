import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './redux/store';
import App from './App';
import './index.scss';

// this is a comment!

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

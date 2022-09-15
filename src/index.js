import React from 'react';
import react from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App'
import store from './app/store';
import 'antd/dist/antd.css'

{/* which means app will have the access towards the store Provider */}
ReactDOM.render(
<Router>
  <Provider store={store}>
  <App/>
  </Provider>
</Router>,document.getElementById('root')
)

// ReactDOM.render(<App />,document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/store";





ReactDOM.render(
  // store с помощью Provider передается в реакт компоненты
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));



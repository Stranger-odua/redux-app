import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";


const defaultState = {
  cash: 0,
}

// action = {type:'', payload:'?'}
// поле type обязательное внутри action, второй элемент обычно называют payload
// то как action будет изменять состояние определено внутри reducer

// reducer принимает состояние и экшн
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      // возвращаем НОВЫЙ ОБЪЕКТ состояния
      return {...state, cash: state.cash + action.payload}
    case 'GET_CASH':
      // возвращаем НОВЫЙ ОБЪЕКТ состояния
      return {...state, cash: state.cash - action.payload}
    default:
      // ВСЕГДА ПО-УМОЛЧАНИЮ возвращаем старый объект состояния, если состояние никак не изменялось
      return state
  }
}

// reducer передается в store
const store = createStore(reducer)



ReactDOM.render(
  // store с помощью Provider передается в реакт компоненты
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));



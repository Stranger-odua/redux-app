import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";


function App() {
  // чтобы как-то изменять состояние используем диспач, чтобы
  // получить его внутри компонента юзаем хук useDispatch
  const dispatch = useDispatch()
  // чтобы получить состояние юзаем хук useSelector параметром он принимает функцию, а эта
  // функция в свою очередь параметром принимает состояние
  const cash = useSelector(state => state.cash.cash)
  console.log(cash)


  const addCash = (cash) => {
    // в dispatch передали action, то как action будет изменять состояние определено внутри reducer
    dispatch({type:'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    // в dispatch передали action, то как action будет изменять состояние определено внутри reducer
    dispatch({type:'GET_CASH', payload: cash})
  }

  return (
    <div className="App">
      <div style={{fontSize: 28}}>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
      </div>
    </div>
  );
}


export default App;

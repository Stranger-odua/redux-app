import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncAction/customers";


function App() {
  // чтобы как-то изменять состояние используем диспач, чтобы
  // получить его внутри компонента юзаем хук useDispatch
  const dispatch = useDispatch()
  // чтобы получить состояние юзаем хук useSelector параметром он принимает функцию, а эта
  // функция в свою очередь параметром принимает состояние
  const cash = useSelector(state => state.cashRed.cash)
  const customers = useSelector(state => state.customersRed.customers)
  // console.log(cash)


  const addCash = (cash) => {
    // в dispatch передали action, то как action будет изменять состояние определено внутри reducer
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    // в dispatch передали action, то как action будет изменять состояние определено внутри reducer
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div style={{fontSize: 28}}>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
      </div>

      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div
              onClick={() => removeCustomer(customer)}
              style={{fontSize:'2rem', border:'1px solid black', padding:'5px', marginTop:'5px'}}>{customer.name}
            </div>
          )}
        </div>
        :
        <div style={{fontSize: '2rem'}}>
          Клиенты отсутствуют!
        </div>
      }
    </div>
  );
}


export default App;

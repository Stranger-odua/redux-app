import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


// const rootReducer = combineReducers({
//   cashReducer,
//   customerReducer
// })

const rootReducer = combineReducers({
  cashRed: cashReducer,
  customersRed: customerReducer
})

// при создании store вторым параметром можно передать как middleware так и инструменты
// разработчика redux devtool extension


//подключаем middleware redux-thunk для работы с асинх кодом
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
import {combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";


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

export const store = createStore(rootReducer, composeWithDevTools())
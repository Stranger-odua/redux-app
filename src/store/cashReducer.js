const defaultState = {
  cash: 0,
}


export const cashReducer = (state = defaultState, action) => {
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


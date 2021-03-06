import { BUY_DOSA, BUY_IDLI } from "../actions/restaurantActions";
const initalState = {
  dosaCount: 10,
  idliCount: 10,
};

// reducer = pure function. no side effects
const restaurant = (state = initalState, action) => {
  switch (action.type) {
    case BUY_DOSA:
      return { ...state, dosaCount: state.dosaCount - 1 };
    case "BUY_IDLI": {
      return { ...state, idliCount: state.idliCount - 1 };
    }
    // case BUY_IDLI:
    //   return { ...state, idliCount: state.idliCount - 1 };
    // case BUY_DOSA:
    //   return [
    //     ...state,
    //     {
    //       id: action.id,
    //       text: action.text,
    //       completed: false
    //     }
    //   ]
    // case 'TOGGLE_TODO':
    //   return state.map(todo =>
    //     (todo.id === action.id)
    //       ? {...todo, completed: !todo.completed}
    //       : todo
    //   )
    default:
      return state;
  }
};

export default restaurant;

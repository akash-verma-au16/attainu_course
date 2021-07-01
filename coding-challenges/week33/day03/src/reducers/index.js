import { counterTypes, dataTypes, itemsTypes } from '../actionTypes';

const initialState = {
  counter: 0,
  data: {},
  items: []
};

const reducers = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case counterTypes.increment:
      return {
        ...state,
        counter: state.counter+1
      }
    case counterTypes.decrement:
      return {
        ...state,
        counter: state.counter-1
      }
    case dataTypes.add:
      return {
        ...state,
        data: action.payload
      }
    case itemsTypes.add:
      return {
        ...state,
        items: [ ...state.items, action.payload ]
      }
    case itemsTypes.remove:
      return {
        ...state,
        items: state.items.filter(item => item.name !== action.payload)
      }
    default:
      return state;
  }
}

export default reducers;

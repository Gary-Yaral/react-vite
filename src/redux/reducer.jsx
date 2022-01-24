import { combineReducers } from 'redux';
import * as Types from './action-types';

export function itemsReducer(state = [], action) {

  switch (action.type) {
    case Types.ADD_TO_CART:
      let exists = state.find(item => item.id === action.payload.id);

      if (exists) {
        const newState= state.map(item => {
          if (item.id == action.payload.id) {
            item.quantity = item.quantity + 1;
          }

          return item;
        }) 

        return [...newState];
      }

      return [...state, {...action.payload, quantity:1}];
    
    default: return state;
  }
}


export const rootReducer = combineReducers({
  shop: itemsReducer
})

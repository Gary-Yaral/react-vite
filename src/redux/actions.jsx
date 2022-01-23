import * as Types from './action-types';

export const addToCart = (id) => {
  return {
    type: Types.ADD_TO_CART,
    payload: {
      id
    }
  }
}
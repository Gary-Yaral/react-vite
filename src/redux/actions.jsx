import * as Types from './action-types';

export const addToCart = (item) => {
  return {
    type: Types.ADD_TO_CART,
    payload: {...item}
  }
}
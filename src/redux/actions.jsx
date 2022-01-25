import * as Types from './action-types';

export const addToCart = (item) => {
  return {
    type: Types.ADD_TO_CART,
    payload: {...item}
  }
}

export const substractToCart = (id) => {
  return {
    type: Types.SUBSTRACT_TO_CART,
    payload: { id }
  }
}

export const removeItem = (id) => {
  return {
    type: Types.DELETE_ITEM,
    payload: { id }
  }
}

export const removeAll = () => {
  return {
    type: Types.REMOVE_ALL,
  }
}

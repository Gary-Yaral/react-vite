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

export const showPayment = () => {
  return {
    type: Types.SHOW_PAYMENT,
  }
}

export const hidePayment = () => {
  return {
    type: Types.HIDE_PAYMENT,
  }
}

export const searchItem = (data) => {
  return {
    type: Types.SEARCH_ITEM,
    payload:{
      data
    }
  }
}

export const loadSections = (array) => {
  return {
    type: Types.LOAD_DATA,
    payload: array
  }
}

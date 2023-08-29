import { ADD_TO_CART, REMOVE_FROM_CART } from './constant';

function addToCart(item){
  return{
    type: ADD_TO_CART,
    data: item
  }
}

function removeFromCart(item){
  return{
    type: REMOVE_FROM_CART,
    data: item
  }
}

export { addToCart, removeFromCart };
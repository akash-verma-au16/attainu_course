import { GET_PRODUCTS } from './types';

export const getproducts = () => async (dispatch) => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  } catch (err) {
    console.log('Error :', err);
  }
};

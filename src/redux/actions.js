import { addItemToCart } from './action-types';

export const addItemToCartAction = item => ({
    type: addItemToCart,
    payload: item
});
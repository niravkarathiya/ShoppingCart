import { createAction, props } from '@ngrx/store';
import { Products } from '../modal/product';

export const LOAD_PRODUCT = '[product page] load products';
export const LOAD_PRODUCT_SUCCESS = '[product page] load products success';
export const ADD_TO_CART = '[product page] Add to cart';

export const loadProduct = createAction(LOAD_PRODUCT);
export const loadProductSuccess = createAction(LOAD_PRODUCT_SUCCESS, props<{ product: Products[] }>());



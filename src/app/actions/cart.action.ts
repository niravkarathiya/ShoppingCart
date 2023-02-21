import { createAction, props } from '@ngrx/store';
import { Products } from '../modal/product';

export const addToCart = createAction('[Cart Component] Add to cart', props<{ cartProduct: Products }>());
export const removeFromCart = createAction('[Cart Component] Remove From cart', props<{ cartProduct: Products }>());
export const getAllCartItems = createAction('[Header Component] Get all Cart Items');
export const updateCart = createAction('[Cart Component] Update cart', props<{ cartProduct: Products }>());
export const deleteCartItem = createAction('[Cart Component] Delete Cart Item', props<{ cartProduct: Products }>());


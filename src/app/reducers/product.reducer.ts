import { createReducer, on } from '@ngrx/store';
import { loadProductSuccess } from '../actions/product.action';
import { Products } from '../modal/product';

export const initialProductState: ReadonlyArray<Products> = [];

export const featureKey = {
    productFeatureKey: 'Product',
    cartFeatureKey: 'Cart'
}


export const productReducer = createReducer(initialProductState,
    on(loadProductSuccess, (state: any, { product }) => {
        return {
            ...state,
            product
        };
    }),
);
import { createReducer, on } from '@ngrx/store';
import { addToCart, deleteCartItem, getAllCartItems, removeFromCart, updateCart } from '../actions/cart.action';
import { CartData } from '../modal/product';

export let initialProductState: CartData[] = [];
export let initialProductInCart = 0



export const productInCartReducer = createReducer(initialProductState,
    on(addToCart, (state, { cartProduct }) => {
        const cartData = cloneDeep(state);
        cartProduct.quantity = cartProduct.quantity + 1;
        return {
            ...state,
            product: [
                ...cartData?.product ?? [],
                cartProduct
            ]
        };
    }),

    on(removeFromCart, (state, { cartProduct }) => {
        const cartData = cloneDeep(state);
        cartData.product.forEach((item: any) => {
            if (item.id === cartProduct.id) {
                item.quantity -= 1;
            }
            const index = cartData.product.findIndex((i: any) => i.id == item.id);
            if (item.quantity <= 0) {
                cartData.product.splice(index, 1);
            }
        })
        return {
            ...cartData,
        };
    }),

    on(getAllCartItems, (state) => {
        return {
            ...state,
        };
    }),

    on(updateCart, (state, { cartProduct }) => {
        const cartData = cloneDeep(state);
        cartData.product.forEach((item: any) => {
            if (item.id === cartProduct.id) {
                item.quantity += 1;
            }
        })
        return {
            ...cartData,
        };
    }),

    on(deleteCartItem, (state, { cartProduct }) => {
        const cartData = cloneDeep(state);
        const index = cartData.product.findIndex((item: any) => item.id == cartProduct.id)
        cartData?.product?.splice(index, 1);
        return {
            ...cartData,
        };
    }),
);



function cloneDeep(obj: any) {
    if (obj) {
        return JSON.parse(JSON.stringify(obj));
    }
}



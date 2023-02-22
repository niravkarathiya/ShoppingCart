import { createEntityAdapter } from "@ngrx/entity";
import { Products } from "../modal/product";

export interface ProductState {
    products: Products[];
};

export const initialState: ProductState = {
    products: []
}


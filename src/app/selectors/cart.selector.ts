import { createFeatureSelector } from "@ngrx/store";
import { CartData } from "../modal/product";
import { featureKey } from "../reducers/product.reducer";

export const getItemCount = createFeatureSelector<number>(featureKey.cartFeatureKey);
export const getProductInCart = createFeatureSelector<CartData>(featureKey.cartFeatureKey);
export const getAllCartItem = createFeatureSelector<CartData>(featureKey.cartFeatureKey);



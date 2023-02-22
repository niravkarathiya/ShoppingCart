import { createFeatureSelector } from "@ngrx/store";
import { Products } from "../modal/product";
import { featureKey } from "../reducers/product.reducer";

export const getProduct = createFeatureSelector<Products[]>(featureKey.productFeatureKey);



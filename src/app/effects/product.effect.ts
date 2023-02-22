import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { createEffect } from "@ngrx/effects";
import { ProductService } from "../services/product.service";
import { loadProduct, loadProductSuccess } from "../actions/product.action";
import { filter, map, mergeMap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { getProduct } from "../selectors/product.selector";

@Injectable()
export class ProductEffect {
    constructor(private actions$: Actions, private productService: ProductService, private store: Store) { }

    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadProduct),
            withLatestFrom(this.store.select(getProduct)),
            filter(([action, list]) => !list || list.length === 0),
            mergeMap(() => {
                return this.productService.getProduct().pipe(map((product: any) => {
                    product.forEach((item: any) => {
                        item.quantity = item.quantity || 0;
                        item.rating.rate = Math.round(item.rating.rate);
                    });
                    return loadProductSuccess({ product })
                }));
            })
        );
    });

}
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { addToCart, deleteCartItem, getAllCartItems, removeFromCart, updateCart } from 'src/app/actions/cart.action';
import { loadProduct } from 'src/app/actions/product.action';
import { CartData, Products } from 'src/app/modal/product';
import { getAllCartItem } from 'src/app/selectors/cart.selector';
import { getProduct } from 'src/app/selectors/product.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Products[] = [];
  cartCount!: number;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(loadProduct());
    this.getAllProducts();
    this.getCartData();
  }

  getAllProducts() {
    this.store.pipe(select(getProduct)).subscribe((res: any) => {
      this.products = res.product;
    })
  }

  getCartData() {
    this.store.pipe(select(getAllCartItem)).subscribe((res: CartData) => {
      res.product?.forEach(item => {
        const index = this.products.findIndex(i => i.id === item.id);
        this.products[index].quantity = item.quantity;
      })
      if (!res.product?.length) {
        this.products = this.products?.map((res: Products) => {
          res.quantity = 0;
          return res;
        })
      }
    });
  }

  addToCart(product: Products) {
    this.store.dispatch(addToCart({ cartProduct: product }));
    this.store.dispatch(getAllCartItems());
  }

  updateItemCart(product: Products) {
    this.store.dispatch(updateCart({ cartProduct: product }));
    this.store.dispatch(getAllCartItems());
  }

  removeItem(product: Products) {
    if (product.quantity == 1) {
      this.store.dispatch(deleteCartItem({ cartProduct: product }));
      product.quantity = 0
      return;
    }
    this.store.dispatch(removeFromCart({ cartProduct: product }));
    this.store.dispatch(getAllCartItems());
  }

  cloneDeep(obj: any) {
    if (obj) {
      return JSON.parse(JSON.stringify(obj));
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { deleteCartItem, getAllCartItems, removeFromCart, updateCart } from 'src/app/actions/cart.action';
import { CartData, Products } from 'src/app/modal/product';
import { getAllCartItem } from 'src/app/selectors/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems!: Products[];

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.pipe(select(getAllCartItem)).subscribe((res: CartData) => {
      this.cartItems = res.product
    });
  }

  removeItem(product: Products) {
    this.store.dispatch(removeFromCart({ cartProduct: product }));
    this.store.dispatch(getAllCartItems());
  }

  updateItemCart(product: Products) {
    this.store.dispatch(updateCart({ cartProduct: product }));
    this.store.dispatch(getAllCartItems());
  }

  deleteItem(product: Products) {
    this.store.dispatch(deleteCartItem({ cartProduct: product }));
    this.store.dispatch(getAllCartItems());

  }
}

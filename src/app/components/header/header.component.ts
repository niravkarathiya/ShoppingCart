import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CartData } from 'src/app/modal/product';
import { getAllCartItem } from 'src/app/selectors/cart.selector';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private store: Store) { }

  count = 0;

  ngOnInit() {
    this.store.pipe(select(getAllCartItem)).subscribe((res: CartData) => {
      this.count = res.product?.length
    });
  }

  openCart() {
    this.router.navigate(['/cart']);
  }
  goToProductPage() {
    this.router.navigate(['/']);
  }
}

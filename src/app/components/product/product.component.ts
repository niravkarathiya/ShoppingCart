import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: any;
  isLoading = false;

  constructor(private productService: ProductService) {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    setTimeout(() => { // adding setTimeOut() only for loader things as of now
      this.productService.getProduct().subscribe((res: any) => {
        res.forEach((element: any) => {
          element.rating.rate = Math.round(element.rating.rate)
        });
        this.products = res;
        this.isLoading = false;
        console.log(res);
      })
    }, 1500);

  }

  addToCart() {

  }

}

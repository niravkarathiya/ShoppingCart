import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Products } from '../modal/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProduct(): Observable<Products[]> {
    return this.httpClient.get<Products[]>('https://fakestoreapi.com/products')
  }
}

import { Injectable } from '@angular/core'; 
import {products} from './Products'
import {of} from 'rxjs'
@Injectable({
  providedIn:'root'
})
export class ProductService{
  constructor(){

  }
  getProducts(){
    return of(products);
  }
}
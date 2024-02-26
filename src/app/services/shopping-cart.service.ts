import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shoppingCartList: Product[] = [];
  cartTotal: number = 0;
  constructor() { }

  getProductsInCart() {
    console.log('insidde cart service, getProductsInCart()=', this.shoppingCartList);
    return this.shoppingCartList;
  }

  addProduct(product: Product) {    
    this.shoppingCartList.push(product);
    console.log('insidde cart service, addProduct()=', this.shoppingCartList);
    return this.shoppingCartList;
  }
  clearProduct(product: Product) {
    //use filter to remove the product from the list
    this.shoppingCartList = this.shoppingCartList.filter(item => item.id !== product.id);
    console.log('shoppingCartList=', this.shoppingCartList);
    return this.shoppingCartList;
  }
}

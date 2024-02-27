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
    //check if product is already in the list
    let productExists = false;
    for(let i in this.shoppingCartList) {
      if(this.shoppingCartList[i].id === product.id) {
        this.shoppingCartList[i].quantity++;
        productExists = true;
        break;
      }
    }
    //if product is not in the list, add it
    if(!productExists) {
      product.quantity = 1;
      this.shoppingCartList.push(product);
    }   

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

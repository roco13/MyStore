import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shoppingCartList: Product[] = [];
  options: string[] = ['1','2','3','4','5','6','7','8','9','10'];
  cartTotal: number = 0;
  userName: string = '';

  cartSubject = new Subject<Product[]>();
  cartTotalSubject = new Subject<number>();
  productQuantity: number = 1;
  // Observable for shoppingCartList
  shoppingCartList$ = this.cartSubject.asObservable();
  // Observable for cartTotal
  cartTotal$ = this.cartTotalSubject.asObservable();
  

  constructor() { }

  getProductsInCart() {
    console.log('insidde cart service, getProductsInCart()=', this.shoppingCartList);
    return this.shoppingCartList;
  }

  addProductToCart(product: Product) { 
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
      //product.quantity = 1;//???
      this.shoppingCartList.push(product);
      console.log('shoppingCartList=', this.shoppingCartList);
    }   

    console.log('inside cart service, addProductToCart()=', this.shoppingCartList);
    return this.shoppingCartList;
  }

  clearProduct(product: Product) {
    //use filter to remove the product from the list
    console.log('inside clearProduct(), remove product from cart=', product);
    this.shoppingCartList = this.shoppingCartList.filter(item => item.id !== product.id);
    console.log('shoppingCartList=', this.shoppingCartList);
    this.cartSubject.next(this.shoppingCartList);
    console.log('shoppingCartList in clearProduct() SERVICE=', this.shoppingCartList);
    return this.shoppingCartList;
  }
  
  getTotal():number {
    //reset to 0
    this.cartTotal = 0;
    this.shoppingCartList.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
      
    })
    
    this.cartTotalSubject.next(this.cartTotal);
    console.log('cartTotal in getTotal() SERVICE=', this.cartTotal);
    return this.cartTotal;
  }

  getUserName(name: string) {
    this.userName = name;
  }

  clearCart() {
    this.shoppingCartList = [];
    this.cartTotal = 0;
  }
}

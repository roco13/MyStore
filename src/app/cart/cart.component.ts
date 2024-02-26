import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Product } from '../models/Product';
import { Cart } from '../models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProductList: Cart[] = [];
  cartTotal: number = 0;
  constructor(private shoppingCartService: ShoppingCartService ) { }

  ngOnInit(): void {
    this.cartProductList = this.shoppingCartService.getProductsInCart();

    this.cartProductList.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
    })
  }

  // addToCart(product: Product) {
  //   this.shoppingCartService.addProduct(product);
  //   alert('Product added to cart');
  // }
  clearProduct(product: Cart): void {
    this.shoppingCartService.clearProduct(product);
    alert("Cleared!");
  }
}

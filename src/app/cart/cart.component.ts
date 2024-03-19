import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProductList: Product[] = [];
  cartTotal: number = 0;
  options: string[] = [];
  constructor(private shoppingCartService: ShoppingCartService ) { }

  ngOnInit(): void {
    this.cartProductList = this.shoppingCartService.getProductsInCart();
    console.log('cartProductList in cart component=', this.cartProductList);

    //display the initial cart total
    this.cartTotal = this.shoppingCartService.getTotal();

    //to update the cart total when quantity is changed
    this.shoppingCartService.cartTotal$.subscribe(total => {
      console.log('Updated cart total:', total);
      this.cartTotal = total;
    });
    this.options = this.shoppingCartService.options;
    console.log('options in cart component=', this.options);
    
  }

  // addToCart(product: Product) {
  //   this.shoppingCartService.addProductToCart(product);
  //   alert('Product added to cart');
  // }


  removeProduct(product: Product): void {
    // this.cartProductList = this.shoppingCartService.clearProduct(product);
    
    // this.shoppingCartService.shoppingCartList$.subscribe(productList => {
    //   console.log('Updated shopping cart list:', productList);
    //   this.cartProductList = productList;
    // });
    this.cartProductList= this.cartProductList.filter(item => item.id !== product.id);
    alert("Cleared!");
  }
}

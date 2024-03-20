import { Component, OnInit} from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Router } from '@angular/router';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProductList: Product[] = [];
  cartTotal: number = 0;
  options: string[] = [];
  userName: string = '';
  userAddress: string = '';
  userCC?: number;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router ) { }

  ngOnInit(): void {
    this.cartProductList = this.shoppingCartService.getProductsInCart();
    //display the initial cart total
    this.cartTotal = this.shoppingCartService.getTotal();

    //to update the cart total when quantity is changed
    this.shoppingCartService.cartTotal$.subscribe(total => {
      console.log('Updated cart total:', total);
      this.cartTotal = total;
    });
    this.options = this.shoppingCartService.options;
  }

  removeProduct(product: Product): void {
    this.shoppingCartService.clearProduct(product);
    this.cartProductList = this.shoppingCartService.getProductsInCart();
    this.cartTotal= this.shoppingCartService.getTotal();
    alert("Cleared!");
  }

  submitOrder() {
    this.shoppingCartService.getUserName(this.userName);
    this.router.navigate(['/confirmation']);
  }
}

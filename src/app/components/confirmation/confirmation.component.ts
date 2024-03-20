import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  cartTotal: number = 0;
  userName: string = '';
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.userName = this.shoppingCartService.userName;
    this.cartTotal = this.shoppingCartService.getTotal();
    this.shoppingCartService.clearCart();
  }

}

import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';
import { MessengerService } from '../services/messenger.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  //@Output() setQuantity: EventEmitter <Number> = new EventEmitter; 
  
 // @Output() addToCartEvent: EventEmitter<Product> = new EventEmitter<Product>();
  
  constructor(private msg: MessengerService, private shoppingCartService: ShoppingCartService) {
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      url: '',
      quantity: 1
    };
   }

  ngOnInit(): void {

  }

  handleAddToCart() {
    console.log('this.product inside product-item', this.product);
     //this.msg.sendMsg(this.product)
    this.shoppingCartService.addProduct(this.product)
  }
  setQuantity(quantity: number) {
    // Handle the quantity here
    console.log(quantity);
  }


  // handleSelection(product: Product): void {
  //   //this.setQuantity = e.target.value;
  //   //onUpdate( book, book.shelf);
  //   this.setQuantity.emit();
  // }

}

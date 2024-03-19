import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() productQuantity: number = 1;
  @Input() options: string[] = ['1','2','3','4','5','6','7','8','9','10'];
  cartTotal: number = 0;

  @Input() showImgLink?: boolean;
  @Input() showProductDescription?: boolean;
  @Input() showAddProductButton?: boolean;
  @Input() showRemoveProductButton?: boolean;

  @Output() removeProduct: EventEmitter<Product> = new EventEmitter();
  
  constructor(private shoppingCartService: ShoppingCartService) {
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
    this.shoppingCartService.addProductToCart(this.product);  
    alert('Product added to cart');
  }

  handleRemoveFromCart(){
    this.removeProduct.emit(this.product);
  }

  changeQuantity(quantity: number) {
    this.product.quantity = quantity;
    this.cartTotal = this.shoppingCartService.getTotal();
  }

}

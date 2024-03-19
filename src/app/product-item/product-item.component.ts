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
  //@Input() options: string[] = [];
  //selectedOption: string = '';
  cartTotal: number = 0;

  @Input() showImgLink?: boolean;
  @Input() showProductDescription?: boolean;
  @Input() showAddProductButton?: boolean;
  @Input() showRemoveProductButton?: boolean;

  @Output() removeProduct: EventEmitter<Product> = new EventEmitter();
  //@Output() setQuantity: EventEmitter <Number> = new EventEmitter; 
  
 // @Output() addToCartEvent: EventEmitter<Product> = new EventEmitter<Product>();
  
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
  // this.options = this.shoppingCartService.options;
  // this.options.shift()
  // console.log('options in product-item=', this.options);
  }

  handleAddToCart() {
    //console.log('this.product inside product-item', this.product);
    console.log('this.product inside product-item quantity', this.product.quantity);

    this.shoppingCartService.addProductToCart(this.product)
    console.log('this.product inside product-item quantity', this.product.quantity);
  
    alert('Product added to cart');

  }
  handleRemoveFromCart(){
    // this.shoppingCartService.clearProduct(this.product);
    // alert('Product removed from cart');
    this.removeProduct.emit(this.product);
  }

  changeQuantity(quantity: number) {
    // Handle the quantity here
    console.log('quantity=', quantity);
    console.log("calculatetotal here")
    this.product.quantity = quantity;
    console.log('tring to updat total on change of quantity');
    this.cartTotal = this.shoppingCartService.getTotal();
    console.log('cartTotal on change Quan=', this.cartTotal);

  }


}

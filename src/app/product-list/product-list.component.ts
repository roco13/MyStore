import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  quantity: number = 1;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      for(let i = 0; i < res.length; i++) {
        const product = res[i]
        product.quantity = this.quantity;
      }
      this.productList = res;
    });
  }
  // addToCart(product: Product) {
  //   this.shoppingCartService.addProduct(product);
  //   console.log('product added to cart', product);
  //   alert('Product added to cart');
  // }
}

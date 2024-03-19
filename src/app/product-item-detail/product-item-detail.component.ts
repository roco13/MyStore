import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  productList: Product[] = [];
  options: string[] = [];
  product: Product;
  quantity: number = 1;

  constructor(private shoppingCartService: ShoppingCartService, private productService: ProductService, private route: ActivatedRoute) { 
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
    this.options = this.shoppingCartService.options;
    
    this.productService.getProducts().subscribe(res => {
      const id = this.route.snapshot.paramMap.get('id')
      console.log('id==', id, typeof id);
      
      this.productList = res;
      this.product = res.filter(item => item.id ==  Number(id))[0];
      console.log('product item detail', this.product);
      this.product.quantity = this.quantity;
    });
  }

}

import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-update-quantity',
  templateUrl: './update-quantity.component.html',
  styleUrls: ['./update-quantity.component.css']
})
export class UpdateQuantityComponent implements OnInit {
  quantity: number = 1
  
  @Output() setQuantity: EventEmitter <number> = new EventEmitter;
  constructor() { }
  //@Input() options: string[] = [];
  @Input() product!: Product;
  selectedOption: string = "";

  ngOnInit(): void {
  }

  submitForm():void {
    // const product = {
    //   id: 1,
    //   name: "",
    //   price: 0, 
    //   description: "",
    //   quantity: this.quantity
    // }
    console.log('product in update quantity', this.product);
    console.log("product.quantity in update-quantity component", this.product.quantity)
    this.setQuantity.emit(this.product.quantity);
    console.log("after emitter product.quantity",this.product.quantity)

  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes in update queantity', changes);
    // if (changes.['options'] && changes.['options'].currentValue) {
    //   // If there are new options and the currently selected option is not one of them, reset the selection
    //   if (this.selectedOption && !changes.['options'].currentValue.includes(this.selectedOption)) {
    //     this.selectedOption = changes.['options'].currentValue[0];
    //   }
    // }
  }



}

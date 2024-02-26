import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-quantity',
  templateUrl: './update-quantity.component.html',
  styleUrls: ['./update-quantity.component.css']
})
export class UpdateQuantityComponent implements OnInit {
  quantity: number = 1
  
  @Output() setQuantity: EventEmitter <number> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  submitForm():void {
    const product = {
      id: 1,
      name: "",
      price: 0, 
      description: "",
      quantity: this.quantity
    }
    console.log('product', product);
    console.log("product.quantity", product.quantity)
    this.setQuantity.emit(product.quantity);
    console.log("after emitter product.quantity", product.quantity)

  }

}

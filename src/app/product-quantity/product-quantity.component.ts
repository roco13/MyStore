import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnChanges {

  @Input() options: string[] = ['1','2','3','4','5','6','7','8','9','10'];
  selectedOption: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options']) {
      // If there are new options and the currently selected option is not one of them, reset the selection
       console.log('changes', changes);
       console.log('this.selectedOption', this.selectedOption);
      console.log('this.options', this.options);
      //console.log("changes.options.currentValue", changes.['options'].currentValue)
      if (this.selectedOption && !this.options.includes(this.selectedOption)) {
        this.selectedOption = this.options[0];
      }
    }
  }

}


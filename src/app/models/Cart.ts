export class Cart {
    id: number;
    name: string;
    price: number;
    description: string;
    url: string;
    quantity: number;
  
    constructor() {
      this.id = 0;
      this.name = '';
      this.price = 0;
      this.description = '';
      this.url = '',
      this.quantity = 0;
    }
  }
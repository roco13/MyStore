import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]> {
    //make get request to the data.json file in the assets folder and return an observable
    return this.http.get<Product[]>(`./assets/data.json`);
    
  }
}
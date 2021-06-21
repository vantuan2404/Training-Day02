import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  listProduct = [];
  constructor() { }


  setProduct(data){
    this.listProduct.push(data)
  }


}

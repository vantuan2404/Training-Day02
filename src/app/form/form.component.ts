import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() code: any;
  @Input() name: string;
  @Input() price: number;
  id = 0;
  @Input() product:any;
  color = '';

  constructor(private _Service: ServiceService) { }

  ngOnInit(): void {
  }

  addProduct(){
   this.product = {
      id: this.id += 1,
      code: this.code,
      name: this.name,
      price: this.price
    }
    this._Service.setProduct(this.product)

  }

  toggleColor(){
    this.color = 'red';
  }

}

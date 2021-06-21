import { Component, OnInit, OnChanges } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  list = [];

  constructor(private _Service: ServiceService) { }

  ngOnInit(): void {
    this.list = this._Service.listProduct;
  }

  ngOnChanges(){
  }


}

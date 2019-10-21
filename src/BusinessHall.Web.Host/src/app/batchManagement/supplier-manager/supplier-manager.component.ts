import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/primeng';

import { Supplier, SupplierStatusEnum } from '../../../shared/models/supplier';

@Component({
  selector: 'app-supplier-manager',
  templateUrl: './supplier-manager.component.html',
  styleUrls: ['./supplier-manager.component.css']
})
export class SupplierManagerComponent implements OnInit {


  datas: Supplier[];

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;
  first: number = 0;

  constructor() { }

  ngOnInit() {
    this.sortOptions = [
      { label: 'Newest First', value: '!cretionTime' },
      { label: 'Oldest First', value: 'cretionTime' }
    ];
    this.loadTestData();
  }

  loadTestData() {
    let tmpArray: Supplier[] = [];
    for (let index = 0; index < 50; index++) {
      let model: Supplier = new Supplier();
      model.id = index + 1;
      model.name = "Supplier" + model.id.toString();
      model.cretionTime = new Date();
      model.isAutoReturnMoney = (index % 2 == 0 ? true : false);
      model.status = SupplierStatusEnum.Close;
      if (model.isAutoReturnMoney) {
        model.status = SupplierStatusEnum.Open;
      }
      tmpArray.push(model);
    }
    this.datas = tmpArray;
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  reset() {
    this.first = 0;
  }

}

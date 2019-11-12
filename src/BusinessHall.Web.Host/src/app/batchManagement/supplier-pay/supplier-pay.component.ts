import { Component, Injector, AfterViewInit, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { MatDialog } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as Enumerable from 'linq';
import * as moment from 'moment';

import { SelectItem } from 'primeng/primeng';
import { DialogData } from '@shared/models/dialogInputData';
import { ListResultDto } from '@shared/serviceHelpers/service-helper.service';

import { CreateSupplierPayComponent } from './create-supplier-pay/create-supplier-pay.component';


import {
  BasicDataService,
  ProvinceDto, CityDto, AreaDto, EthnicGroupDto, TenantDto
} from '@shared/basicDataServices/basic-data-service.service';

import { ProductService } from '@shared/productServices/product.service';
import { SupplierManagerService } from '@shared/supplierServices/supplier-manager.service';


import { SupplierDto, SupplierAccountDto, SupplierPayDto, SupplierStatusEnum, SupplierPaySearchCondition } from '@shared/models/supplier';
import { AgentDto, AgentAccountDto } from '@shared/models/agent';

@Component({
  selector: 'app-supplier-pay',
  templateUrl: './supplier-pay.component.html',
  styleUrls: ['./supplier-pay.component.css'],
  animations: [appModuleAnimation()]
})
export class SupplierPayComponent extends AppComponentBase implements OnInit {
  constructor(
    injector: Injector,
    private _dialog: MatDialog,
    private _productService: ProductService,
    private _supplierManagerService: SupplierManagerService
  ) {
    super(injector);
    this.searchCondition = new SupplierPaySearchCondition();
    let currentDay: Date = new Date();
    this.searchCondition.startDate = currentDay;
    let year: number = currentDay.getFullYear();
    let month: number = currentDay.getMonth() + 1;
    let days: number = currentDay.getDate() + 8;
    let currentDay7: Date = new Date(moment().add(7, 'days').toLocaleString());
    this.searchCondition.endDate = currentDay7;
  }

  searchCondition: SupplierPaySearchCondition = new SupplierPaySearchCondition();

  records: SupplierPayDto[];
  selectedRecords: SupplierPayDto[];

  supplierList: SupplierDto[] = [];
  statusList: SelectItem[] = [];


  cityList: CityDto[] = [];
  cityListAll: CityDto[] = [];


  selectedSupplierList: SupplierDto[] = [];
  selectedStatus: any[] = [];

  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;
  first: number = 0;
  cols: any[];
  columns: any[];
  exportColumns: any[];


  ngOnInit() {
    this.sortOptions = [
      { label: 'Newest First', value: '!creationTime' },
      { label: 'Oldest First', value: 'creationTime' }
    ];
    this.initialColumns();
    this.loadSupplierPayDatas();
    this.loadSupplierDatas();
  }


  loadSupplierDatas() {
    this._supplierManagerService.GetAll().subscribe(result => {
      if (result) {
        this.supplierList = result["items"];
      }
    });
  }



  initialColumns() {
    this.cols = [
      { field: 'supplierName', header: this.l('SupplierName') },
      { field: 'totalValue', header: this.l('Amount') },
      { field: 'createUserName', header: this.l('CreateUserName') },
      { field: 'creationTime', header: this.l('CreationTime') }
    ];
    this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
  }


  loadSupplierPayDatas() {
    abp.ui.setBusy();
    this.searchCondition.selectedSupplierIds = [];
    if (this.selectedSupplierList && this.selectedSupplierList.length) {
      this.searchCondition.selectedSupplierIds = Enumerable.from(this.selectedSupplierList).select(x => x.id).distinct().toArray();
    }
    this._supplierManagerService.GetAllSupplierPayByConditions(this.searchCondition).subscribe(data => {
      abp.ui.clearBusy();
      let result: ListResultDto = data as ListResultDto;
      if (result) {
        this.records = result.items as SupplierPayDto[];
      }
    });
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

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.records);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      let date: Date = new Date();
      let excelFilename: string = date.toLocaleDateString();
      this.saveAsExcelFile(excelBuffer, excelFilename);
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }

  handleChange($event, rowData: SupplierPayDto) {
    console.log(rowData);
  }

  refresh() {
    this.loadSupplierPayDatas();
    this.selectedRecords = [];
    this.selectedStatus = [];
    this.selectedSupplierList = [];
  }

  create(): void {
    this.showCreateOrEditUserDialog();
  }

  edit(item: SupplierPayDto): void {
    this.showCreateOrEditUserDialog(item.id, item);
  }

  delete(item: SupplierPayDto) {
    abp.message.confirm(
      this.l('UserDeleteWarningMessage', item.name),
      (result: boolean) => {
        if (result) {
          this._productService.DeleteProduct(item.id).subscribe(() => {
            let index: number = Enumerable.from(this.records).indexOf(x => x.id == item.id);
            this.records.splice(index, 1);
          });
        }
      }
    );
  }

  deleteMultiple() {
    abp.message.confirm(
      this.l('UserDeleteWarningMessage', ""),
      (result: boolean) => {
        if (result) {
          let ids: number[] = Enumerable.from(this.selectedRecords).select(x => x.id).toArray();
          this._productService.DeleteForMultipleProducts(ids).subscribe(() => {
            ids.forEach(element => {
              let index: number = Enumerable.from(this.records).indexOf(x => x.id == element);
              this.records.splice(index, 1);
            });
            this.selectedRecords = [];
          });
        }
      }
    );
  }

  private showCreateOrEditUserDialog(id?: number, item?: SupplierPayDto): void {
    let createOrEditUserDialog;

    let data: DialogData = new DialogData();
    data.supplierList = this.supplierList;
    data.id = id;
    data.inputModel = item;
    createOrEditUserDialog = this._dialog.open(CreateSupplierPayComponent, {
      data: data
    });

    createOrEditUserDialog.afterClosed().subscribe(result => {
      let newArray: SupplierPayDto[] = this.records;
      let returnValue: SupplierPayDto = result as SupplierPayDto;
      if (returnValue) {
        if (id) {
          //edit
          this.records.forEach(element => {
            if (element.id == returnValue.id) {
              element.supplierId = returnValue.supplierId;
              element.supplierName = returnValue.supplierName;
              element.totalValue = returnValue.totalValue;
              return;
            }
          });
        }
        else {
          if (!newArray) {
            newArray = [];
          }
          newArray.push(result);
          this.records = newArray;
        }
      }
    });
  }


  supplierListonPanelHide(event) {

  }

  provinceListonPanelHide(event) {
    //this.getCityByProviceIds(this.selectedProvinceList);
  }

  getCityByProviceIds(inputSelectedProvinceList: ProvinceDto[]) {
    let tmpDatas: CityDto[] = this.cityListAll;
    if (inputSelectedProvinceList && inputSelectedProvinceList.length) {
      let pIds: string[] = Enumerable.from(inputSelectedProvinceList).select(x => x.provinceId).toArray();
      tmpDatas = Enumerable.from(this.cityListAll).where(x => pIds.indexOf(x.provinceId) >= 0).toArray();
    }
    this.cityList = tmpDatas;
  }

  search() {
    this.loadSupplierPayDatas();
  }

}


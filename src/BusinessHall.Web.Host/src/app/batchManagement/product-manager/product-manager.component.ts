import { Component, Injector, AfterViewInit, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { MatDialog } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as Enumerable from 'linq';

import { SelectItem } from 'primeng/primeng';
import { DialogData } from '@shared/models/dialogInputData';
import { ListResultDto } from '@shared/serviceHelpers/service-helper.service';


import { CreateProductComponent } from './create-product/create-product.component';


import {
  BasicDataService,
  ProvinceDto, CityDto, AreaDto, EthnicGroupDto, TenantDto
} from '@shared/basicDataServices/basic-data-service.service';

import { ProductService } from '@shared/productServices/product.service';
import { SupplierManagerService } from '@shared/supplierServices/supplier-manager.service';
import { OperatorService } from '@shared/operatorServices/operator.service';



import { SupplierDto, SupplierAccountDto, SupplierPayDto, SupplierStatusEnum } from '@shared/models/supplier';
import { AgentDto, AgentAccountDto } from '@shared/models/agent';
import { ProductDto, ProductFaceValueDto, ProductOperatorDto, FaceValueDto, OperatorDto, ProductStatusEnum, UpdateProductStatusDto } from '@shared/models/product';



@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css'],
  animations: [appModuleAnimation()]
})
export class ProductManagerComponent extends AppComponentBase implements OnInit {
  constructor(
    injector: Injector,
    private _dialog: MatDialog,
    private _basicDataService: BasicDataService,
    private _productService: ProductService,
    private _supplierManagerService: SupplierManagerService,
    private _operatorService: OperatorService
  ) {
    super(injector);
  }


  records: ProductDto[];
  selectedRecords: ProductDto[];

  supplierList: SupplierDto[] = [];
  provinceList: ProvinceDto[] = [];
  operatorList: OperatorDto[] = [];
  faceValueList: FaceValueDto[] = [];
  statusList: SelectItem[] = [];


  cityList: CityDto[] = [];
  cityListAll: CityDto[] = [];


  selectedSupplierList: SupplierDto[] = [];
  selectedProvinceList: ProvinceDto[] = [];
  selectedCityList: CityDto[] = [];
  selectedOperatorList: OperatorDto[] = [];
  selectedFaceValueList: FaceValueDto[] = [];
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
    this.loadProductDatas();
    this.loadProvinceList();
    this.loadCityList();
    this.loadSupplierDatas();
    this.loadStatusData();
    this.loadOperatorDatas();
    this.loadFaceValueDatas();
  }


  loadSupplierDatas() {
    this._supplierManagerService.GetAll().subscribe(result => {
      if (result) {
        this.supplierList = result["items"];
      }
    });
  }

  loadOperatorDatas() {
    this._operatorService.GetAllOperators().subscribe(result => {
      if (result) {
        this.operatorList = result["items"];
      }
    });
  }

  loadFaceValueDatas() {
    this._productService.GetAllFaceValues().subscribe(result => {
      if (result) {
        this.faceValueList = result["items"];
      }
    });
  }


  initialColumns() {
    this.cols = [
      { field: 'province', header: this.l('Province') },
      { field: 'operatorName', header: this.l('Operator') },
      { field: 'faceValue', header: this.l('FaceValue') },
      { field: 'supplierName', header: this.l('Supplier') },
      { field: 'discount', header: this.l('Discount') },
      { field: 'presentValue', header: this.l('PresentValue') },
      { field: 'status', header: this.l('Status') }
    ];

    this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
  }


  loadProductDatas() {
    abp.ui.setBusy();
    this._productService.GetAllProducts().subscribe(data => {
      abp.ui.clearBusy();
      let result: ListResultDto = data as ListResultDto;
      if (result) {
        this.records = result.items as ProductDto[];
      }
    });
  }

  loadProvinceList() {
    this._basicDataService.GetProvinceListCache().subscribe(data => {
      let tmpDatas: ProvinceDto[] = data as ProvinceDto[];
      this.provinceList = tmpDatas;
    })
  }

  loadCityList(provinceId: string = '') {
    this._basicDataService.GetCityListCache().subscribe(data => {
      let tmpDatas: CityDto[] = data as CityDto[];
      this.cityListAll = tmpDatas;
    })
  }


  loadStatusData() {
    let items: SelectItem[] = [];
    items.push({ label: this.l("OnShelf"), value: ProductStatusEnum.Active });
    items.push({ label: this.l("OutShelf"), value: ProductStatusEnum.Inactive });
    this.statusList = items;
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
  handleChange($event, rowData: ProductDto) {
    console.log(rowData);
  }

  refresh() {
    this.loadProductDatas();
    this.selectedCityList = [];
    this.selectedFaceValueList = [];
    this.selectedOperatorList = [];
    this.selectedProvinceList = [];
    this.selectedRecords = [];
    this.selectedStatus = [];
    this.selectedSupplierList = [];
  }

  create(): void {
    this.showCreateOrEditUserDialog();
  }

  edit(item: ProductDto): void {
    this.showCreateOrEditUserDialog(item.id, item);
  }

  delete(item: ProductDto) {
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

  private showCreateOrEditUserDialog(id?: number, item?: ProductDto): void {
    let createOrEditUserDialog;

    let data: DialogData = new DialogData();
    data.faceValueList = this.faceValueList;
    data.operatorList = this.operatorList;
    data.provinceList = this.provinceList;
    data.supplierList = this.supplierList;
    data.id = id;
    data.inputModel = item;
    createOrEditUserDialog = this._dialog.open(CreateProductComponent, {
      data: data
    });

    createOrEditUserDialog.afterClosed().subscribe(result => {
      let newArray: ProductDto[] = this.records;
      let returnValue: SupplierPayDto = result as SupplierPayDto;
      if (returnValue) {
        if (id) {
          //edit
          this.records.forEach(element => {
            if (element.id == id) {
              element.supplierId = returnValue.supplierId;
              element.supplierName = returnValue.supplierName;
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
    this.loadProductDatas();
  }

  onOrOutShelf(type: number) {
    if (this.selectedRecords && this.selectedRecords.length > 0) {
      let updateModel: UpdateProductStatusDto = new UpdateProductStatusDto();
      if (type == 1) {
        //on
        updateModel.productStatus = ProductStatusEnum.Active;
      }
      else {
        //out off  0
        updateModel.productStatus = ProductStatusEnum.Inactive;
      }
      updateModel.productIdList = Enumerable.from(this.selectedRecords).select(x => x.id).toArray();
      this._productService.OnOrOutShelf(updateModel).subscribe(data => {
        this.refresh();
      });
    }


  }

}

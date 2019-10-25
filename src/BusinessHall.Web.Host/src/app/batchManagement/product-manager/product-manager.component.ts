import { Component, Injector, AfterViewInit, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { MatDialog } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as Enumerable from 'linq';

import { SelectItem } from 'primeng/primeng';
import { ProductDto, ProductStatusEnum } from '@shared/models/product';
import { CreateProductComponent } from './create-product/create-product.component';

import {
  BasicDataService,
  ProvinceDto, CityDto, AreaDto, EthnicGroupDto, TenantDto
} from '@shared/basicDataServices/basic-data-service.service';


@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css'],
  animations: [appModuleAnimation()]
})
export class ProductManagerComponent extends AppComponentBase implements OnInit {


  records: ProductDto[];


  supplierList: SelectItem[] = [];
  provinceList: any[] = [];

  selectedSupplierList: any[] = [];
  selectedProvinceList: ProvinceDto[] = [];
  selectedCityList: CityDto[] = [];

  selectedBusinessList: any[] = [];
  selectedFaceValueList: any[] = [];
  selectedStatus: any[] = [];


  cityList: SelectItem[] = [];
  cityListAll: CityDto[] = [];
  businesseList: SelectItem[] = [];
  faceValueList: SelectItem[] = [];
  statusList: SelectItem[] = [];


  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;
  first: number = 0;
  cols: any[];
  columns: any[];
  exportColumns: any[];
  selectedItems: ProductDto[] = [];
  constructor(
    injector: Injector,
    private _dialog: MatDialog,
    private _basicDataService: BasicDataService) {
    super(injector);
  }

  ngOnInit() {
    this.sortOptions = [
      { label: 'Newest First', value: '!cretionTime' },
      { label: 'Oldest First', value: 'cretionTime' }
    ];
    this.initialColumns();
    this.loadTestData();
    this.loadProvinceList();
    this.loadCityList();
  }


  initialColumns() {
    this.cols = [
      { field: 'province', header: this.l('Province') },
      { field: 'business', header: this.l('Business') },
      { field: 'faceValue', header: this.l('FaceValue') },
      { field: 'name', header: this.l('Supplier') },
      { field: 'name', header: this.l('Discount') },
      { field: 'name', header: this.l('PresentValue') },
      { field: 'status', header: this.l('Status') }
    ];

    this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
  }

  loadProvinceList() {
    this._basicDataService.GetProvinceListCache().subscribe(data => {
      console.log(data);
      let tmpDatas: ProvinceDto[] = data as ProvinceDto[];
      let tmpProvinceList: any[] = [];
      if (tmpDatas) {
        tmpDatas.forEach(element => {
          tmpProvinceList.push({ value: element, label: element.name });
        });
      }
      this.provinceList = tmpProvinceList;
    })
  }

  loadCityList(provinceId: string = '') {
    this._basicDataService.GetCityListCache().subscribe(data => {
      let tmpDatas: CityDto[] = data as CityDto[];
      this.cityListAll = tmpDatas;
    })
  }


  getCityByProviceIds(inputSelectedProvinceList: ProvinceDto[]) {
    let tmpDatas: CityDto[] = this.cityListAll;
    if (inputSelectedProvinceList && inputSelectedProvinceList.length) {
      let pIds: string[] = Enumerable.from(inputSelectedProvinceList).select(x => x.provinceId).toArray();
      tmpDatas = Enumerable.from(this.cityListAll).where(x => pIds.indexOf(x.provinceId) >= 0).toArray();
    }
    let tmpCityList: SelectItem[] = [];
    if (tmpDatas) {
      tmpDatas.forEach(element => {
        tmpCityList.push({ value: element.cityId, label: element.name });
      });
    }
    this.cityList = tmpCityList;
  }


  loadTestData() {
    let tmpArray: ProductDto[] = [];
    for (let index = 0; index < 50; index++) {
      let model: ProductDto = new ProductDto();
      model.id = index + 1;
      model.name = "Product" + model.id.toString();
      model.status = ProductStatusEnum.Active;
      tmpArray.push(model);
    }
    this.records = tmpArray;
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

  }

  create(): void {
    this.showCreateOrEditUserDialog();
  }

  edit(item: ProductDto): void {
    this.showCreateOrEditUserDialog(item.id);
  }

  delete(item: ProductDto) {
    abp.message.confirm(
      this.l('UserDeleteWarningMessage', item.name),
      (result: boolean) => {
        if (result) {
          // this._userService.delete(user.id).subscribe(() => {
          //     abp.notify.success(this.l('SuccessfullyDeleted'));
          //     this.refresh();
          // });
        }
      }
    );
  }

  private showCreateOrEditUserDialog(id?: number): void {
    let createOrEditUserDialog;
    if (id === undefined || id <= 0) {
      createOrEditUserDialog = this._dialog.open(CreateProductComponent);
    } else {
      createOrEditUserDialog = this._dialog.open(CreateProductComponent, {
        data: id
      });
    }

    createOrEditUserDialog.afterClosed().subscribe(result => {
      if (result) {
        this.refresh();
      }
    });
  }


  supplierListonPanelHide(event) {

  }

  provinceListonPanelHide(event) {
    this.getCityByProviceIds(this.selectedProvinceList);
  }

  search() {

  }

}

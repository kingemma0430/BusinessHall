/**
 * When create dialog, need to add it into @NgModule.entryComponents   (app/module.ts  entryComponents)
 * 
 */
import { Component, Injector, Optional, Inject, OnInit, Input } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatCheckboxChange, MatInput, MatSlideToggleModule
} from '@angular/material';


import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import * as Enumerable from 'linq';

import { AppComponentBase } from '@shared/app-component-base';

import { ProductDto, ProductStatusEnum, ProductFaceValueDto, ProductOperatorDto, OperatorDto, FaceValueDto } from '@shared/models/product';

import { ProductService } from '@shared/productServices/product.service';
import { ListResultDto } from '@shared/serviceHelpers/service-helper.service';

import {
  BasicDataService,
  ProvinceDto, CityDto, AreaDto, EthnicGroupDto, TenantDto
} from '@shared/basicDataServices/basic-data-service.service';

import { SupplierDto } from '@shared/models/supplier';



export class DialogData {
  supplierList: SupplierDto[];
  provinceList: ProvinceDto[];
  operatorList: OperatorDto[]
  faceValueList: FaceValueDto[];
  id: number;
  inputModel: any;//it will be for some models when update
}

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent extends AppComponentBase implements OnInit {


  constructor(
    injector: Injector,
    private _dialogRef: MatDialogRef<CreateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: DialogData,
    private _productService: ProductService,
  ) {
    super(injector);
  }

  saving = false;
  newItem: ProductDto = new ProductDto();

  supplierList: SupplierDto[];
  provinceList: ProvinceDto[];
  operatorList: OperatorDto[]
  faceValueList: FaceValueDto[];
  cityListAll: CityDto[] = [];
  cityList: CityDto[] = [];

  selectedSupplier: SupplierDto = null;
  selectedProvinceList: ProvinceDto[] = [];
  selectedCityList: CityDto[] = [];
  selectedOperatorList: OperatorDto[] = [];
  selectedFaceValueList: FaceValueDto[] = [];

  _id: number = 0;

  ngOnInit(): void {
    console.log(this.inputData);
    if (this.inputData) {
      this.faceValueList = this.inputData.faceValueList;
      this.operatorList = this.inputData.operatorList;
      this.provinceList = this.inputData.provinceList;
      this.supplierList = this.inputData.supplierList;
      this._id = this.inputData.id;
      this.selectedFaceValueList = [];
      this.selectedOperatorList = [];
      this.selectedProvinceList = [];
      if (this.inputData.id) {
        this.newItem = this.inputData.inputModel as ProductDto;
        if (this.newItem) {
          if (this.newItem.productFaceValues && this.faceValueList) {
            let faceValueNames = Enumerable.from(this.newItem.productFaceValues).select(x => x.name).toArray();
            this.selectedFaceValueList = Enumerable.from(this.faceValueList).where(x => faceValueNames.indexOf(x.name) > -1).toArray();
          }
          if (this.newItem.productOperators && this.operatorList) {
            let operatorIds = Enumerable.from(this.newItem.productOperators).select(x => x.operatorId).toArray();
            this.selectedOperatorList = Enumerable.from(this.operatorList).where(x => operatorIds.indexOf(x.id) > -1).toArray();
          }
          if (this.newItem.province && this.provinceList) {
            let provinceArray: string[] = this.newItem.province.split(';');
            if (provinceArray && provinceArray.length > 0) {
              this.selectedProvinceList = Enumerable.from(this.provinceList).where(x => provinceArray.indexOf(x.name) > -1).toArray();
            }
          }
        }
      }
      else {
        this.newItem = new ProductDto();
      }
    }
  }

  save(): void {
    this.saving = true;
    if (this.selectedSupplier) {
      this.newItem.supplierId = this.selectedSupplier.id;
    }
    if (this.selectedProvinceList) {
      let maxLength: number = this.selectedProvinceList.length - 1;
      for (let index = 0; index < this.selectedProvinceList.length; index++) {
        const element = this.selectedProvinceList[index];
        this.newItem.province = element.name;
        if (index < maxLength) {
          this.newItem.province = this.newItem.province + ";";
        }
      }
    }
    this.newItem.productFaceValues = [];
    if (this.selectedFaceValueList) {
      this.selectedFaceValueList.forEach(element => {
        let item: ProductFaceValueDto = new ProductFaceValueDto();
        item.creatorUserId = 0;
        item.creationTime = new Date();
        item.faceValue = element.actualValue;
        item.name = element.name;
        item.productId = this.newItem.id;
        this.newItem.productFaceValues.push(item);
      });
    }
    this.newItem.productOperators = [];
    if (this.selectedOperatorList) {
      this.selectedOperatorList.forEach(element => {
        let item: ProductOperatorDto = new ProductOperatorDto();
        item.creatorUserId = 0;
        item.creationTime = new Date();
        item.operatorId = element.id;
        item.productId = this.newItem.id;
        this.newItem.productOperators.push(item);
      });
    }
    if (this.newItem.id) {
      this._productService.UpdateProduct(this.newItem).pipe(
        finalize(() => {
          this.saving = false;
        })
      ).subscribe(data => {
        this.newItem = data;
        this.newItem.supplierName = Enumerable.from(this.supplierList).firstOrDefault(x => x.id == this.newItem.supplierId).name;
        this.close(data);
      });
    }
    else {
      this._productService.CreateProduct(this.newItem).pipe(
        finalize(() => {
          this.saving = false;
        })
      ).subscribe(data => {
        this.newItem = data;
        this.newItem.supplierName = Enumerable.from(this.supplierList).firstOrDefault(x => x.id == this.newItem.supplierId).name;
        this.close(data);
      });
    }
  }

  close(result: any): void {
    this._dialogRef.close(result);
  }

  supplierListonPanelHide(event) {

  }

  provinceListonPanelHide(event) {
    this.getCityByProviceIds(this.selectedProvinceList);
  }

  getCityByProviceIds(inputSelectedProvinceList: ProvinceDto[]) {
    let tmpDatas: CityDto[] = this.cityListAll;
    if (inputSelectedProvinceList && inputSelectedProvinceList.length) {
      let pIds: string[] = Enumerable.from(inputSelectedProvinceList).select(x => x.provinceId).toArray();
      tmpDatas = Enumerable.from(this.cityListAll).where(x => pIds.indexOf(x.provinceId) >= 0).toArray();
    }
    // let tmpCityList: SelectItem[] = [];
    // if (tmpDatas) {
    //   tmpDatas.forEach(element => {
    //     tmpCityList.push({ value: element.cityId, label: element.name });
    //   });
    // }
    this.cityList = tmpDatas;
  }

}

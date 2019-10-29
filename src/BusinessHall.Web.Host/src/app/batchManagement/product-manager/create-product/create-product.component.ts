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

import { ProductDto, ProductStatusEnum, ProductFaceValueDto, ProductOperatorDto, OperatorDto } from '@shared/models/product';

import { ProductService } from '@shared/productServices/product.service';
import { ListResultDto } from '@shared/serviceHelpers/service-helper.service';

import {
  BasicDataService,
  ProvinceDto, CityDto, AreaDto, EthnicGroupDto, TenantDto
} from '@shared/basicDataServices/basic-data-service.service';

import { SupplierDto } from '@shared/models/supplier';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent extends AppComponentBase implements OnInit {

  saving = false;
  newItem: ProductDto = new ProductDto();

  @Input()
  supplierList: SupplierDto[] = [];

  @Input()
  provinceList: ProvinceDto[] = [];

  @Input()
  cityListAll: CityDto[] = [];

  @Input()
  businesseList: OperatorDto[] = [];

  @Input()
  faceValueList: ProductFaceValueDto[] = [];

  cityList: CityDto[] = [];

  selectedSupplierList: any[] = [];
  selectedProvinceList: ProvinceDto[] = [];
  selectedCityList: CityDto[] = [];
  selectedBusinessList: OperatorDto[] = [];
  selectedFaceValueList: ProductFaceValueDto[] = [];

  constructor(
    injector: Injector,
    private _dialogRef: MatDialogRef<CreateProductComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private _id: number
  ) {
    super(injector);
  }

  ngOnInit(): void {
    // this._userService.get(this._id).subscribe(result => {
    //   this.user = result;

    //   this._userService.getRoles().subscribe(result2 => {
    //     this.roles = result2.items;
    //     this.setInitialRolesStatus();
    //   });
    // });
  }

  save(): void {
    this.saving = true;
    // this._userService
    //   .create(this.user)
    //   .pipe(
    //     finalize(() => {
    //       this.saving = false;
    //     })
    //   )
    //   .subscribe(() => {
    //     this.notify.info(this.l('SavedSuccessfully'));
    //     this.close(true);
    //   });
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

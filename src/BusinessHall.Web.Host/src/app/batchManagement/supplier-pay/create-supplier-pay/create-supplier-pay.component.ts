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

import { DialogData } from '@shared/models/dialogInputData';
import { ListResultDto } from '@shared/serviceHelpers/service-helper.service';
import { SupplierDto, SupplierPayDto } from '@shared/models/supplier';

import { SupplierManagerService } from '@shared/supplierServices/supplier-manager.service';


@Component({
  selector: 'app-create-supplier-pay',
  templateUrl: './create-supplier-pay.component.html',
  styleUrls: ['./create-supplier-pay.component.css']
})
export class CreateSupplierPayComponent extends AppComponentBase implements OnInit {


  constructor(
    injector: Injector,
    private _dialogRef: MatDialogRef<CreateSupplierPayComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: DialogData,
    private _supplierManagerService: SupplierManagerService,
  ) {
    super(injector);
  }

  saving = false;
  newItem: SupplierPayDto = new SupplierPayDto();
  supplierList: SupplierDto[];
  selectedSupplier: SupplierDto = null;


  id: number = 0;

  ngOnInit(): void {
    if (this.inputData) {
      this.supplierList = this.inputData.supplierList;
      this.id = this.inputData.id;
      if (this.inputData.id) {
        this.newItem = this.inputData.inputModel as SupplierPayDto;
        if (this.newItem) {
          this.selectedSupplier = Enumerable.from(this.supplierList).firstOrDefault(x => x.id == this.newItem.supplierId);
        }
      }
      else {
        this.newItem = new SupplierPayDto();
      }
    }
  }

  save(): void {
    this.saving = true;
    if (this.selectedSupplier) {
      this.newItem.supplierId = this.selectedSupplier.id;
    }
    if (this.newItem.id) {
      this._supplierManagerService.UpdateSupplierPay(this.newItem).pipe(
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
      this._supplierManagerService.CreateSupplierPay(this.newItem).pipe(
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
    this.notify.info(this.l('SavedSuccessfully'));
    this._dialogRef.close(result);
  }
}


import { Component, Injector, Optional, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatCheckboxChange, MatInput, MatSlideToggleModule
} from '@angular/material';


import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { AppComponentBase } from '@shared/app-component-base';


import { SupplierDto, SupplierStatusEnum } from '@shared/models/supplier';
import { SupplierManagerService } from '@shared/supplierServices/supplier-manager.service';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent extends AppComponentBase implements OnInit {

  saving = false;
  newItem: SupplierDto = new SupplierDto();
  id: number;
  constructor(
    injector: Injector,
    private _dialogRef: MatDialogRef<CreateSupplierComponent>,
    private _supplierManagerService: SupplierManagerService,
    @Optional() @Inject(MAT_DIALOG_DATA) private _id: number
  ) {
    super(injector);
    this.id = _id;
  }

  ngOnInit(): void {
    if (this._id > 0) {
      this._supplierManagerService.GetById(this._id).subscribe(data => {
        this.newItem = data;
      });
    }
  }

  save(): void {
    this.saving = true;
    if (this.newItem.id > 0) {
      this.update();
    }
    else {
      this.create();
    }
  }

  create() {
    this._supplierManagerService
      .Create(this.newItem)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(data => {
      
        this.close(data);
      });
  }

  update() {
    this._supplierManagerService
      .Update(this.newItem)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(data => {
        this.close(data);
      });
  }

  close(result: any): void {
    this.notify.info(this.l('SavedSuccessfully'));
    this._dialogRef.close(result);
  }
}

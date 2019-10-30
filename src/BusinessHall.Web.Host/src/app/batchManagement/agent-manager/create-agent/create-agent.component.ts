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
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.css']
})
export class CreateAgentComponent extends AppComponentBase implements OnInit {

  saving = false;
  newItem: SupplierDto = new SupplierDto();

  constructor(
    injector: Injector,
    private _dialogRef: MatDialogRef<CreateAgentComponent>,
    private _supplierManagerService: SupplierManagerService,
    @Optional() @Inject(MAT_DIALOG_DATA) private _id: number
  ) {
    super(injector);
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
        this.notify.info(this.l('SavedSuccessfully'));
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
        this.notify.info(this.l('SavedSuccessfully'));
        this.close(data);
      });
  }

  close(result: any): void {
    this._dialogRef.close(result);
  }
}

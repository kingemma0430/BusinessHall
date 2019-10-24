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

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent extends AppComponentBase implements OnInit {

  saving = false;
  newItem: SupplierDto = new SupplierDto();

  constructor(
    injector: Injector,
    private _dialogRef: MatDialogRef<CreateSupplierComponent>,
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

}

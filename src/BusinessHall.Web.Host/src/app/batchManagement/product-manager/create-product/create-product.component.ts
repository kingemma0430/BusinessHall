/**
 * When create dialog, need to add it into @NgModule.entryComponents   (app/module.ts  entryComponents)
 * 
 */
import { Component, Injector, Optional, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatCheckboxChange, MatInput, MatSlideToggleModule
} from '@angular/material';

import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { AppComponentBase } from '@shared/app-component-base';

import { ProductDto, ProductStatusEnum, ProductFaceValueDto, ProductOperatorDto, OperatorDto } from '@shared/models/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent extends AppComponentBase implements OnInit {

  saving = false;
  newItem: ProductDto = new ProductDto();

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

}

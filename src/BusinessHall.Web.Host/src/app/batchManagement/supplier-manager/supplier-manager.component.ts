import { Component, Injector, AfterViewInit, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { MatDialog } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as Enumerable from 'linq';


import { SelectItem } from 'primeng/primeng';
import { SupplierDto, SupplierStatusEnum } from '@shared/models/supplier';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import { SupplierManagerService } from '@shared/supplierServices/supplier-manager.service';


@Component({
  selector: 'app-supplier-manager',
  templateUrl: './supplier-manager.component.html',
  styleUrls: ['./supplier-manager.component.css'],
  animations: [appModuleAnimation()]
})
export class SupplierManagerComponent extends AppComponentBase implements OnInit {


  records: SupplierDto[];

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;
  first: number = 0;
  cols: any[];
  columns: any[];
  exportColumns: any[];
  selectedItems: SupplierDto[] = [];
  constructor(
    injector: Injector,
    private _dialog: MatDialog,
    private _supplierManagerService: SupplierManagerService) {
    super(injector);
  }

  ngOnInit() {
    this.sortOptions = [
      { label: 'Newest First', value: '!creationTime' },
      { label: 'Oldest First', value: 'creationTime' }
    ];
    this.initialColumns();
    this.loadDatas();
  }


  initialColumns() {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: this.l('SupplierName') },
      { field: 'isAutoReturnMoney', header: this.l('IsAutoReturnMoney') },
      { field: 'status', header: this.l('Status') }
    ];

    this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
  }

  loadDatas() {
    abp.ui.setBusy();
    this._supplierManagerService.GetAll().subscribe(result => {
      if (result) {
        this.records = result["items"];
        abp.ui.clearBusy();
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
    if (this.records) {
      import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.records);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        let date: Date = new Date();
        let excelFilename: string = date.toLocaleDateString();
        this.saveAsExcelFile(excelBuffer, excelFilename);
      });
    }
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    if (this.records) {
      import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
          type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
      });
    }
  }

  refresh() {
    this.loadDatas();
  }

  create(): void {
    this.showCreateOrEditUserDialog();
  }

  edit(item: SupplierDto): void {
    this.showCreateOrEditUserDialog(item.id);
  }

  delete(item: SupplierDto) {
    abp.message.confirm(
      this.l('UserDeleteWarningMessage', item.name),
      (result: boolean) => {
        if (result) {
          this._supplierManagerService.Delete(item.id).subscribe(() => {
            abp.notify.success(this.l('SuccessfullyDeleted'));
            this.refresh();
          });
        }
      }
    );
  }

  private showCreateOrEditUserDialog(id?: number): void {
    let createOrEditUserDialog;
    if (id === undefined || id <= 0) {
      createOrEditUserDialog = this._dialog.open(CreateSupplierComponent);
    } else {
      createOrEditUserDialog = this._dialog.open(CreateSupplierComponent, {
        data: id
      });
    }

    createOrEditUserDialog.afterClosed().subscribe(result => {
      if (result) {
        this.refresh();
      }
    });
  }

  handleChange(event, rowData: SupplierDto) {
    console.log("handleChange", event, rowData);
    this._supplierManagerService
      .Update(rowData)
      .pipe(
        finalize(() => {

        })
      )
      .subscribe(data => {
        this.refresh();
      });
  }

}

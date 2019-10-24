import { Component, Injector, AfterViewInit, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { MatDialog } from '@angular/material';
import { finalize } from 'rxjs/operators';

import { SelectItem } from 'primeng/primeng';
import { SupplierDto, SupplierStatusEnum } from '@shared/models/supplier';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';

@Component({
  selector: 'app-supplier-manager',
  templateUrl: './supplier-manager.component.html',
  styleUrls: ['./supplier-manager.component.css'],
  animations: [appModuleAnimation()]
})
export class SupplierManagerComponent extends AppComponentBase implements OnInit {


  datas: SupplierDto[];

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
    private _dialog: MatDialog) {
    super(injector);
  }

  ngOnInit() {
    this.sortOptions = [
      { label: 'Newest First', value: '!cretionTime' },
      { label: 'Oldest First', value: 'cretionTime' }
    ];
    this.initialColumns();
    this.loadTestData();
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

  loadTestData() {
    let tmpArray: SupplierDto[] = [];
    for (let index = 0; index < 50; index++) {
      let model: SupplierDto = new SupplierDto();
      model.id = index + 1;
      model.name = "Supplier" + model.id.toString();
      model.cretionTime = new Date();
      model.isAutoReturnMoney = index % 2 == 0 ? true : false;
      model.status = SupplierStatusEnum.Close;
      if (model.isAutoReturnMoney) {
        model.status = SupplierStatusEnum.Open;
      }
      tmpArray.push(model);
    }
    this.datas = tmpArray;
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
      const worksheet = xlsx.utils.json_to_sheet(this.datas);
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
  handleChange($event, rowData: SupplierDto) {
    console.log(rowData);
  }

  refresh() {

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

}

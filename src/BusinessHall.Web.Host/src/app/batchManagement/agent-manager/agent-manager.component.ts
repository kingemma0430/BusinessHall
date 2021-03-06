import { Component, Injector, AfterViewInit, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { MatDialog } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as Enumerable from 'linq';


import { SelectItem } from 'primeng/primeng';

import { AgentDto, AgentAccountDto } from '@shared/models/agent';
import { DialogData } from '@shared/models/dialogInputData';

import { CreateAgentComponent } from './create-agent/create-agent.component';
import { AgentService } from '@shared/agentServices/agent.service';


@Component({
  selector: 'app-agent-manager',
  templateUrl: './agent-manager.component.html',
  styleUrls: ['./agent-manager.component.css'],
  animations: [appModuleAnimation()]
})
export class AgentManagerComponent extends AppComponentBase implements OnInit {


  records: AgentDto[];

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;
  first: number = 0;
  cols: any[];
  columns: any[];
  exportColumns: any[];
  selectedItems: AgentDto;
  constructor(
    injector: Injector,
    private _dialog: MatDialog,
    private _agentService: AgentService) {
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
      { field: 'id', header: 'ID', width: "10px" },
      { field: 'name', header: this.l('Agent') },
      { field: 'code', header: this.l('AgentCode') },
      { field: 'nickName', header: this.l('AgentNickName') }
    ];

    this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
  }

  loadDatas() {
    abp.ui.setBusy();
    this._agentService.GetAllAgents().subscribe(result => {
      abp.ui.clearBusy();
      if (result) {
        this.records = result["items"];
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

  edit(item: AgentDto): void {
    this.showCreateOrEditUserDialog(item.id, item);
  }

  delete(item: AgentDto) {
    abp.message.confirm(
      this.l('UserDeleteWarningMessage', item.name),
      (result: boolean) => {
        if (result) {
          this._agentService.DeleteAgent(item.id).subscribe(() => {
            abp.notify.success(this.l('SuccessfullyDeleted'));
            this.refresh();
          });
        }
      }
    );
  }

  private showCreateOrEditUserDialog(id?: number, item?: AgentDto): void {
    let createOrEditUserDialog;
    let inputDate: DialogData = new DialogData();
    inputDate.id = (id === undefined || id <= 0) ? 0 : id;
    inputDate.inputModel = item;
    createOrEditUserDialog = this._dialog.open(CreateAgentComponent, {
      data: inputDate
    });
    createOrEditUserDialog.afterClosed().subscribe(result => {
      let newArray: AgentDto[] = this.records;
      let returnValue: AgentDto = result as AgentDto;
      if (returnValue) {
        if (id) {
          //edit
          this.records.forEach(element => {
            if (element.id == id) {
              element = returnValue;
            }
          });
        }
        else {
          if (!newArray) {
            newArray = [];
          }
          newArray.push(result);
          this.records = newArray;
        }
      }
    });
  }

}


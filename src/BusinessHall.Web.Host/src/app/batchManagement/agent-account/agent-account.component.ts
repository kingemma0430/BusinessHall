import { Component, Injector, AfterViewInit, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { MatDialog } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as Enumerable from 'linq';


import { SelectItem } from 'primeng/primeng';

import { AgentDto, AgentAccountDto } from '@shared/models/agent';
import { DialogData } from '@shared/models/dialogInputData';

import { CreateAgentAccountComponent } from './create-agent-account/create-agent-account.component';
import { AgentService } from '@shared/agentServices/agent.service';


@Component({
  selector: 'app-agent-account',
  templateUrl: './agent-account.component.html',
  styleUrls: ['./agent-account.component.css'],
  animations: [appModuleAnimation()]
})
export class AgentAccountComponent extends AppComponentBase implements OnInit {


  records: AgentAccountDto[];

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;
  first: number = 0;
  cols: any[];
  columns: any[];
  exportColumns: any[];
  selectedItems: AgentAccountDto ;
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
      { field: 'agentCode', header: this.l('AgentCode') },
      { field: 'agentNickName', header: this.l('AgentNickName') },
      { field: 'avaliableAmount', header: this.l('AgentAvailableAmount') },
      { field: 'usedAmount', header: this.l('AgentUsedAmount') },
      { field: 'chargedAmount', header: this.l('AgentChargedAmount') },
      { field: 'withDrawAmount', header: this.l('AgentWithDrawAmount') },
      { field: 'creditPercentAmount', header: this.l('AgentCreditPercentAmount') },
      { field: 'agentStatus', header: this.l('Status'), width: "50px" }
    ];

    this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
  }

  loadDatas() {
    abp.ui.setBusy();
    this._agentService.GetAllAgentAccounts().subscribe(result => {
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

  edit(item: AgentAccountDto): void {
    this.showCreateOrEditUserDialog(item.id, item);
  }

  delete(item: AgentAccountDto) {
    abp.message.confirm(
      this.l('UserDeleteWarningMessage', item.agentName),
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

  private showCreateOrEditUserDialog(id?: number, item?: AgentAccountDto): void {
    let createOrEditUserDialog;
    let inputDate: DialogData = new DialogData();
    inputDate.id = (id === undefined || id <= 0) ? 0 : id;
    inputDate.inputModel = item;
    createOrEditUserDialog = this._dialog.open(CreateAgentAccountComponent, {
      data: inputDate
    });
    createOrEditUserDialog.afterClosed().subscribe(result => {
      let newArray: AgentAccountDto[] = this.records;
      let returnValue: AgentAccountDto = result as AgentAccountDto;
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



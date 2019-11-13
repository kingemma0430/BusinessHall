

import { Component, Injector, Optional, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatCheckboxChange, MatInput, MatSlideToggleModule
} from '@angular/material';

import { finalize } from 'rxjs/operators';

import * as _ from 'lodash';
import * as Enumerable from 'linq';
import { AppComponentBase } from '@shared/app-component-base';


import { AgentDto, AgentAccountDto } from '@shared/models/agent';
import { DialogData } from '@shared/models/dialogInputData';

import { AgentService } from '@shared/agentServices/agent.service';

@Component({
  selector: 'app-create-agent-account',
  templateUrl: './create-agent-account.component.html',
  styleUrls: ['./create-agent-account.component.css']
})
export class CreateAgentAccountComponent extends AppComponentBase implements OnInit {

  saving = false;
  newItem: AgentAccountDto = new AgentAccountDto();
  id: number = 0;


  selectedAgent: AgentDto;
  agentList: AgentDto[] = [];


  constructor(
    injector: Injector,
    private _dialogRef: MatDialogRef<CreateAgentAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: DialogData,
    private _agentService: AgentService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.loadAgentDatas();
  }

  loadAgentDatas() {
    this._agentService.GetAllAgents().subscribe(data => {
      if (data) {
        this.agentList = data["items"] as AgentDto[];
      }
      if (this.inputData) {
        this.id = this.inputData.id;
        if (this.id) {
          this.newItem = this.inputData.inputModel as AgentAccountDto;
          if (this.agentList && this.newItem.agentId) {
            this.selectedAgent = Enumerable.from(this.agentList).firstOrDefault(x => x.id == this.newItem.agentId);
          }
        }
      }
    })
  }

  save(): void {
    this.saving = true;
    if (this.selectedAgent) {
      this.newItem.agentId = this.selectedAgent.id;
      this.newItem.agentName = this.selectedAgent.name;
      this.newItem.agentCode = this.selectedAgent.code;
      this.newItem.agentNickName = this.selectedAgent.nickName;
    }
    if (this.newItem.id > 0) {
      this.update();
    }
    else {
      this.create();
    }
  }

  create() {
    this._agentService
      .CreateAgentAccount(this.newItem)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(data => {
        this.close(true, data);
      });
  }

  update() {
    this._agentService
      .UpdateAgentAccount(this.newItem)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(data => {
        this.close(true, data);
      });
  }

  close(needRefresh: boolean, result: AgentAccountDto): void {
    if (needRefresh) {
      abp.notify.success(this.l('SavedSuccessfully'));
    }
    this._dialogRef.close(result);
  }
}


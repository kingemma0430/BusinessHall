import { Component, Injector, Optional, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatCheckboxChange, MatInput, MatSlideToggleModule
} from '@angular/material';


import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { AppComponentBase } from '@shared/app-component-base';
import * as Enumerable from 'linq';


import { AgentDto } from '@shared/models/agent';
import { DialogData } from '@shared/models/dialogInputData';

import { AgentService } from '@shared/agentServices/agent.service';

@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.css']
})
export class CreateAgentComponent extends AppComponentBase implements OnInit {

  saving = false;
  newItem: AgentDto = new AgentDto();
  id: number = 0;
  constructor(
    injector: Injector,
    private _dialogRef: MatDialogRef<CreateAgentComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: DialogData,
    private _agentService: AgentService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    if (this.inputData) {
      this.id = this.inputData.id;
      if (this.id) {
        this.newItem = this.inputData.inputModel as AgentDto;
      }
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
    this._agentService
      .CreateAgent(this.newItem)
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
      .UpdateAgent(this.newItem)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(data => {
        this.close(true, data);
      });
  }

  close(needRefresh: boolean, result: AgentDto): void {
    if (needRefresh) {
      abp.notify.success(this.l('SavedSuccessfully'));
    }
    this._dialogRef.close(result);
  }
}

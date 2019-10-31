
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

import { AgentDto, AgentAccountDto } from '../models/agent';

import { AppConsts } from '../AppConsts';

import { ServiceHelperService } from '../serviceHelpers/service-helper.service';

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
/**
 * AgentManager
 * AgentAccountManager
 */
@Injectable()
export class AgentService {
  private http: HttpClient;
  private apiUrlAgentManager: string = "/api/services/app/AgentManager/";
  private apiUrlAgentAccountManager: string = "/api/services/app/AgentAccountManager/";


  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(
    @Inject(HttpClient) http: HttpClient,
    private _serviceHelperService: ServiceHelperService
  ) {
    this.http = http;
  }

  GetAllAgents(): Observable<any> {
    let url_ = this.apiUrlAgentManager + "GetAll";
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  GetAgentById(id: number): Observable<any> {
    let url_ = this.apiUrlAgentManager + "GetById?id=" + id;
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  /**
   * @param input (optional) 
   * @return Success
   */
  CreateAgent(input: AgentDto | null | undefined): Observable<AgentDto> {
    let url_ = this.apiUrlAgentManager + "Create";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(input);
    return this._serviceHelperService.create(url_, content_);
  }

  /**
 * @param input (optional) 
 * @return Success
 */
  UpdateAgent(input: AgentDto | null | undefined): Observable<AgentDto> {
    let url_ = this.apiUrlAgentManager + "Update";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(input);
    return this._serviceHelperService.update(url_, content_);

  }

  DeleteAgent(id: number): Observable<any> {
    let url_ = this.apiUrlAgentManager + "Delete?";
    if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");

    return this._serviceHelperService.delete(url_);
  }

  DeleteForMultipleAgents(ids: number[]): Observable<any> {
    let url_ = this.apiUrlAgentManager + "DeleteForMultiple";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(ids);
    return this._serviceHelperService.deleteByCondition(url_, content_);
  }



  GetAllAgentAccounts(): Observable<any> {
    let url_ = this.apiUrlAgentAccountManager + "GetAll";
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  GetAgentAccountById(id: number): Observable<any> {
    let url_ = this.apiUrlAgentAccountManager + "GetById?id=" + id;
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  /**
   * @param input (optional) 
   * @return Success
   */
  CreateAgentAccount(input: AgentAccountDto | null | undefined): Observable<AgentAccountDto> {
    let url_ = this.apiUrlAgentAccountManager + "Create";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(input);
    return this._serviceHelperService.create(url_, content_);
  }

  /**
 * @param input (optional) 
 * @return Success
 */
  UpdateAgentAccount(input: AgentAccountDto | null | undefined): Observable<AgentAccountDto> {
    let url_ = this.apiUrlAgentAccountManager + "Update";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(input);
    return this._serviceHelperService.update(url_, content_);

  }

  DeleteAgentAccount(id: number): Observable<any> {
    let url_ = this.apiUrlAgentAccountManager + "Delete?";
    if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");

    return this._serviceHelperService.delete(url_);
  }

  DeleteForMultipleAgentAccounts(ids: number[]): Observable<any> {
    let url_ = this.apiUrlAgentAccountManager + "DeleteForMultiple";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(ids);
    return this._serviceHelperService.deleteByCondition(url_, content_);
  }
}
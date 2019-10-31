import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

import { OperatorDto } from '../models/product';

import { AppConsts } from '../AppConsts';

import { ServiceHelperService } from '../serviceHelpers/service-helper.service';

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
/**
 * OperatorManager
 */
@Injectable()
export class OperatorService {
  private http: HttpClient;
  private apiUrlOperatorManager: string = "/api/services/app/OperatorManager/";

  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(
    @Inject(HttpClient) http: HttpClient,
    private _serviceHelperService: ServiceHelperService
  ) {
    this.http = http;
  }

  GetAllOperators(): Observable<any> {
    let url_ = this.apiUrlOperatorManager + "GetAll";
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  GetOperatorById(id: number): Observable<any> {
    let url_ = this.apiUrlOperatorManager + "GetById?id=" + id;
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  /**
   * @param input (optional) 
   * @return Success
   */
  CreateOperator(input: OperatorDto | null | undefined): Observable<OperatorDto> {
    let url_ = this.apiUrlOperatorManager + "Create";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(input);
    return this._serviceHelperService.create(url_, content_);
  }

  /**
 * @param input (optional) 
 * @return Success
 */
  UpdateOperator(input: OperatorDto | null | undefined): Observable<OperatorDto> {
    let url_ = this.apiUrlOperatorManager + "Update";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(input);
    return this._serviceHelperService.update(url_, content_);

  }

  DeleteOperator(id: number): Observable<any> {
    let url_ = this.apiUrlOperatorManager + "Delete?";
    if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");

    return this._serviceHelperService.delete(url_);
  }

  DeleteForMultipleOperators(ids: number[]): Observable<any> {
    let url_ = this.apiUrlOperatorManager + "DeleteForMultiple";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(ids);
    return this._serviceHelperService.deleteByCondition(url_, content_);
  }


}





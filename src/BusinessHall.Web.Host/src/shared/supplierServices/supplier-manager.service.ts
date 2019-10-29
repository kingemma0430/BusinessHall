import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

import { SupplierDto } from '../models/supplier';

import { AppConsts } from '../AppConsts';

import { ServiceHelperService } from '../serviceHelpers/service-helper.service';

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class SupplierManagerService {
  private http: HttpClient;
  private apiUrl: string = "/api/services/app/SupplierManager/";
  private apiUrlSupplierPayManager: string = "/api/services/app/SupplierPayManager/";

  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(
    @Inject(HttpClient) http: HttpClient,
    private _serviceHelperService: ServiceHelperService
  ) {
    this.http = http;
  }

  GetAll(): Observable<any> {
    let url_ = this.apiUrl + "GetAll";
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  GetById(id: number): Observable<any> {
    let url_ = this.apiUrl + "GetById?id=" + id;
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  /**
   * @param input (optional) 
   * @return Success
   */
  Create(input: SupplierDto | null | undefined): Observable<SupplierDto> {
    let url_ = this.apiUrl + "Create";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(input);
    return this._serviceHelperService.create(url_, content_);
  }

  /**
 * @param input (optional) 
 * @return Success
 */
  Update(input: SupplierDto | null | undefined): Observable<SupplierDto> {
    let url_ = this.apiUrl + "Update";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(input);
    return this._serviceHelperService.update(url_, content_);

  }

  Delete(id: number): Observable<any> {
    let url_ = this.apiUrl + "Delete?";
    if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");

    return this._serviceHelperService.delete(url_);
  }

  DeleteForMultiple(ids: number[]): Observable<any> {
    let url_ = this.apiUrl + "DeleteForMultiple";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(ids);
    return this._serviceHelperService.deleteByCondition(url_, content_);
  }

  GetAllSupplierPay(): Observable<any> {
    let url_ = this.apiUrlSupplierPayManager + "GetAll";
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  GetByIdSupplierPay(id: number): Observable<any> {
    let url_ = this.apiUrlSupplierPayManager + "GetById?id=" + id;
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  /**
   * @param input (optional) 
   * @return Success
   */
  CreateSupplierPay(input: SupplierDto | null | undefined): Observable<SupplierDto> {
    let url_ = this.apiUrlSupplierPayManager + "Create";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(input);
    return this._serviceHelperService.create(url_, content_);
  }

  /**
 * @param input (optional) 
 * @return Success
 */
  UpdateSupplierPay(input: SupplierDto | null | undefined): Observable<SupplierDto> {
    let url_ = this.apiUrlSupplierPayManager + "Update";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(input);
    return this._serviceHelperService.update(url_, content_);

  }

  DeleteSupplierPay(id: number): Observable<any> {
    let url_ = this.apiUrlSupplierPayManager + "Delete?";
    if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");

    return this._serviceHelperService.delete(url_);
  }

  DeleteForMultipleSupplierPay(ids: number[]): Observable<any> {
    let url_ = this.apiUrlSupplierPayManager + "DeleteForMultiple";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(ids);
    return this._serviceHelperService.deleteByCondition(url_, content_);
  }

}


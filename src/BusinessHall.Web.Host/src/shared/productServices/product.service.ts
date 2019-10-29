
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
export class ProductService {
  private http: HttpClient;
  private apiUrl: string = "/api/services/app/ProductManager/";
  private apiUrlProductFaceValueManager: string = "/api/services/app/ProductFaceValueManager/";
  private apiUrlProductOperatorManager: string = "/api/services/app/ProductOperatorManager/";

  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(
    @Inject(HttpClient) http: HttpClient,
    private _serviceHelperService: ServiceHelperService
  ) {
    this.http = http;
  }

  GetAllProductFaceValue(): Observable<any> {
    let url_ = this.apiUrlProductFaceValueManager + "GetAll";
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  GetByIdProductFaceValue(id: number): Observable<any> {
    let url_ = this.apiUrlProductFaceValueManager + "GetById?id=" + id;
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  /**
   * @param input (optional) 
   * @return Success
   */
  CreateProductFaceValue(input: SupplierDto | null | undefined): Observable<SupplierDto> {
    let url_ = this.apiUrlProductFaceValueManager + "Create";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(input);
    return this._serviceHelperService.create(url_, content_);
  }

  /**
 * @param input (optional) 
 * @return Success
 */
  UpdateProductFaceValue(input: SupplierDto | null | undefined): Observable<SupplierDto> {
    let url_ = this.apiUrlProductFaceValueManager + "Update";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(input);
    return this._serviceHelperService.update(url_, content_);

  }

  DeleteProductFaceValue(id: number): Observable<any> {
    let url_ = this.apiUrlProductFaceValueManager + "Delete?";
    if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");

    return this._serviceHelperService.delete(url_);
  }

  DeleteForMultipleProductFaceValue(ids: number[]): Observable<any> {
    let url_ = this.apiUrlProductFaceValueManager + "DeleteForMultiple";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(ids);
    return this._serviceHelperService.deleteByCondition(url_, content_);
  }



  GetAllProductOperator(): Observable<any> {
    let url_ = this.apiUrlProductOperatorManager + "GetAll";
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  GetByIdProductOperator(id: number): Observable<any> {
    let url_ = this.apiUrlProductOperatorManager + "GetById?id=" + id;
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  /**
   * @param input (optional) 
   * @return Success
   */
  CreateProductOperator(input: SupplierDto | null | undefined): Observable<SupplierDto> {
    let url_ = this.apiUrlProductOperatorManager + "Create";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(input);
    return this._serviceHelperService.create(url_, content_);
  }

  /**
 * @param input (optional) 
 * @return Success
 */
  UpdateProductOperator(input: SupplierDto | null | undefined): Observable<SupplierDto> {
    let url_ = this.apiUrlProductOperatorManager + "Update";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(input);
    return this._serviceHelperService.update(url_, content_);

  }

  DeleteProductOperator(id: number): Observable<any> {
    let url_ = this.apiUrlProductOperatorManager + "Delete?";
    if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");

    return this._serviceHelperService.delete(url_);
  }

  DeleteForMultipleProductOperator(ids: number[]): Observable<any> {
    let url_ = this.apiUrlProductOperatorManager + "DeleteForMultiple";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(ids);
    return this._serviceHelperService.deleteByCondition(url_, content_);
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

}






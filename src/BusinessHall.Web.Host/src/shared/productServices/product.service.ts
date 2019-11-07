
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';


import { ProductDto, ProductFaceValueDto, ProductOperatorDto, FaceValueDto, OperatorDto, ProductStatusEnum } from '@shared/models/product';


import { AppConsts } from '../AppConsts';

import { ServiceHelperService } from '../serviceHelpers/service-helper.service';

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

/**
 * ProductManager
 * ProductFaceValueManager
 * ProductOperatorManager
 * FaceValueManager
 */
@Injectable()
export class ProductService {
  private http: HttpClient;
  private apiUrl: string = "/api/services/app/ProductManager/";
  private apiUrlProductFaceValueManager: string = "/api/services/app/ProductFaceValueManager/";
  private apiUrlProductOperatorManager: string = "/api/services/app/ProductOperatorManager/";
  private apiUrlFaceValueManager: string = "/api/services/app/FaceValueManager/";

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

  GetProductFaceValueById(id: number): Observable<any> {
    let url_ = this.apiUrlProductFaceValueManager + "GetById?id=" + id;
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  /**
   * @param input (optional) 
   * @return Success
   */
  CreateProductFaceValue(input: ProductFaceValueDto | null | undefined): Observable<ProductFaceValueDto> {
    let url_ = this.apiUrlProductFaceValueManager + "Create";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(input);
    return this._serviceHelperService.create(url_, content_);
  }

  /**
 * @param input (optional) 
 * @return Success
 */
  UpdateProductFaceValue(input: ProductFaceValueDto | null | undefined): Observable<ProductFaceValueDto> {
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
    let content_: string = this._serviceHelperService.getMultiDeleteJsonString(ids);
    return this._serviceHelperService.deleteByCondition(url_, content_);
  }



  GetAllProductOperator(): Observable<any> {
    let url_ = this.apiUrlProductOperatorManager + "GetAll";
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  GetProductOperatorById(id: number): Observable<any> {
    let url_ = this.apiUrlProductOperatorManager + "GetById?id=" + id;
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  /**
   * @param input (optional) 
   * @return Success
   */
  CreateProductOperator(input: ProductOperatorDto | null | undefined): Observable<ProductOperatorDto> {
    let url_ = this.apiUrlProductOperatorManager + "Create";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(input);
    return this._serviceHelperService.create(url_, content_);
  }

  /**
 * @param input (optional) 
 * @return Success
 */
  UpdateProductOperator(input: ProductOperatorDto | null | undefined): Observable<ProductOperatorDto> {
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
    let content_: string = this._serviceHelperService.getMultiDeleteJsonString(ids);
    return this._serviceHelperService.deleteByCondition(url_, content_);
  }



  GetAllProducts(): Observable<any> {
    let url_ = this.apiUrl + "GetAll";
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  GetProductById(id: number): Observable<any> {
    let url_ = this.apiUrl + "GetById?id=" + id;
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  /**
   * @param input (optional) 
   * @return Success
   */
  CreateProduct(input: ProductDto | null | undefined): Observable<ProductDto> {
    let url_ = this.apiUrl + "Create";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(input);
    return this._serviceHelperService.create(url_, content_);
  }

  /**
 * @param input (optional) 
 * @return Success
 */
  UpdateProduct(input: ProductDto | null | undefined): Observable<ProductDto> {
    let url_ = this.apiUrl + "Update";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(input);
    return this._serviceHelperService.update(url_, content_);

  }

  DeleteProduct(id: number): Observable<any> {
    let url_ = this.apiUrl + "Delete?";
    if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");

    return this._serviceHelperService.delete(url_);
  }

  DeleteForMultipleProducts(ids: number[]): Observable<any> {
    let url_ = this.apiUrl + "DeleteForMultiple";
    url_ = url_.replace(/[?&]$/, "");
    let content_: string = this._serviceHelperService.getMultiDeleteJsonString(ids);
    return this._serviceHelperService.deleteByCondition(url_, content_);
  }

  OnOrOutShelf(updateProductStatusDto: any) {
    let url_ = this.apiUrl + "OnOrOutShelf";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(updateProductStatusDto);
    return this._serviceHelperService.post(url_, content_);
  }



  GetAllFaceValues(): Observable<any> {
    let url_ = this.apiUrlFaceValueManager + "GetAll";
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  GetFaceValueById(id: number): Observable<any> {
    let url_ = this.apiUrlFaceValueManager + "GetById?id=" + id;
    url_ = url_.replace(/[?&]$/, "");
    return this._serviceHelperService.get(url_);
  }

  /**
   * @param input (optional) 
   * @return Success
   */
  CreateFaceValue(input: FaceValueDto | null | undefined): Observable<FaceValueDto> {
    let url_ = this.apiUrlFaceValueManager + "Create";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(input);
    return this._serviceHelperService.create(url_, content_);
  }

  /**
 * @param input (optional) 
 * @return Success
 */
  UpdateFaceValue(input: FaceValueDto | null | undefined): Observable<FaceValueDto> {
    let url_ = this.apiUrlFaceValueManager + "Update";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(input);
    return this._serviceHelperService.update(url_, content_);

  }

  DeleteFaceValue(id: number): Observable<any> {
    let url_ = this.apiUrlFaceValueManager + "Delete?";
    if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");

    return this._serviceHelperService.delete(url_);
  }

  DeleteForMultipleFaceValues(ids: number[]): Observable<any> {
    let url_ = this.apiUrlFaceValueManager + "DeleteForMultiple";
    url_ = url_.replace(/[?&]$/, "");
    let content_: string = this._serviceHelperService.getMultiDeleteJsonString(ids);
    return this._serviceHelperService.deleteByCondition(url_, content_);
  }


}



import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

import { AppConsts } from '../AppConsts';

import { ServiceHelperService } from '../serviceHelpers/service-helper.service';

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class BasicDataService {
  private http: HttpClient;
  private apiUrl = "/api/services/app/BasicData/";
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(
    @Inject(HttpClient) http: HttpClient,
    private _serviceHelperService: ServiceHelperService
  ) {
    this.http = http;
  }

  /**
   * return ProvinceDto[]
   */
  GetProvinceListCache(): Observable<any> {
    let url_ = this.apiUrl + "GetProvinceListCache";
    return this._serviceHelperService.get(url_);
  }

  /**
   * return CityDto[]
   */
  GetCityListCache(): Observable<any> {
    let url_ = this.apiUrl + "GetCityListCache";
    return this._serviceHelperService.get(url_);
  }

  /**
 * return EthnicGroupDto[]
 */
  GetEthnicGroupListCache(): Observable<any> {
    let url_ = this.apiUrl + "GetEthnicGroupListCache";
    return this._serviceHelperService.get(url_);
  }

  /**
   * return AreaDto[]
   */
  GetAreaListCache(): Observable<any> {
    let url_ = this.apiUrl + "GetAreaListCache";
    return this._serviceHelperService.get(url_);
  }


  /**
    * return TenantDto[]
    */
  GetAllTenantList(): Observable<any> {
    let url_ =  this.apiUrl + "GetAllTenantList";
    return this._serviceHelperService.get(url_);
  }
}

export class ProvinceDto {
  id: number;
  provinceId: string;
  name: string;
  tenantId: number;
}

export class CityDto {
  id: number;
  cityId: string;
  provinceId: string;
  name: string;
  tenantId: number;
}

export class AreaDto {
  id: number;
  cityId: string;
  areaId: string;
  name: string;
  tenantId: number;
}

/**
 * 种族
 */
export class EthnicGroupDto {
  id: number;
  name: string;
  tenantId: number;
}

export class TenantDto {
  id: number;
  name: string;
  tenancyName: number;
  isActive: boolean;
}




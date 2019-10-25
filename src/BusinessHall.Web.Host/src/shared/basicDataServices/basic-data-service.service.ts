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
  private baseUrl: string;
  private apiUrl = "/api/services/app/BasicData/";
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(
    @Inject(HttpClient) http: HttpClient,
    private _serviceHelperService: ServiceHelperService,
    @Optional() @Inject(API_BASE_URL) baseUrl?: string
  ) {
    this.http = http;
    this.baseUrl = baseUrl ? baseUrl : "";
    this.baseUrl = AppConsts.remoteServiceBaseUrl;
    console.log("URL", AppConsts.remoteServiceBaseUrl);
  }

  /**
   * return ProvinceDto[]
   */
  GetProvinceListCache(): Observable<any> {
    let url_ = this.baseUrl + this.apiUrl + "GetProvinceListCache";
    // if (permission !== undefined)
    //     url_ += "Permission=" + encodeURIComponent("" + permission) + "&"; 
    url_ = url_.replace(/[?&]$/, "");
    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };
    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this._serviceHelperService.processGetDatas(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this._serviceHelperService.processGetDatas(<any>response_);
        } catch (e) {
          return <Observable<any>><any>_observableThrow(e);
        }
      } else
        return <Observable<any>><any>_observableThrow(response_);
    }));
  }

  /**
   * return CityDto[]
   */
  GetCityListCache(): Observable<any> {
    let url_ = this.baseUrl + this.apiUrl + "GetCityListCache";
    // if (permission !== undefined)
    //     url_ += "Permission=" + encodeURIComponent("" + permission) + "&"; 
    url_ = url_.replace(/[?&]$/, "");
    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };
    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this._serviceHelperService.processGetDatas(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this._serviceHelperService.processGetDatas(<any>response_);
        } catch (e) {
          return <Observable<any>><any>_observableThrow(e);
        }
      } else
        return <Observable<any>><any>_observableThrow(response_);
    }));
  }

  /**
 * return EthnicGroupDto[]
 */
  GetEthnicGroupListCache(): Observable<any> {
    let url_ = this.baseUrl + this.apiUrl + "GetEthnicGroupListCache";
    // if (permission !== undefined)
    //     url_ += "Permission=" + encodeURIComponent("" + permission) + "&"; 
    url_ = url_.replace(/[?&]$/, "");
    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };
    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this._serviceHelperService.processGetDatas(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this._serviceHelperService.processGetDatas(<any>response_);
        } catch (e) {
          return <Observable<any>><any>_observableThrow(e);
        }
      } else
        return <Observable<any>><any>_observableThrow(response_);
    }));
  }

  /**
   * return AreaDto[]
   */
  GetAreaListCache(): Observable<any> {
    let url_ = this.baseUrl + this.apiUrl + "GetAreaListCache";
    // if (permission !== undefined)
    //     url_ += "Permission=" + encodeURIComponent("" + permission) + "&"; 
    url_ = url_.replace(/[?&]$/, "");
    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };
    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this._serviceHelperService.processGetDatas(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this._serviceHelperService.processGetDatas(<any>response_);
        } catch (e) {
          return <Observable<any>><any>_observableThrow(e);
        }
      } else
        return <Observable<any>><any>_observableThrow(response_);
    }));
  }


  /**
    * return TenantDto[]
    */
  GetAllTenantList(): Observable<any> {
    let url_ = this.baseUrl + this.apiUrl + "GetAllTenantList";
    // if (permission !== undefined)
    //     url_ += "Permission=" + encodeURIComponent("" + permission) + "&"; 
    url_ = url_.replace(/[?&]$/, "");
    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };
    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this._serviceHelperService.processGetDatas(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this._serviceHelperService.processGetDatas(<any>response_);
        } catch (e) {
          return <Observable<any>><any>_observableThrow(e);
        }
      } else
        return <Observable<any>><any>_observableThrow(response_);
    }));
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




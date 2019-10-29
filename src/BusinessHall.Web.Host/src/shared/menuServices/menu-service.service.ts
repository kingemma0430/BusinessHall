import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

import { AppConsts } from '../AppConsts';

import { ServiceHelperService } from '../serviceHelpers/service-helper.service';

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class MenuServiceService {
  private http: HttpClient;
  private apiUrl: string = "/api/services/app/Menu/";


  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(
    @Inject(HttpClient) http: HttpClient,
    private _serviceHelperService: ServiceHelperService
  ) {
    this.http = http;
  }

  GetAllMenus(): Observable<any> {
    let url_ = this.apiUrl + "GetAllMenus";
    return this._serviceHelperService.get(url_);
  }

  GetMenusForCurreuntUser(): Observable<any> {
    let url_ = this.apiUrl + "GetMenusForCurreuntUser";
    return this._serviceHelperService.get(url_);
  }

}

export class AbpMenuDto {
  id: number;
  tenantId: number;
  parentMenuId: number;
  name: string;
  displayName: string;
  menuUrlRoute: string;
  icon: string;
  description: string;
  isActive: boolean;
  menuOrder: number;
  children: AbpMenuDto[];
  permissionName: string;
}

export class MenuItemNode {
  menuNode: AbpMenuDto;
  children: MenuItemNode[];
}




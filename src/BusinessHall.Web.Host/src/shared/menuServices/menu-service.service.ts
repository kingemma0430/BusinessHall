import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import * as Enumerable from 'linq';

import { AppConsts } from '../AppConsts';

import { ServiceHelperService } from '../serviceHelpers/service-helper.service';
import { MenuItemDto } from '@shared/layout/menu-item';

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


  setMenuChildren(inputMenus: AbpMenuDto[]) {
    let returnMenus: MenuItemDto[] = [];
    if (inputMenus) {
      inputMenus.forEach(element => {
        element.permissionName = "Pages." + element.name;
      });
      inputMenus = Enumerable.from(inputMenus).orderBy(x => x.menuOrder).toArray();
      let parentTmpMenus: AbpMenuDto[] = Enumerable.from(inputMenus).where(x => !x.parentMenuId).orderBy(x => x.menuOrder).toArray();
      parentTmpMenus.forEach(elementParent => {
        let itemRoot: MenuItemDto = new MenuItemDto(elementParent.name, elementParent.permissionName, elementParent.icon, elementParent.menuUrlRoute);
        itemRoot.items = [];
        this.loadBelowLevelMenu(itemRoot, elementParent, inputMenus);
        returnMenus.push(itemRoot);
      });
    }
    console.log("this.menuItems", returnMenus);
    return returnMenus;
  }


  loadBelowLevelMenu(parent: MenuItemDto, parentNode: AbpMenuDto, fullMenu: AbpMenuDto[]) {
    let children: AbpMenuDto[] = Enumerable.from(fullMenu).where(x => x.parentMenuId == parentNode.id).toArray();
    if (children && children.length > 0) {
      children.forEach(element => {
        let item: MenuItemDto = new MenuItemDto(element.name, element.permissionName, element.icon, element.menuUrlRoute);
        let childrenBelowLevel: AbpMenuDto[] = Enumerable.from(fullMenu).where(x => x.parentMenuId == element.id).toArray();
        if (childrenBelowLevel && childrenBelowLevel.length > 0) {
          this.loadBelowLevelMenu(item, element, fullMenu);
        }
        parent.items.push(item);
      });
    }
  }

  getDefaultMenus() {
    let tmpmenuItems: AbpMenuDto[] = [];
    let homeMenu: AbpMenuDto = new AbpMenuDto();
    homeMenu.id = 0;
    homeMenu.icon = "home";
    homeMenu.menuUrlRoute = "/app/home";
    homeMenu.name = "HomePage";
    homeMenu.permissionName = "Pages." + homeMenu.name;
    tmpmenuItems.push(homeMenu);

    let abouMenu: AbpMenuDto = new AbpMenuDto();
    abouMenu.id = 1;
    abouMenu.icon = "info";
    abouMenu.menuUrlRoute = "/app/about";
    abouMenu.name = "About";
    abouMenu.permissionName = "Pages." + abouMenu.name;
    tmpmenuItems.push(abouMenu);
    return tmpmenuItems;
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
  url: string;
}

export class MenuItemNode {
  menuNode: AbpMenuDto;
  children: MenuItemNode[];
}




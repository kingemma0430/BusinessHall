import { Component, Injector, ViewEncapsulation } from '@angular/core';

import { AppComponentBase } from '@shared/app-component-base';
import * as Enumerable from 'linq';
import { AppConsts } from '@shared/AppConsts';
import { MissionService, MissionKeyEnum, MissionParameter } from '@shared/serviceHelpers/MissionService';
import { MenuItemDto } from '@shared/layout/menu-item';
import { MenuServiceService, AbpMenuDto, MenuItemNode } from '@shared/menuServices/menu-service.service';

@Component({
    templateUrl: './topbar.component.html',
    selector: 'top-bar',
    encapsulation: ViewEncapsulation.None
})
export class TopBarComponent extends AppComponentBase {
    globalSearchText: string;
    abpMenuItems: AbpMenuDto[] = [];
    constructor(
        injector: Injector,
        private _missionService: MissionService,
        private _menuServiceServer: MenuServiceService
    ) {
        super(injector);
        this.getUserMenus();
    }

    closeSearch() {
        let paramerter: MissionParameter = new MissionParameter();
        paramerter.key = MissionKeyEnum.GlobalSearch;
        paramerter.value = this.globalSearchText;
        console.log("global search", this.globalSearchText);
        this._missionService.announceMission(paramerter);
    }

    getUserMenus() {
        let menuJson: string = localStorage.getItem(AppConsts.localStorage_menuKey);
        if (menuJson) {
            this.abpMenuItems = JSON.parse(menuJson);
        }
        else {
            localStorage.removeItem(AppConsts.localStorage_menuKey);
            this._menuServiceServer.GetMenusForCurreuntUser().subscribe(data => {
                if (data) {
                    let inputMenus: AbpMenuDto[] = data["items"];
                    this.loadMenus(inputMenus);
                }
            })
        }
    }

    loadMenus(inputMenus: AbpMenuDto[]) {
        if (inputMenus) {
            inputMenus.forEach(element => {
                element.permissionName = "Pages." + element.name;
            });
            this.abpMenuItems = inputMenus;
        }
        else {
            this.abpMenuItems = this.getDefaultMenus();
        }
        localStorage.setItem(AppConsts.localStorage_menuKey, JSON.stringify(this.abpMenuItems));
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

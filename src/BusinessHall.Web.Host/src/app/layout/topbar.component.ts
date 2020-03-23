import { Component, Injector, ViewEncapsulation } from '@angular/core';

import { AppComponentBase } from '@shared/app-component-base';
import * as Enumerable from 'linq';
import { AppConsts } from '@shared/AppConsts';
import { MissionService, MissionKeyEnum, MissionParameter } from '@shared/serviceHelpers/MissionService';
import { MenuItemDto } from '@shared/layout/menu-item';
import { MenuServiceService, AbpMenuDto, MenuItemNode } from '../../shared/menuServices/menu-service.service';

@Component({
    templateUrl: './topbar.component.html',
    selector: 'top-bar',
    encapsulation: ViewEncapsulation.None
})
export class TopBarComponent extends AppComponentBase {


    globalSearchText: string;
    menuItems: MenuItemDto[] = [];
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
            this.menuItems = JSON.parse(menuJson);
        }
        else {
            localStorage.removeItem(AppConsts.localStorage_menuKey);
            this._menuServiceServer.GetMenusForCurreuntUser().subscribe(data => {
                if (data) {
                    let newTmpMenus: AbpMenuDto[] = data["items"];
                    this.loadMenus(newTmpMenus);
                }
            })
        }
    }

    loadMenus(inputMenus: AbpMenuDto[]) {

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
                this.menuItems.push(itemRoot);
            });
        }
        else {
            this.menuItems = this.getDefaultMenus();
        }
        localStorage.setItem(AppConsts.localStorage_menuKey, JSON.stringify(this.menuItems));
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
        let tmpmenuItems: MenuItemDto[] = [
            new MenuItemDto('HomePage', '', 'home', '/app/home'),
            new MenuItemDto('About', '', 'info', '/app/about')
        ];
        return tmpmenuItems;
    }
}

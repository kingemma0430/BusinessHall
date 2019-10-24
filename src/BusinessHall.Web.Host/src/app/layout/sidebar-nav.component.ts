import { Component, Injector, ViewEncapsulation, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { MenuItem } from '@shared/layout/menu-item';

import { MenuServiceService, AbpMenuDto, MenuItemNode } from '../../shared/menuServices/menu-service.service';
import { AppConsts } from '@shared/AppConsts';

import * as Enumerable from 'linq';

@Component({
    templateUrl: './sidebar-nav.component.html',
    selector: 'sidebar-nav',
    encapsulation: ViewEncapsulation.None
})
export class SideBarNavComponent extends AppComponentBase {

    menuItems: MenuItem[] = [];


    constructor(
        injector: Injector,
        private _menuServiceService: MenuServiceService
    ) {
        super(injector);
        this.getUserMenus();
    }

    getDefaultMenus() {
        let tmpmenuItems: MenuItem[] = [
            new MenuItem(this.l('HomePage'), '', 'home', '/app/home'),
            new MenuItem(this.l('About'), '', 'info', '/app/about')
        ];
        return tmpmenuItems;
    }

    getUserMenus() {
        let menuJson: string = localStorage.getItem(AppConsts.localStorage_menuKey);
        if (menuJson) {
            this.menuItems = JSON.parse(menuJson);
        }
        else {
            localStorage.removeItem(AppConsts.localStorage_menuKey);
            this._menuServiceService.GetMenusForCurreuntUser().subscribe(data => {
                if (data) {
                    let newTmpMenus: AbpMenuDto[] = data["items"];
                    this.loadMenus(newTmpMenus);
                }
            })
        }
    }

    loadMenus(inputMenus: AbpMenuDto[]) {
        let menus = [];
        if (inputMenus) {
            inputMenus.forEach(element => {
                element.permissionName = "Pages." + element.name;
            });
            inputMenus = Enumerable.from(inputMenus).orderBy(x => x.menuOrder).toArray();
            let parentTmpMenus: AbpMenuDto[] = Enumerable.from(inputMenus).where(x => !x.parentMenuId).orderBy(x => x.menuOrder).toArray();
            parentTmpMenus.forEach(elementParent => {
                let itemRoot: MenuItem = new MenuItem(this.l(elementParent.name), elementParent.permissionName, elementParent.icon, elementParent.menuUrlRoute);
                itemRoot.items = [];
                this.loadBelowLevelMenu(itemRoot, elementParent, inputMenus);
                menus.push(itemRoot);
            });
        }
        else {
            menus = this.getDefaultMenus();
        }
        this.menuItems = menus;
        localStorage.setItem(AppConsts.localStorage_menuKey, JSON.stringify(this.menuItems));
    }


    loadBelowLevelMenu(parent: MenuItem, parentNode: AbpMenuDto, fullMenu: AbpMenuDto[]) {
        let children: AbpMenuDto[] = Enumerable.from(fullMenu).where(x => x.parentMenuId == parentNode.id).toArray();
        if (children && children.length > 0) {
            children.forEach(element => {
                let item: MenuItem = new MenuItem(this.l(element.name), element.permissionName, element.icon, element.menuUrlRoute);
                let childrenBelowLevel: AbpMenuDto[] = Enumerable.from(fullMenu).where(x => x.parentMenuId == element.id).toArray();
                if (childrenBelowLevel && childrenBelowLevel.length > 0) {
                    this.loadBelowLevelMenu(item, element, fullMenu);
                }
                parent.items.push(item);
            });
        }
    }

    showChildren(menuItem: MenuItem) {
        if (menuItem && menuItem.items && menuItem.items.length > 0) {
            
        }
    }
}

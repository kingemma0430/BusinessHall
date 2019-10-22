import { Component, Injector, ViewEncapsulation } from '@angular/core';
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
    // menuItems: MenuItem[] = [
    //     new MenuItem(this.l('HomePage'), '', 'home', '/app/home'),
    //     new MenuItem(this.l('BatchManager'), '', 'menu', '', [
    //         new MenuItem(this.l('SupplierManager'), '', 'info', '/app/SupplierManager'),
    //         new MenuItem(this.l('ProductManager'), '', 'info', '/app/ProductManager'),
    //         new MenuItem(this.l('SupplierPay'), '', 'info', '/app/SupplierPay'),
    //         new MenuItem(this.l('AgentManager'), '', 'info', '/app/AgentManager'),
    //         new MenuItem(this.l('CallOrder'), '', 'info', '/app/CallOrder'),
    //         new MenuItem(this.l('RealtimeData'), '', 'info', '/app/RealtimeData'),
    //         new MenuItem(this.l('DailyBalance'), '', 'info', '/app/DailyBalance'),
    //         new MenuItem(this.l('AlertSetting'), '', 'info', '/app/AlertSetting'),
    //         new MenuItem(this.l('CreditManager'), '', 'info', '/app/CreditManager'),
    //         // new MenuItem('ASP.NET Boilerplate', '', '', '', [
    //         //     new MenuItem('Home', '', '', 'https://aspnetboilerplate.com/?ref=abptmpl'),
    //         //     new MenuItem('Templates', '', '', 'https://aspnetboilerplate.com/Templates?ref=abptmpl'),
    //         //     new MenuItem('Samples', '', '', 'https://aspnetboilerplate.com/Samples?ref=abptmpl'),
    //         //     new MenuItem('Documents', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl')
    //         // ]),
    //         // new MenuItem('ASP.NET Zero', '', '', '', [
    //         //     new MenuItem('Home', '', '', 'https://aspnetzero.com?ref=abptmpl'),
    //         //     new MenuItem('Description', '', '', 'https://aspnetzero.com/?ref=abptmpl#description'),
    //         //     new MenuItem('Features', '', '', 'https://aspnetzero.com/?ref=abptmpl#features'),
    //         //     new MenuItem('Pricing', '', '', 'https://aspnetzero.com/?ref=abptmpl#pricing'),
    //         //     new MenuItem('Faq', '', '', 'https://aspnetzero.com/Faq?ref=abptmpl'),
    //         //     new MenuItem('Documents', '', '', 'https://aspnetzero.com/Documents?ref=abptmpl')
    //         // ])
    //     ]),
    //     new MenuItem(this.l('Tenants'), 'Pages.Tenants', 'business', '/app/tenants'),
    //     new MenuItem(this.l('Users'), 'Pages.Users', 'people', '/app/users'),
    //     new MenuItem(this.l('Roles'), 'Pages.Roles', 'local_offer', '/app/roles'),
    //     new MenuItem(this.l('About'), '', 'info', '/app/about')
    // ];

    constructor(
        injector: Injector,
        private _menuServiceService: MenuServiceService
    ) {
        super(injector);
        this.getUserMenus();
    }

    showMenuItem(menuItem): boolean {
        if (menuItem.permissionName) {
            return this.permission.isGranted(menuItem.permissionName);
        }

        return true;
    }

    getUserMenus() {
        let menus = [];
        let tmpMenus: AbpMenuDto[] = [];
        let menuJson: string = localStorage.getItem(AppConsts.localStorage_menuKey);
        if (menuJson) {
            tmpMenus = JSON.parse(menuJson);
        }
        if (tmpMenus && tmpMenus.length > 0) {
            this.loadMenus(tmpMenus);
        } else {
            localStorage.removeItem(AppConsts.localStorage_menuKey);
            this._menuServiceService.GetMenusForCurreuntUser().subscribe(data => {
                console.log("menus==========", data);
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
                let item: MenuItem = new MenuItem(this.l(elementParent.name), elementParent.permissionName, elementParent.icon, elementParent.menuUrlRoute);
                this.loadBelowLevelMenu(item, elementParent, inputMenus);
                menus.push(item);
            });
        }
        this.menuItems = menus;
        localStorage.setItem(AppConsts.localStorage_menuKey, JSON.stringify(inputMenus));
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
}

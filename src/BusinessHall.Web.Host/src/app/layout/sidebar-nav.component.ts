import { Component, Injector, ViewEncapsulation, OnInit, AfterViewInit, Input } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { MenuItemDto } from '@shared/layout/menu-item';

import { MenuServiceService, AbpMenuDto, MenuItemNode } from '../../shared/menuServices/menu-service.service';
import { AppConsts } from '@shared/AppConsts';

import * as Enumerable from 'linq';

@Component({
    templateUrl: './sidebar-nav.component.html',
    selector: 'sidebar-nav',
    encapsulation: ViewEncapsulation.Emulated
})
export class SideBarNavComponent extends AppComponentBase implements OnInit {

    @Input()
    abpMenuItems: AbpMenuDto[] = [];

    @Input()
    menuItems: MenuItemDto[] = [];

    isLeftSidebar: boolean = true;

    constructor(
        injector: Injector,
        private _menuServiceService: MenuServiceService
    ) {
        super(injector);
    }

    ngOnInit() {
        //this.loadMenus(this.abpMenuItems);
    }

    // loadMenus(inputMenus: AbpMenuDto[]) {
    //     if (inputMenus) {
    //         inputMenus.forEach(element => {
    //             element.permissionName = "Pages." + element.name;
    //         });
    //         inputMenus = Enumerable.from(inputMenus).orderBy(x => x.menuOrder).toArray();
    //         let parentTmpMenus: AbpMenuDto[] = Enumerable.from(inputMenus).where(x => !x.parentMenuId).orderBy(x => x.menuOrder).toArray();
    //         parentTmpMenus.forEach(elementParent => {
    //             let itemRoot: MenuItemDto = new MenuItemDto(elementParent.name, elementParent.permissionName, elementParent.icon, elementParent.menuUrlRoute);
    //             itemRoot.items = [];
    //             this.loadBelowLevelMenu(itemRoot, elementParent, inputMenus);
    //             this.menuItems.push(itemRoot);
    //         });
    //     }

    // }


    // loadBelowLevelMenu(parent: MenuItemDto, parentNode: AbpMenuDto, fullMenu: AbpMenuDto[]) {
    //     let children: AbpMenuDto[] = Enumerable.from(fullMenu).where(x => x.parentMenuId == parentNode.id).toArray();
    //     if (children && children.length > 0) {
    //         children.forEach(element => {
    //             let item: MenuItemDto = new MenuItemDto(element.name, element.permissionName, element.icon, element.menuUrlRoute);
    //             let childrenBelowLevel: AbpMenuDto[] = Enumerable.from(fullMenu).where(x => x.parentMenuId == element.id).toArray();
    //             if (childrenBelowLevel && childrenBelowLevel.length > 0) {
    //                 this.loadBelowLevelMenu(item, element, fullMenu);
    //             }
    //             parent.items.push(item);
    //         });
    //     }
    // }
}

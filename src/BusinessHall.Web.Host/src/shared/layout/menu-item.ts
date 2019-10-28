import { MenuItem } from 'primeng/api';

export class MenuItemDto {
    name = '';
    permissionName = '';
    icon = '';
    routerLink = '';
    url = '';
    items: MenuItemDto[] = [];

    constructor(name: string, permissionName: string, icon: string, routerLink: string, url: string = null, childItems: MenuItemDto[] = null) {
        this.name = name;
        this.permissionName = permissionName;
        this.icon = icon;
        this.routerLink = routerLink;
        this.url = url;

        if (childItems) {
            this.items = childItems;
        } else {
            this.items = [];
        }
    }
}

export class MenuItemP implements MenuItem {
    label?: string;
    icon?: string;
    url?: string;
    routerLink?: any;
    queryParams?: {
        [k: string]: any;
    };
    items?: MenuItemP[] = [];
    expanded?: boolean;
    disabled?: boolean;
    visible?: boolean;
    target?: string;
    constructor(label: string, permissionName: string, icon: string, routerLink: string, url: string = null, childItems: MenuItemP[] = null) {
        this.label = label;
        this.icon = icon;
        this.routerLink = [routerLink];
        this.url = url;

        if (childItems) {
            this.items = childItems;
        } else {
            this.items = [];
        }
    }
}



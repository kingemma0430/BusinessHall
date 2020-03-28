import { MenuItem } from 'primeng/api';

export class MenuItemDto {
    name = '';
    permissionName = '';
    icon = '';
    menuUrlRoute = '';
    url = '';
    items: MenuItemDto[] = [];

    constructor(name: string, permissionName: string, icon: string, routerLink: string, url: string = null, childItems: MenuItemDto[] = null) {
        this.name = name;
        this.permissionName = permissionName;
        this.icon = icon;
        this.menuUrlRoute = routerLink;
        this.url = url;

        if (childItems) {
            this.items = childItems;
        } else {
            this.items = [];
        }
    }
}

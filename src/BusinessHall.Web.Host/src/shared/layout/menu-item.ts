export class MenuItem {
    name = '';
    permissionName = '';
    icon = '';
    routerLink = '';
    url = '';
    items: MenuItem[] = [];

    constructor(name: string, permissionName: string, icon: string, routerLink: string, url: string = null, childItems: MenuItem[] = null) {
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

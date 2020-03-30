import { Component, OnInit, Injector, ViewEncapsulation, Input } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { AppConsts } from '@shared/AppConsts';

import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './sidebar-user-area.component.html',
    selector: 'sidebar-user-area',
    encapsulation: ViewEncapsulation.None
})
export class SideBarUserAreaComponent extends AppComponentBase implements OnInit {

    shownLoginName = '';

    @Input()
    isLeftSidebar: boolean = false;

    items: MenuItem[] = [];
    constructor(
        injector: Injector,
        private _authService: AppAuthService
    ) {
        super(injector);
    }

    ngOnInit() {
        this.shownLoginName = this.appSession.getShownLoginName();
        this.items = [
            {
                label: this.l('Logout'), icon: 'pi pi-esit', command: () => {
                    this.logout();
                }
            },
            { label: this.l('UpdatePassword'), icon: 'pi pi-lock', routerLink: ['/app/update-password'] }
        ];
    }

    logout(): void {
        localStorage.removeItem(AppConsts.localStorage_menuKey);
        this._authService.logout();
    }
}

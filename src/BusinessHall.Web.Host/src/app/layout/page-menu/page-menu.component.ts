import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { MatMenu } from '@angular/material/menu';

import * as Enumerable from 'linq';
import { AppConsts } from '@shared/AppConsts';
import { MissionService, MissionKeyEnum, MissionParameter } from '@shared/serviceHelpers/MissionService';
import { MenuItemDto } from '@shared/layout/menu-item';
import { MenuServiceService, AbpMenuDto, MenuItemNode } from '../../../shared/menuServices/menu-service.service';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.css']
})
export class PageMenuComponent implements OnInit {

  @ViewChild('subMenu', { static: true }) subMenu: any;

  @Input()
  abpMenuItems: AbpMenuDto[] = [];

  @Input()
  rootMenuItems: AbpMenuDto[] = [];
  @Input()
  menuItems: MenuItemDto[] = [];

  subMenuItems: AbpMenuDto[] = [];

  subSubMenuItems: AbpMenuDto[] = [];

  constructor(private menuServiceService: MenuServiceService, private _router: Router) { }

  ngOnInit() {
  }

  openSubMenu(menuItem: AbpMenuDto) {

    this.subMenuItems = [];
    this.subSubMenuItems = [];
    // if (this.subMenu) {
    //   this.subMenu["items"] = [];
    // }
    this.subMenuItems = Enumerable.from(this.abpMenuItems).where(x => x.parentMenuId == menuItem.id).toArray();

  }

  openSubSubMenu(menuItem: AbpMenuDto) {
    this.subSubMenuItems = [];
    this.subSubMenuItems = Enumerable.from(this.abpMenuItems).where(x => x.parentMenuId == menuItem.id).toArray();
  }

  transferToAnotherRouter(menuItem: AbpMenuDto) {
    console.log("transferToAnotherRouter", menuItem);
    this._router.navigateByUrl(menuItem.menuUrlRoute);
  }
}

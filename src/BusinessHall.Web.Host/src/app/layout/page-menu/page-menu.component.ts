import { Component, OnInit, Input } from '@angular/core';

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


  @Input()
  abpMenuItems: AbpMenuDto[] = [];

  @Input()
  rootMenuItems: AbpMenuDto[] = [];
  @Input()
  menuItems: MenuItemDto[] = [];

  subMenuItems: AbpMenuDto[] = [];

  subSubMenuItems: AbpMenuDto[] = [];


  constructor(private menuServiceService: MenuServiceService) { }

  ngOnInit() {
  }

  openSubMenu(menuItem: AbpMenuDto) {
    this.subMenuItems = Enumerable.from(this.abpMenuItems).where(x => x.parentMenuId == menuItem.id).toArray();
  }

  openSubSubMenu(menuItem: AbpMenuDto) {
    this.subSubMenuItems = Enumerable.from(this.abpMenuItems).where(x => x.parentMenuId == menuItem.id).toArray();
  }
}

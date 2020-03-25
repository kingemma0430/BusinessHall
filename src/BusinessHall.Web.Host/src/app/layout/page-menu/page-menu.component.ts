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

  constructor(private menuServiceService: MenuServiceService) { }

  ngOnInit() {
  }

}

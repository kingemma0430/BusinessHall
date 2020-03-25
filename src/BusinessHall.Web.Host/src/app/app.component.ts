import {
  Component,
  ViewContainerRef,
  Injector,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef
} from "@angular/core";
import { AppComponentBase } from "@shared/app-component-base";

import { SignalRAspNetCoreHelper } from "@shared/helpers/SignalRAspNetCoreHelper";

import { AppConsts } from '@shared/AppConsts';
import { MissionService, MissionKeyEnum, MissionParameter, LoaderService } from '@shared/serviceHelpers/MissionService';
import { MenuItemDto } from '@shared/layout/menu-item';
import { MenuServiceService, AbpMenuDto, MenuItemNode } from '@shared/menuServices/menu-service.service';

import * as $ from 'jquery';

@Component({
  templateUrl: "./app.component.html"
})
export class AppComponent extends AppComponentBase
  implements OnInit, AfterViewInit {
  private viewContainerRef: ViewContainerRef;

  breakpointWidth: number = 1170;
  isShowGlobalLoading: boolean = false;
  globalSearchText: string;
  isShowGlobalSearchText: boolean = false;
  abpMenuItems: AbpMenuDto[] = [];

  isLittleScreen: boolean = false;
  constructor(injector: Injector,
    private _missionService: MissionService,
    private _menuServiceServer: MenuServiceService,
    private _loaderService: LoaderService) {
    super(injector);
    this.onWindowResize();
  }


  onWindowResize() {
    var $wind = $(window); //load window
    this.rsizeNew();
    var tmp = this;
    //resize event
    $wind.resize(function () {
      tmp.rsizeNew();
    });
  }

  ngOnInit(): void {
    SignalRAspNetCoreHelper.initSignalR();

    abp.event.on("abp.notifications.received", userNotification => {
      abp.notifications.showUiNotifyForUserNotification(userNotification);

      // Desktop notification
      Push.create("AbpZeroTemplate", {
        body: userNotification.notification.data.message,
        icon: abp.appPath + "assets/app-logo-small.png",
        timeout: 6000,
        onClick: function () {
          window.focus();
          this.close();
        }
      });
    });
    this.getUserMenus();
  }

  ngAfterViewInit(): void {
    if ($.AdminBSB) {
      $.AdminBSB.activateAll();
      $.AdminBSB.activateDemo();
    }

  }

  onResize(event) {
    // exported from $.AdminBSB.activateAll
    $.AdminBSB.leftSideBar.setMenuHeight();
    $.AdminBSB.leftSideBar.checkStatuForResize(false);

    // exported from $.AdminBSB.activateDemo
    $.AdminBSB.demo.setSkinListHeightAndScroll();
    $.AdminBSB.demo.setSettingListHeightAndScroll();
  }

  rsizeNew() {
    var $body = $('body');
    var width = $body.width();
    console.log("rsizeNew", width);
    if (width > this.breakpointWidth) {
      this.isLittleScreen = false;
    }
    else {
      this.isLittleScreen = true;
    }
  }

  globalMessageListner() {
    this._loaderService.status.subscribe((data: any) => {
      if (data) {
        let missionParametr: MissionParameter = data;
        if (missionParametr) {
          if (missionParametr.key == MissionKeyEnum.ShowErrorMessage) {
            // this.msgsError = missionParametr.value;
            this.isShowGlobalLoading = missionParametr.valueBool;
          }
          else {
            this.isShowGlobalLoading = missionParametr.value;
          }
        }
      }
    });
  }


  closeSearch() {
    let paramerter: MissionParameter = new MissionParameter();
    paramerter.key = MissionKeyEnum.GlobalSearch;
    paramerter.value = this.globalSearchText;
    console.log("global search", this.globalSearchText);
    this._missionService.announceMission(paramerter);
    this.isShowGlobalSearchText = false;
    this.globalSearchText = null;
  }
  openSearch() {
    this.isShowGlobalSearchText = true;
  }

  getUserMenus() {
    let menuJson: string = localStorage.getItem(AppConsts.localStorage_menuKey);
    if (menuJson) {
      this.abpMenuItems = JSON.parse(menuJson);
    }
    else {
      localStorage.removeItem(AppConsts.localStorage_menuKey);
      this._menuServiceServer.GetMenusForCurreuntUser().subscribe(data => {
        if (data) {
          let inputMenus: AbpMenuDto[] = data["items"];
          this.loadMenus(inputMenus);
        }
      })
    }
  }

  loadMenus(inputMenus: AbpMenuDto[]) {
    if (inputMenus) {
      inputMenus.forEach(element => {
        element.permissionName = "Pages." + element.name;
      });
      this.abpMenuItems = inputMenus;
    }
    else {
      this.abpMenuItems = this.getDefaultMenus();
    }
    localStorage.setItem(AppConsts.localStorage_menuKey, JSON.stringify(this.abpMenuItems));
  }

  getDefaultMenus() {
    let tmpmenuItems: AbpMenuDto[] = [];
    let homeMenu: AbpMenuDto = new AbpMenuDto();
    homeMenu.id = 0;
    homeMenu.icon = "home";
    homeMenu.menuUrlRoute = "/app/home";
    homeMenu.name = "HomePage";
    homeMenu.permissionName = "Pages." + homeMenu.name;
    tmpmenuItems.push(homeMenu);

    let abouMenu: AbpMenuDto = new AbpMenuDto();
    abouMenu.id = 1;
    abouMenu.icon = "info";
    abouMenu.menuUrlRoute = "/app/about";
    abouMenu.name = "About";
    abouMenu.permissionName = "Pages." + abouMenu.name;
    tmpmenuItems.push(abouMenu);
    return tmpmenuItems;
  }
}

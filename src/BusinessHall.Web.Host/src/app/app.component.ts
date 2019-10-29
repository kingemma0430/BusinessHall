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

import { LoaderService, MissionParameter, MissionKeyEnum } from "@shared/serviceHelpers/MissionService";


@Component({
  templateUrl: "./app.component.html"
})
export class AppComponent extends AppComponentBase
  implements OnInit, AfterViewInit {
  private viewContainerRef: ViewContainerRef;


  isShowGlobalLoading: boolean = false;

  constructor(injector: Injector,
    private _loaderService: LoaderService) {
    super(injector);
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
    //this.globalMessageListner();
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
}

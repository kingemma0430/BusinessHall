import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { MissionService, MissionKeyEnum, MissionParameter } from '@shared/serviceHelpers/MissionService';

@Component({
    templateUrl: './topbar.component.html',
    selector: 'top-bar',
    encapsulation: ViewEncapsulation.None
})
export class TopBarComponent extends AppComponentBase {


    globalSearchText: string;

    constructor(
        injector: Injector,
        private _missionService: MissionService
    ) {
        super(injector);
    }

    closeSearch() {
        let paramerter: MissionParameter = new MissionParameter();
        paramerter.key = MissionKeyEnum.GlobalSearch;
        paramerter.value = this.globalSearchText;
        console.log("global search", this.globalSearchText);
        this._missionService.announceMission(paramerter);
    }
}

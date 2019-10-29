import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


export class MissionParameter {
    key: MissionKeyEnum;
    value: any;
    valueBool: boolean;
}

export enum MissionKeyEnum {
    None = -1,
    ChangeSplitSize = 0,
    ChooseBorrowingItem = 1,
    ChangeMessage = 2,
    ShowErrorMessage = 3,
    HiddedLoading = 3,
}


@Injectable()
export class MissionService {

    // Observable string sources
    private missionAnnouncedSource = new Subject<MissionParameter>();
    private missionConfirmedSource = new Subject<MissionParameter>();

    // Observable string streams
    missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    missionConfirmed$ = this.missionConfirmedSource.asObservable();

    // Service message commands
    announceMission(mission: MissionParameter) {
        this.missionAnnouncedSource.next(mission);
    }
    confirmMission(astronaut: MissionParameter) {
        this.missionConfirmedSource.next(astronaut);
    }
}

@Injectable()
export class LoaderService {
    public status: BehaviorSubject<any> = new BehaviorSubject<any>(false);

    display(value: boolean, missinParameter: MissionParameter = null) {
        if (missinParameter && missinParameter.key == MissionKeyEnum.ShowErrorMessage) {
            this.status.next(missinParameter);
        }
        else {
            missinParameter = new MissionParameter();
            missinParameter.key = MissionKeyEnum.HiddedLoading;
            missinParameter.valueBool = value;
            this.status.next(missinParameter);
        }
    }
}
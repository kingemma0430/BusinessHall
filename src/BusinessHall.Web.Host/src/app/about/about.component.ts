import { Component, Injector, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';

import {
  MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef, DocumentRef, MapServiceFactory,
  BingMapAPILoaderConfig, BingMapAPILoader,
  GoogleMapAPILoader, GoogleMapAPILoaderConfig
} from 'angular-maps';

@Component({
  templateUrl: './about.component.html',
  animations: [appModuleAnimation()]
})
export class AboutComponent extends AppComponentBase implements AfterViewInit {
  _markerTypeId = MarkerTypeId;
  _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1,
    zoom: 6
  };

  _box: IBox = {
    maxLatitude: 32,
    maxLongitude: -92,
    minLatitude: 29,
    minLongitude: -98
  };

  private _iconInfo: IMarkerIconInfo = {
    markerType: MarkerTypeId.FontMarker,
    fontName: 'FontAwesome',
    fontSize: 48,
    color: 'red',
    markerOffsetRatio: { x: 0.5, y: 1 },
    text: '\uF276'
  };

  _click() {
    console.log("hello world...");
  }


  constructor(
    injector: Injector,
    private _mapAPILoader: MapAPILoader
  ) {
    super(injector);
  }

  ngAfterViewInit(): void {

  }

  getCurrentLocation() {
    this._mapAPILoader.Load().then(() => {
      
    });
  }
}


import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { DatePipe, Location } from '@angular/common';


import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

import { AppConsts } from '../AppConsts';

import { LoaderService, MissionKeyEnum, MissionParameter } from './MissionService';


export class SwaggerException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any; };
  result: any;

  constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isSwaggerException = true;

  static isSwaggerException(obj: any): obj is SwaggerException {
    return obj.isSwaggerException === true;
  }
}

@Injectable()
export class ServiceHelperService {
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
  private http: HttpClient;
  private baseUrl: string;
  constructor(
    @Inject(HttpClient) http: HttpClient,
    private _loaderService: LoaderService,
    @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
    this.http = http;
    this.baseUrl = baseUrl ? baseUrl : "";
    this.baseUrl = AppConsts.remoteServiceBaseUrl;
  }

  public get(apiUrl) {
    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };
    return this.http.request("get", this.baseUrl + apiUrl, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetDatas(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetDatas(<any>response_);
        } catch (e) {
          return <Observable<any>><any>_observableThrow(e);
        }
      } else {
        return <Observable<any>><any>_observableThrow(response_);
      }
    }));
  }

  public getByCondition(apiUrl, inputParams) {
    return this.http.request("get", this.baseUrl + apiUrl, { params: inputParams }).pipe(_observableMergeMap((response_: any) => {
      return this.processGetDatas(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetDatas(<any>response_);
        } catch (e) {
          return <Observable<any>><any>_observableThrow(e);
        }
      } else {
        return <Observable<any>><any>_observableThrow(response_);
      }
    }));
  }

  public create(apiUrl, inputJson) {
    let options_: any = {
      body: inputJson,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    };
    return this.http.request("post", this.baseUrl + apiUrl, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetDatas(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetDatas(<any>response_);
        } catch (e) {
          return <Observable<any>><any>_observableThrow(e);
        }
      } else
        return <Observable<any>><any>_observableThrow(response_);
    }));
  }

  public post(apiUrl, inputJson) {
    let options_: any = {
      body: inputJson,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    };
    return this.http.request("post", this.baseUrl + apiUrl, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetDatas(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetDatas(<any>response_);
        } catch (e) {
          return <Observable<any>><any>_observableThrow(e);
        }
      } else
        return <Observable<any>><any>_observableThrow(response_);
    }));
  }


  public update(apiUrl, inputJson) {
    let options_: any = {
      body: inputJson,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    };

    return this.http.request("put", this.baseUrl + apiUrl, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetDatas(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetDatas(<any>response_);
        } catch (e) {
          return <Observable<any>><any>_observableThrow(e);
        }
      } else
        return <Observable<any>><any>_observableThrow(response_);
    }));
  }

  public delete(apiUrl) {
    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
      })
    };
    return this.http.request("delete", this.baseUrl + apiUrl, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processDelete(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processDelete(<any>response_);
        } catch (e) {
          return <Observable<any>><any>_observableThrow(e);
        }
      } else
        return <Observable<any>><any>_observableThrow(response_);
    }));
  }

  public deleteByCondition(apiUrl, ids) {
    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
      })
    };
    return this.http.request("delete", this.baseUrl + apiUrl + "?ids=" + ids, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processDelete(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_) {
        if (response_ instanceof HttpResponseBase) {
          try {
            return this.processDelete(<any>response_);
          } catch (e) {
            return <Observable<any>><any>_observableThrow(e);
          }
        } else {
          return <Observable<any>><any>_observableThrow(response_);
        }
      }
    }));
  }

  public processGetDatas(response: HttpResponseBase): Observable<any> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        // result200 = ListResultDtoOfRoleListDto.fromJS(resultData200);
        return _observableOf(resultData200);
      }));
    } else if (status !== 200 && status !== 204) {
      return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<any>(<any>null);
  }

  public processDelete(response: HttpResponseBase): Observable<void> {
    if (response) {
      const status = response.status;
      const responseBlob =
        response instanceof HttpResponse ? response.body :
          (<any>response).error instanceof Blob ? (<any>response).error : undefined;

      let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
      if (status === 200) {
        return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          return _observableOf<void>(<any>null);
        }));
      } else if (status !== 200 && status !== 204) {
        return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
          return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }));
      }
    }
    return _observableOf<void>(<any>null);
  }

  public throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    abp.ui.clearBusy();
    if (result !== null && result !== undefined)
      return _observableThrow(result);
    else {
      if (response) {
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
      }
      else {
        return new Observable();
      }
    }
  }

  public blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
      if (!blob) {
        observer.next("");
        observer.complete();
      } else {
        let reader = new FileReader();
        reader.onload = event => {
          observer.next((<any>event.target).result);
          observer.complete();
        };
        reader.readAsText(blob);
      }
    });
  }

  public getMultiDeleteJsonString(ids: number[]): string {
    let content: string = "";
    for (let index = 0; index < ids.length; index++) {
      const element = ids[index];
      content += element;
      if (index < ids.length - 1) {
        content += ",";
      }
    }
    return content;
  }

      /**
    * Convert UTC time to local time
    * @param dateTime "2019-03-22T11:11Z" (needConvertToUTC ==false) or "2019-03-22 11:11" (needConvertToUTC ==true)
    * @param needConvertToUTC 
    */
   convertUTCDateToLocalString(dateTime: any, needConvertToUTC: boolean = false) {
    let dateFormart: string = "";
    if (dateTime) {
        let dateTimeString: Date = new Date(dateTime);
        if (needConvertToUTC) {
            let utcTime: string = moment(dateTimeString).format("YYYY-MM-DD HH:mm:ss").replace(" ", "T") + "Z";
            return moment(utcTime).format('LLL');
        }
        else {
            return moment(dateTime).format('LLL');
        }
    }
    return dateFormart;
}

convertDateTimeToString(dateTime) {
    let datePipe = new DatePipe("en-US");
    let tmpReportDate = datePipe.transform(dateTime, 'MM/dd/yyyy');
    return tmpReportDate;
}

convertUTCToLocal(dateString) {
    if (dateString) {
        let pipDate = new DatePipe("en-us");
        let comnvertDateString = pipDate.transform(dateString, 'yyyy-MM-dd HH:mm:ss');
        var d = new Date(comnvertDateString);
        return d;
    }
    else {
        return new Date();
    }
}
}


export class ListResultDto {
  items: any[];
}


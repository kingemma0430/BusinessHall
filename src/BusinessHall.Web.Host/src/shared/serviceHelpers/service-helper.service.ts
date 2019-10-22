
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

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
  
  constructor() { }

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

  public throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
      return _observableThrow(result);
    else
      return _observableThrow(new SwaggerException(message, status, response, headers, null));
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
}

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandleErrorService {
  constructor() {}
  handleError(errorRes: HttpErrorResponse): Observable<any> {
    if (errorRes.status === 0) {
      console.error(
        'client-side' +
          '\n' +
          errorRes.status +
          '\n' +
          errorRes.message +
          '\n' +
          errorRes.error
      );
    } else {
      console.error(
        'server-side' +
          '\n' +
          errorRes.status +
          '\n' +
          errorRes.message +
          '\n' +
          errorRes.error
      );
    }
    return throwError(() => {
      new Error('Something bad happened; please try again later');
    });
  }
}

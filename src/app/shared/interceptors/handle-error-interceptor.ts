import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HandleErrorService } from '../services/handle-error.service';

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  constructor(private handleErrorService: HandleErrorService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(catchError(this.handleErrorService.handleError));
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { finalize, Observable,throwError,catchError } from 'rxjs';
import { Router } from '@angular/router';
import { LoaderService } from '../../core/services/loader.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private readonly loaderService: LoaderService,
     private readonly router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let requestClone: any;
    this.loaderService.show();
    const token: any = sessionStorage.getItem('token');
    if(token){
      const headers = new HttpHeaders({
        'authorization': 'Bearer ' + token
      });
       requestClone = request.clone({
        headers
      });

      return next.handle(requestClone).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.router.navigateByUrl('/');
            this.loaderService.hide();
          }
          this.loaderService.hide();
          return throwError( error );
  
        }), finalize (() => {
          this.loaderService.hide();
        })
      );

    }

    return next.handle(request).pipe(
          finalize (() => {
            this.loaderService.hide();
          })
    );
  }
}

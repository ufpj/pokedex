import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  private authToken?: string;

  constructor() {
    this.authToken = 'YourAuthTokenHere';
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let modifiedReq = req;

    if (this.authToken) {
      const headers = new HttpHeaders().set(
        'Authorization',
        `Bearer ${this.authToken}`
      );

      // Clone a requisição modificando o objeto de headers
      modifiedReq = req.clone({ headers });
    }

    // Envie a requisição modificada para o próximo handler
    return next.handle(modifiedReq);
  }
}

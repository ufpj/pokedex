import { HttpInterceptorService } from './http-interceptor.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';

describe('HttpInterceptorService', () => {
  let interceptor: HttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpInterceptorService],
    });

    interceptor = TestBed.inject(HttpInterceptorService);
  });

  it('should add authorization header to requests when authToken is defined', () => {
    interceptor['authToken'] = 'YourAuthTokenHere';

    const mockRequest = new HttpRequest<any>('GET', 'https://pokeapi.co/api/v2/pokemon');
    const mockHandler: HttpHandler = {
      handle: (request: HttpRequest<any>): Observable<HttpEvent<any>> => {
        expect(request.headers.get('Authorization')).toEqual('Bearer YourAuthTokenHere');
        return new Observable<HttpEvent<any>>();
      },
    };

    interceptor.intercept(mockRequest, mockHandler);
  });

  it('should not add authorization header to requests when authToken is undefined', () => {
    interceptor['authToken'] = undefined;

    const mockRequest = new HttpRequest<any>('GET', 'https://pokeapi.co/api/v2/pokemon');
    const mockHandler: HttpHandler = {
      handle: (request: HttpRequest<any>): Observable<HttpEvent<any>> => {
        expect(request.headers.has('Authorization')).toBeFalse();
        return new Observable<HttpEvent<any>>();
      },
    };

    interceptor.intercept(mockRequest, mockHandler);
  });
});

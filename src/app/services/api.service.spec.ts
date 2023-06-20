import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should send a GET request', () => {
    const mockResponse = { name: 'bulbasaur' };
    const endpoint = 'pokemon/1';

    service.get(endpoint).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const request = httpMock.expectOne(`https://pokeapi.co/api/v2/${endpoint}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockResponse);
  });

  it('should send a POST request', () => {
    const mockData = { name: 'bulbasaur' };
    const endpoint = 'pokemon';
    const expectedResponse = { success: true };

    service.post(endpoint, mockData).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });

    const request = httpMock.expectOne(`https://pokeapi.co/api/v2/${endpoint}`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(mockData);
    request.flush(expectedResponse);
  });

  it('should send a PUT request', () => {
    const mockData = { name: 'bulbasaur' };
    const endpoint = 'pokemon/1';
    const expectedResponse = { success: true };

    service.put(endpoint, mockData).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });

    const request = httpMock.expectOne(`https://pokeapi.co/api/v2/${endpoint}`);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(mockData);
    request.flush(expectedResponse);
  });

  it('should send a DELETE request', () => {
    const endpoint = 'pokemon/1';
    const expectedResponse = { success: true };

    service.delete(endpoint).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });

    const request = httpMock.expectOne(`https://pokeapi.co/api/v2/${endpoint}`);
    expect(request.request.method).toBe('DELETE');
    request.flush(expectedResponse);
  });
});


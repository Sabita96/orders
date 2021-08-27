import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedEnvironment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  get(url: any) {
    return this.http.get(`${SharedEnvironment.apiUrl}` + url);
  }
  post(url: any, data: any) {
    return this.http.post(`${SharedEnvironment.apiUrl}` + url, data);
  }
  put(url: any, data: any) {
    return this.http.put(`${SharedEnvironment.apiUrl}` + url, data);
  }
  delete(url: any) {
    return this.http.delete(`${SharedEnvironment.apiUrl}` + url);
  }
}

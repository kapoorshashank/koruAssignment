import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getTableData(): Observable<any> {
    return this.http.get(`${this.url}/data`);
  }
}

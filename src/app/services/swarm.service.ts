import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'};
@Injectable({
  providedIn: 'root'
})
export class SwarmService {

  constructor(private httpClient: HttpClient) {
  }

  getNetworks(): Observable<any> {
    let url = '/networks';
    return this.httpClient.get<any>(url);
  }

  getServices(): Observable<any> {
    let url = '/services';
    return this.httpClient.get<any>(url);
  }
}

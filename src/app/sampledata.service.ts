import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { news } from './news';

@Injectable({
  providedIn: 'root'
})
export class SampledataService {

  private sharedData: Array<news> = []

  setData(data: news[]) {
    this.sharedData = data; console.log(this.sharedData)
  }

  getData(): news[] {
    console.log(this.sharedData);
    return this.sharedData;
  }

  url = "http://localhost:3700/Sampledata/"
  constructor(public _http: HttpClient) { }

  findall(): Observable<Array<news>> {
    return this._http.get<Array<news>>(this.url);
  }
  findBylocation(location: string): Observable<Array<news>> {
    return this._http.get<Array<news>>(this.url + "?location=" + location)
  }
}

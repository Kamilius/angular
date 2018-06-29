import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Data} from './data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: Http) { }
  
  getData (): Observable<Data[]> {
    return this.http.get(this.apiUrl)
      .pipe(map((res: Response, i) => <Data[]>res.json()))
  }

}
 
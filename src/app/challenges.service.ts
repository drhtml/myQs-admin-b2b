import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IChallenges } from './challenges';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
};

@Injectable()
export class ChallengesService {
  private _url = 'https://www.myqsapp.com/userchallenge/getunlockedchallengesforuser';
  private body = { userid: 'd4da8ea6-ec40-4979-a996-11a51e05e509' };
  constructor(private http: HttpClient) { }

  getChallenges(): Observable<IChallenges[]>{
    return this.http.post<IChallenges[]>(this._url, this.body, httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuestions } from './questions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class QuestionsService {

  private _url: string = 'https://www.myqsapp.com/questions/getquestions';
  constructor(private http:HttpClient) { }

  getQuestions(): Observable<IQuestions[]>{
    return this.http.get<IQuestions[]>(this._url);
  }
}


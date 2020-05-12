import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsers } from './users';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class UsersService {

  private _url: string = 'https://www.myqsapp.com/users/showusers';
    constructor(private http:HttpClient) { }

    getUsers(): Observable<IUsers[]>{
      return this.http.get<IUsers[]>(this._url);
    }
  }

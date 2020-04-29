import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategories } from './categories';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class CategoriesService {

  private _url: string = 'https://www.myqsapp.com/categories/getcategories';
  constructor(private http:HttpClient) { }

  getCategories(): Observable<ICategories[]>{
    return this.http.get<ICategories[]>(this._url);
  }

}

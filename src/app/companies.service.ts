import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICompanies } from './companies';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class CompaniesService {

  private _url: string = '../assets/data/companies.json';
  constructor(private http:HttpClient) { }

  getCompanies(): Observable<ICompanies[]>{
    return this.http.get<ICompanies[]>(this._url);
  }
}

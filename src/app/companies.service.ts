import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor( private http: HttpClient) { }

  getCompanies(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}

import { Component, OnInit } from '@angular/core';

import { CompaniesService } from '../companies.service'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  posts: Object;

  constructor( private data: CompaniesService ) { }

  ngOnInit() {
    this.data.getCompanies().subscribe(data =>{
      this.posts = data;
      console.log(this.posts);
    })
  }

}

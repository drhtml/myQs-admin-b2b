import { Component, OnInit } from '@angular/core';

import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  public companies = [];

  constructor(private _companiesService: CompaniesService) { }

  ngOnInit() {
    this._companiesService.getCompanies()
      .subscribe(data => this.companies = data);
  }

}

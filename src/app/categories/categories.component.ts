import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories = [];
  constructor(private _categoriesService: CategoriesService) { }

  ngOnInit() {
    this._categoriesService.getCategories()
      .subscribe(data => this.categories = data);
  }

}

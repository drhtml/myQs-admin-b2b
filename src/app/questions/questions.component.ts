import { Component, OnInit } from '@angular/core';

import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  public questions = [];

  constructor(private _questionsService: QuestionsService) { }

  ngOnInit() {
    this._questionsService.getQuestions()
      .subscribe(data => this.questions = data);
  }

}

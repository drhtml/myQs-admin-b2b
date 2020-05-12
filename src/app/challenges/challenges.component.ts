import { Component, OnInit } from '@angular/core';

import { ChallengesService } from '../challenges.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  public challenges = [];
  constructor(private _challengesService: ChallengesService) { }

  ngOnInit() {
    this._challengesService.getChallenges()
      .subscribe(data => this.challenges = data);
  }

}

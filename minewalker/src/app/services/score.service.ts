import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  lives: number = 10;
  currentScore: number = 100;
  totalScore: number = 0;
  constructor() {}

  getScoreData() {
    return of({
      lives: this.lives,
      currentScore: this.currentScore,
      totalScore: this.totalScore,
    });
  }
  hitMineDeductions() {
    this.lives -= 1;
    this.currentScore -= 10;
  }
  winRoundIncrease() {
    console.log('HELLO');
    this.totalScore += this.currentScore;
    console.log(this.totalScore);
    this.getScoreData();
  }
}

import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit {
  lives = 10;
  currentScore = 100;
  totalScore = 10000;

  constructor(public scoreService: ScoreService) {}

  ngAfterContentChecked() {
    this.scoreService.getScoreData().subscribe((data) => {
      this.lives = data.lives;
      this.currentScore = data.currentScore;
      this.totalScore = data.totalScore;
    });
  }
  ngOnInit(): void {}
}

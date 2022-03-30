import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css'],
})
export class GameOverComponent implements OnInit {
  totalScore: number = 0;
  constructor(public scoreService: ScoreService) {}
  ngAfterContentChecked() {
    this.totalScore = this.scoreService.totalScore;
  }
  restart() {
    console.log('restart');
    window.location.reload();
  }
  ngOnInit(): void {}
}

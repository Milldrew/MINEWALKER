import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit {
  lives = 10;
  currentScore = 100;
  totalScore = 10000;

  constructor() {}

  ngOnInit(): void {}
}

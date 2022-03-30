import { Component, OnInit } from '@angular/core';
import { AdjacentSquaresService } from '../services/adjacent-squares.service';
import { BoardService } from '../services/board.service';
import { HitMineService } from '../services/hit-mine.service';
import { MinesService } from '../services/mines.service';
import { ScoreService } from '../services/score.service';
import { UserService } from '../services/user.service';
import { Coordinate } from './square/square.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  coordinate: Coordinate = { x: 1, y: 1 };
  coordintes: Coordinate[] | undefined;
  constructor(
    public minesService: MinesService,
    public userService: UserService,
    public boardService: BoardService,
    public adjacentSquaresService: AdjacentSquaresService,
    public hitMineService: HitMineService,
    public scoreService: ScoreService
  ) {}

  move(coordinate: Coordinate | undefined) {
    if (this.adjacentSquaresService.isAdjacent(coordinate)) {
      this.userService.moveUser(coordinate);
    } else alert('You can only move to adjacent squares');
    this.adjacentSquaresService.computeAdjacentSquares();
    this.adjacentSquaresService.adjacentMineCount();
    if (this.hitMineService.hitMine()) {
      this.scoreService.hitMineDeductions();
      this.userService.moveUser({ x: 1, y: 1 });
      alert('You hit a mine 🤯');
    }
    if (this.userService.getHasWon()) {
      this.scoreService.winRoundIncrease();
    }
  }
  ngAfterContentChecked() {
    this.coordintes = this.boardService.getCoordinates();
  }
  ngOnInit(): void {
    this.coordintes = this.boardService.getCoordinates();
    this.boardService.makeHappyPath();
    this.minesService.layMines();
  }
}

import { Component, HostListener, OnInit } from '@angular/core';
import { AdjacentSquaresService } from '../services/adjacent-squares.service';
import { BoardService } from '../services/board.service';
import { HitMineService } from '../services/hit-mine.service';
import { MessageService } from '../services/message.service';
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
    public scoreService: ScoreService,
    public messageService: MessageService
  ) {}

  // Arrow keys (and WASD) step to the neighbouring square, same as a click.
  @HostListener('window:keydown', ['$event'])
  onKey(event: KeyboardEvent) {
    const target = event.target as HTMLElement | null;
    if (target && /^(SELECT|INPUT|TEXTAREA|BUTTON)$/.test(target.tagName)) return;
    const at = this.userService.usersCoordinate;
    if (!at) return;
    const step: Record<string, [number, number]> = {
      ArrowUp: [0, 1], w: [0, 1],
      ArrowDown: [0, -1], s: [0, -1],
      ArrowLeft: [-1, 0], a: [-1, 0],
      ArrowRight: [1, 0], d: [1, 0],
    };
    const delta = step[event.key];
    if (!delta) return;
    event.preventDefault();
    this.move({ x: at.x + delta[0], y: at.y + delta[1] });
  }

  move(coordinate: Coordinate | undefined) {
    if (this.adjacentSquaresService.isAdjacent(coordinate)) {
      this.userService.moveUser(coordinate);
    } else {
      this.messageService.show('You can only move to an adjacent square.');
      return;
    }
    this.adjacentSquaresService.computeAdjacentSquares();
    this.adjacentSquaresService.adjacentMineCount();
    if (this.hitMineService.hitMine()) {
      this.scoreService.hitMineDeductions();
      this.userService.moveUser({ x: 1, y: 1 });
      this.messageService.show('You hit a mine 🤯 Back to the start.');
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

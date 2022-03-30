import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';
import { GameService } from '../services/game.service';
import { MinesService } from '../services/mines.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-winner-prompt',
  templateUrl: './winner-prompt.component.html',
  styleUrls: ['./winner-prompt.component.css'],
})
export class WinnerPromptComponent implements OnInit {
  constructor(
    public userService: UserService,
    public minesService: MinesService,
    public boardService: BoardService
  ) {}

  ngOnInit(): void {}

  playAgain() {
    console.log('Play Again');
    this.userService.setHasWon(false);
    this.userService.moveUser({ x: 1, y: 1 });
    this.boardService.makeHappyPath();
    this.minesService.layMines();
  }
  restart() {
    console.log('restart');
    window.location.reload();
  }
}

import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { BoardService } from '../services/board.service';
import { BoardSize, GameService } from '../services/game.service';
import { MinesService } from '../services/mines.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css'],
})
export class UserInterfaceComponent implements OnInit {
  constructor(
    public gameService: GameService,
    public boardService: BoardService,
    public minesService: MinesService
  ) {}
  boardSize: BoardSize = 3;
  setBoardSize() {
    this.gameService.setBoardSize(Number(this.boardSize));
    this.gameService.getBoardSize().subscribe((value) => console.log(value));
    this.boardService.makeHappyPath();
    this.minesService.layMines();
  }
  ngOnInit(): void {}
}

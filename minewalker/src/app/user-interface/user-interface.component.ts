import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { BoardService } from '../services/board.service';
import { BoardSize, GameService } from '../services/game.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css'],
})
export class UserInterfaceComponent implements OnInit {
  constructor(
    public gameService: GameService,
    public boardService: BoardService
  ) {}
  boardSize: BoardSize = 10;
  setBoardSize() {
    this.gameService.setBoardSize(this.boardSize);
    this.gameService.getBoardSize().subscribe((value) => console.log(value));
    this.boardService.makeHappyPath();
  }
  ngOnInit(): void {}
}

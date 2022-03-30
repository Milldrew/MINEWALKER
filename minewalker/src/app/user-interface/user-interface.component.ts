import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AdjacentSquaresService } from '../services/adjacent-squares.service';
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
    public minesService: MinesService,
    public adjacentSquaresService: AdjacentSquaresService
  ) {}
  boardSize: BoardSize = 3;
  setBoardSize() {
    this.gameService.setBoardSize(Number(this.boardSize));
    this.gameService.getBoardSize().subscribe((value) => console.log(value));
    this.boardService.makeHappyPath();
    this.minesService.layMines();
  }
  setWarningColor() {
    let adjacentMineCount = this.adjacentSquaresService.adjacentMineCount();
    return 'red';
  }
  warningColor: string = this.setWarningColor();
  getWarningColor() {
    return this.warningColor ? this.warningColor : 'red';
  }
  ngAfterContentChecked() {
    this.setWarningColor();
  }

  ngOnInit(): void {}
}

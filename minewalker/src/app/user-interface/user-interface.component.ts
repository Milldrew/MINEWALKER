import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AdjacentSquaresService } from '../services/adjacent-squares.service';
import { BoardService } from '../services/board.service';
import { BoardSize, GameService } from '../services/game.service';
import { MinesService } from '../services/mines.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css'],
})
export class UserInterfaceComponent implements OnInit {
  public warningStyles: any;
  public warningColor: any;
  constructor(
    public userService: UserService,
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
    this.userService.moveUser({ x: 1, y: 1 });
  }
  setWarningColor() {
    let adjacentMineCount = this.adjacentSquaresService.adjacentMineCount();
    switch (adjacentMineCount) {
      case 3:
        this.warningColor = 'red';
        return;
      case 2:
        this.warningColor = 'orange';
        return;
      case 1:
        this.warningColor = 'yellow';
        return;
      case 0:
        this.warningColor = '#8f9';
        return;
    }
  }
  ngAfterContentChecked() {
    this.setWarningColor();
    this.warningStyles = {
      'background-color': true ? this.warningColor : 'green',
    };
  }
  ngOnInit(): void {
    this.warningStyles = {
      'background-color': false ? 'red' : 'green',
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';
import { MinesService } from '../services/mines.service';
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
    public boardService: BoardService
  ) {}

  move(coordinate: Coordinate | undefined) {
    this.userService.moveUser(coordinate);
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

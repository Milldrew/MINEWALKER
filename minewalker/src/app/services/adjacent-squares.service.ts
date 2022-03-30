import { Injectable } from '@angular/core';
import { Coordinate } from '../board/square/square.component';
import { GameService } from './game.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AdjacentSquaresService {
  constructor(
    public userService: UserService,
    public gameService: GameService
  ) {}

  computeAdjacentSquares() {
    let usersCoordinate = this.userService.usersCoordinate;
    let boardSize;
    this.gameService.getBoardSize().subscribe((value) => (boardSize = value));
    let board;
    console.log({ usersCoordinate });
    console.log({ boardSize });
    let adjacentCoordinates: any = [];
    if (usersCoordinate && boardSize) {
      let onRightSide = usersCoordinate.x === boardSize;
      let onLeftSide = usersCoordinate.x === 1;
      let atTop = usersCoordinate.y === boardSize;
      let atBottom = usersCoordinate.y === 1;
      if (!atBottom)
        adjacentCoordinates.push({
          x: usersCoordinate.x,
          y: usersCoordinate.y - 1,
        });
      if (!atTop)
        adjacentCoordinates.push({
          x: usersCoordinate.x,
          y: usersCoordinate.y + 1,
        });
      if (!onLeftSide)
        adjacentCoordinates.push({
          x: usersCoordinate.x - 1,
          y: usersCoordinate.y,
        });
      if (!onRightSide)
        adjacentCoordinates.push({
          x: usersCoordinate.x + 1,
          y: usersCoordinate.y,
        });
    }
    console.log({
      adjacentCoordinates,
    });
  }
}

/*
 * input board size and coordinate
 * output collection of adjacent squares
 * possivle coordinates x + 1, x-1, y+1, y-1
 * if coordinate is greater than board size or less than one then it cant exist
 */

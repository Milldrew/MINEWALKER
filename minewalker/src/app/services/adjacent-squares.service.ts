import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Coordinate } from '../board/square/square.component';
import { GameService } from './game.service';
import { MinesService } from './mines.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AdjacentSquaresService {
  adjacentSquares$: any;
  constructor(
    public userService: UserService,
    public gameService: GameService,
    public minesService: MinesService
  ) {}
  isAdjacent(coordinate: any) {
    const adjacentSquares = this.computeAdjacentSquares();
    console.log(adjacentSquares);
    let isAdjacent = !!adjacentSquares.filter((adjacentSquare: any) => {
      const isAdjacent =
        coordinate.x === adjacentSquare.x && coordinate.y === adjacentSquare.y;
      return isAdjacent;
    })[0];
    return isAdjacent;
  }

  computeAdjacentSquares() {
    let usersCoordinate = this.userService.usersCoordinate;
    let boardSize;
    this.gameService.getBoardSize().subscribe((value) => (boardSize = value));
    let board;
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
    this.adjacentSquares$ = of(adjacentCoordinates);
    return adjacentCoordinates;
  }

  adjacentMineCount(): number {
    const adjacentSquares = this.computeAdjacentSquares();
    let mineCoordinates: any;
    this.minesService.mineCoordinates$.subscribe(
      (value: any) => (mineCoordinates = value)
    );

    let adjacentMines = adjacentSquares.filter((adjacentSquare: any) => {
      const hasMine = mineCoordinates.find((mine: any) => {
        return mine.x === adjacentSquare.x && mine.y === adjacentSquare.y;
      });
      return hasMine;
    });
    return adjacentMines.length;
  }
}

/*
 * input board size and coordinate
 * output collection of adjacent squares
 * possivle coordinates x + 1, x-1, y+1, y-1
 * if coordinate is greater than board size or less than one then it cant exist
 */

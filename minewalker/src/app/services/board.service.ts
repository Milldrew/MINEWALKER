import { Injectable } from '@angular/core';
import { Coordinate } from '../board/square/square.component';
import { BoardSize, GameService } from './game.service';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  coordinates: Coordinate[] | undefined;

  constructor(public gameService: GameService) {}
  computeHappyPath(boardSize: any, moves: any) {
    let y = 1;
    let x = 1;
    let start = { x, y };
    let happyPathCoordinates: Coordinate[] = [start];
    moves.forEach((move: any) => {
      const previousCoordinate = happyPathCoordinates.slice(-1)[0];
      if (move === 'UP') {
        happyPathCoordinates.push({
          x: previousCoordinate.x,
          y: (previousCoordinate.y += 1),
        });
      } else {
        happyPathCoordinates.push({
          y: previousCoordinate.y,
          x: (previousCoordinate.x += 1),
        });
      }
    });
    console.log('HAPPY PATH', happyPathCoordinates);
    return happyPathCoordinates;
  }
  getCoordinates() {
    const boardSize = this.gameService.getBoardSize();
    boardSize.subscribe((boardSize) => {
      let coordinates: Coordinate[] = [];
      for (let y = boardSize; y >= 1; y -= 1) {
        for (let x = 1; x <= boardSize; x += 1) {
          let newCoordinate = { x, y };
          coordinates.push(newCoordinate);
        }
      }
      this.coordinates = coordinates;
    });
    return this.coordinates;
  }
  makeHappyPath() {
    let boardSize;
    this.gameService.getBoardSize().subscribe((value) => (boardSize = value));
    let moveUpCount = 0;
    let moveRightCount = 0;
    let moves = [];
    let UP = 'UP';
    let RIGHT = 'RIGHT';
    if (boardSize) {
      let movesToWin = (boardSize - 1) * 2;
      let maxMoves = boardSize - 1;
      while (moves.length < movesToWin) {
        let randomBoolean = 5 < Math.random() * 10;
        if (moveUpCount >= maxMoves) {
          moves.push(RIGHT);
          moveRightCount += 1;
        } else if (moveRightCount >= maxMoves) {
          moves.push(UP);
          moveUpCount += 1;
        } else if (randomBoolean) {
          moves.push(RIGHT);
          moveRightCount += 1;
        } else {
          moves.push(UP);
          moveUpCount += 1;
        }
      }
    }
    //    console.log({ moveUpCount });
    //    console.log({ moveRightCount });
    //    console.log(JSON.stringify(moves));
    //    console.log(moves.length);
    //    console.log(moves.filter((move) => move === UP).length);
    //    console.log(moves.filter((move) => move === RIGHT).length);
    return this.computeHappyPath(boardSize, moves);
  }
}

import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Coordinate } from '../board/square/square.component';
import { GameService } from './game.service';
import { AdjacentSquaresService } from './adjacent-squares.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  hasWon$: Observable<boolean> = of(false);
  usersCoordinate: undefined | Coordinate = { x: 1, y: 1 };
  usersCoordinate$: undefined | Observable<Coordinate> = of({ x: 1, y: 1 });
  constructor(public gameService: GameService) {}

  hasUser(coordinate: Coordinate | undefined) {
    if (coordinate && this.usersCoordinate) {
      return (
        this.usersCoordinate.x === coordinate.x &&
        this.usersCoordinate.y === coordinate.y
      );
    }
    return false;
  }
  moveUser(coordinate: Coordinate | undefined) {
    this.usersCoordinate = coordinate;
    if (this.hasWonRound(coordinate)) {
      this.winRound();
    }
  }

  hasWonRound(coordinate: Coordinate | undefined) {
    if (coordinate) {
      const boardSize = this.gameService.boardSize;
      const atWinningSquare =
        coordinate.x === boardSize && coordinate.y === boardSize;
      this.hasWon$ = of(atWinningSquare);
      return atWinningSquare;
    }
    return false;
  }
  winRound() {
    console.log(`WON ROUND`);
  }
  getHasWon() {
    let hasWon;
    this.hasWon$.subscribe((value) => (hasWon = value));
    return hasWon;
  }
  setHasWon(boolean: boolean) {
    this.hasWon$ = of(boolean);
  }
}

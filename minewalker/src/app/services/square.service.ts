import { Coordinate } from '../board/square/square.component';
import { BoardService } from './board.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SquareService {
  constructor(public boardService: BoardService) {}

  isOnHappyPath(coordinate: any) {
    let happyPathCoordinates: any = [];
    const happyPathCoordinates$ = this.boardService.happyPathCoordinates$;
    happyPathCoordinates$.subscribe((value: any) => {
      happyPathCoordinates = value;
    });
    if (happyPathCoordinates) {
      const isCoordinateHappy = !!happyPathCoordinates.filter(
        (happyCoordinate: any) => {
          const isHappy =
            happyCoordinate.x === coordinate.x &&
            happyCoordinate.y === coordinate.y;
          return isHappy;
        }
      )[0];
      console.log(coordinate, isCoordinateHappy);
      return isCoordinateHappy;
    }
    return false;
  }
}

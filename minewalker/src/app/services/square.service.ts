import { Coordinate } from '../board/square/square.component';
import { BoardService } from './board.service';
import { Injectable } from '@angular/core';
import { MinesService } from './mines.service';

@Injectable({
  providedIn: 'root',
})
export class SquareService {
  constructor(
    public boardService: BoardService,
    public minesService: MinesService
  ) {}

  isMine(coordinate: any) {
    console.log('coordinate', coordinate);
    let mineCoordinates: any;
    const mineCoordinates$ = this.minesService.mineCoordinates$;
    mineCoordinates$.subscribe((value: any) => (mineCoordinates = value));
    console.log(mineCoordinates);

    if (mineCoordinates) {
      const isCoordinateMine = !!mineCoordinates.filter(
        (mineCoordinate: any) => {
          const isMine =
            mineCoordinate.x === Number(coordinate.x) &&
            mineCoordinate.y === Number(coordinate.y);
          return isMine;
        }
      )[0];
      return isCoordinateMine;
    }
    return false;
  }

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
            happyCoordinate.x === Number(coordinate.x) &&
            happyCoordinate.y === Number(coordinate.y);
          return isHappy;
        }
      )[0];
      return isCoordinateHappy;
    }
    return false;
  }
}

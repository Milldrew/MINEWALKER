import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BoardService } from './board.service';

@Injectable({
  providedIn: 'root',
})
export class MinesService {
  constructor(public boardService: BoardService) {}
  mineCoordinates$: any;
  layMines() {
    let happyPath: any;
    const boardSquares = this.boardService.getCoordinates();
    const happyPath$ = this.boardService.happyPathCoordinates$;
    happyPath$.subscribe((value: any) => {
      happyPath = value;
    });

    if (boardSquares) {
      const openSquares = boardSquares.filter((square) => {
        const result = happyPath.find((happySquare: any) => {
          return happySquare.x === square.x && happySquare.y === square.y;
        });
        return !result;
      });
      console.log('openSquares');
      console.table(openSquares);
      this.chooseMineCoordinates(openSquares);
    }
  }

  chooseMineCoordinates(openSquares: any) {
    let openSquaresCount = openSquares.length;
    let mineCoordinatesNeeded = openSquaresCount / 4 + 1;
    let mineCoordinates = [];
    let randomBoolean = Math.random() > 0.5;
    let randomBooleanTwo = Math.random() > 0.5;
    while (mineCoordinatesNeeded > mineCoordinates.length) {
      if (randomBoolean && randomBooleanTwo) {
        mineCoordinates.push(openSquares.pop());
      } else if (randomBoolean || randomBooleanTwo) {
        mineCoordinates.push(openSquares.pop());
      } else {
        let middleIndex = Math.floor(openSquares.length / 2);
        mineCoordinates.push(openSquares.splice(middleIndex));
      }
    }

    console.log('mineCoordinates');
    console.log(mineCoordinates);
    this.mineCoordinates$ = of(mineCoordinates);
    return mineCoordinates;
  }
}

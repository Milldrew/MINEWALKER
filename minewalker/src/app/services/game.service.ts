import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export type BoardSize = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

@Injectable({
  providedIn: 'root',
})
export class GameService {
  boardSize: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 10;
  constructor() {}

  setBoardSize(size: BoardSize) {
    this.boardSize = size;
  }

  getBoardSize(): Observable<BoardSize> {
    return of(this.boardSize);
  }
}

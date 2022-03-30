import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
export type BoardSize = number;

@Injectable({
  providedIn: 'root',
})
export class GameService {
  boardSize: number = 3;
  boardSize$: Observable<BoardSize> = of(3);
  constructor() {}

  setBoardSize(size: BoardSize) {
    this.boardSize = size;
    this.boardSize$ = of(size);
  }

  getBoardSize(): Observable<BoardSize> {
    return this.boardSize$;
  }
}

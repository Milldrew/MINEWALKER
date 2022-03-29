import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
export type BoardSize = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

@Injectable({
  providedIn: 'root',
})
export class GameService {
  boardSize: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 10;
  boardSize$: Observable<BoardSize> = of(10);
  constructor() {}

  setBoardSize(size: BoardSize) {
    this.boardSize = size;
    this.boardSize$ = of(size);
    this.boardSize$.subscribe((value) => console.log('map', value));
  }

  getBoardSize(): Observable<BoardSize> {
    this.boardSize$.subscribe((value) => console.log('value'));
    return this.boardSize$;
  }
}

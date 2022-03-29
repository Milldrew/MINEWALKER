import { Injectable } from '@angular/core';
import { Coordinate } from '../board/square/square.component';
import { BoardSize, GameService } from './game.service';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  coordinates: Coordinate[] | undefined;

  constructor(public gameService: GameService) {}

  getCoordinates() {
    const boardSize = this.gameService.getBoardSize();
    boardSize.subscribe((boardSize) => {
      let coordinates: Coordinate[] = [];
      for (let x = 1; x <= boardSize; x += 1) {
        let newCoordinate = { x, y: 1 };
        coordinates.push(newCoordinate);
      }
      this.coordinates = coordinates;
    });
    return this.coordinates;
  }
}

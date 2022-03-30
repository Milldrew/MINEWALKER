import { Injectable } from '@angular/core';
import { Coordinate } from '../board/square/square.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersCoordinate: Coordinate = { x: 1, y: 1 };
  constructor() {}

  hasUser(coordinate: Coordinate | undefined) {
    if (coordinate) {
      return (
        this.usersCoordinate.x === coordinate.x &&
        this.usersCoordinate.y === coordinate.y
      );
    }
    return false;
  }
  moveUser(coordinate: Coordinate | undefined) {
    console.log(coordinate);
  }
}

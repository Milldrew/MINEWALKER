import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Coordinate } from '../board/square/square.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersCoordinate: undefined | Coordinate = { x: 1, y: 1 };
  usersCoordinate$: undefined | Observable<Coordinate> = of({ x: 1, y: 1 });
  constructor() {}

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
    console.log(coordinate);
    this.usersCoordinate = coordinate;
    console.log(this.usersCoordinate);
  }
}

import { Injectable } from '@angular/core';
import { MinesService } from './mines.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class HitMineService {
  constructor(
    public userService: UserService,
    public minesService: MinesService
  ) {}

  hitMine(): any {
    let usersCoordinate: any = this.userService.usersCoordinate;
    let mines: any;
    this.minesService.mineCoordinates$.subscribe(
      (value: any) => (mines = value)
    );
    if (mines) {
      console.log(mines);
      console.log(usersCoordinate);
      let hasHitMine = !!mines.find((mine: any) => {
        return mine.x === usersCoordinate.x && mine.y === usersCoordinate.y;
      });
      return hasHitMine;
    }
    return this.hitMine();
  }
}

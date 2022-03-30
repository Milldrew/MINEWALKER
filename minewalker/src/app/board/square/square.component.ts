import { Component, Input, OnInit } from '@angular/core';
import { SquareService } from 'src/app/services/square.service';
import { UserService } from 'src/app/services/user.service';
export type Coordinate = {
  x: number;
  y: number;
};
@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  @Input() public coordinate: Coordinate | undefined;
  constructor(
    public userService: UserService,
    public squareService: SquareService
  ) {}
  public squareClasses: any;
  isHappy: any;
  isMine: any;
  hasUser: boolean = true;
  move(coordinate: Coordinate | undefined) {
    this.userService.moveUser(coordinate);
  }
  ngOnInit(): void {
    this.hasUser = this.userService.hasUser(this.coordinate);
    this.isHappy = this.squareService.isOnHappyPath(this.coordinate);
    this.isMine = this.squareService.isMine(this.coordinate);
    this.squareClasses = {
      happy: this.isHappy,
      mine: this.isMine,
    };
  }
}

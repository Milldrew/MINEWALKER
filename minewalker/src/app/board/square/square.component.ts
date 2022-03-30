import { Component, Input, OnInit } from '@angular/core';
import { SquareService } from 'src/app/services/square.service';
import { TogglersService } from 'src/app/services/togglers.service';
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
    public togglerService: TogglersService,
    public userService: UserService,
    public squareService: SquareService
  ) {}
  public squareClasses: any;
  showHappy: boolean = false;
  showMines: boolean = false;
  isHappy: any;
  isMine: any;
  hasUser: boolean = true;
  ngAfterContentChecked() {
    this.showHappy = this.togglerService.showHappyPath;
    this.showMines = this.togglerService.showMines;
    this.squareClasses = {
      happy: this.showHappy ? this.isHappy : false,
    };
  }

  ngOnInit(): void {
    this.hasUser = this.userService.hasUser(this.coordinate);
    this.isHappy = this.squareService.isOnHappyPath(this.coordinate);
    this.isMine = this.squareService.isMine(this.coordinate);
    this.squareClasses = {
      happy: this.showHappy ? this.isHappy : false,
    };
  }
}

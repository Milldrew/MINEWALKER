import { Component, Input, OnInit } from '@angular/core';
import { SquareService } from 'src/app/services/square.service';
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
  constructor(public squareService: SquareService) {}
  public squareClasses: any;
  isHappy: any;
  isMine: any;

  ngOnInit(): void {
    this.isHappy = this.squareService.isOnHappyPath(this.coordinate);
    this.isMine = this.squareService.isMine(this.coordinate);
    console.log(this.isMine);
    this.squareClasses = {
      happy: this.isHappy,
      mine: this.isMine,
    };
  }
}

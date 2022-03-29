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

  ngOnInit(): void {
    this.isHappy = this.squareService.isOnHappyPath(this.coordinate);
    this.squareClasses = {
      happy: this.isHappy,
    };
  }
}

import { Component, Input, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}
}

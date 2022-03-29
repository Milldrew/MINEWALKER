import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';
import { Coordinate } from './square/square.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  coordinate: Coordinate = { x: 1, y: 1 };
  coordintes: Coordinate[] | undefined;
  constructor(public boardService: BoardService) {}

  ngAfterContentChecked() {
    this.coordintes = this.boardService.getCoordinates();
    console.log(JSON.stringify(this.coordintes));
  }
  ngOnInit(): void {
    this.coordintes = this.boardService.getCoordinates();
    console.log(JSON.stringify(this.coordintes));
  }
}

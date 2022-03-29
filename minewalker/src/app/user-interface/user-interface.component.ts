import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css'],
})
export class UserInterfaceComponent implements OnInit {
  constructor() {}
  boardSize: number = 10;
  setBoardSize() {
    console.log(this.boardSize);
  }
  ngOnInit(): void {}
}

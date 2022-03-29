import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { BoardSize, GameService } from '../services/game.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css'],
})
export class UserInterfaceComponent implements OnInit {
  constructor(public gameService: GameService) {}
  boardSize: BoardSize = 10;
  setBoardSize() {
    console.log(this.boardSize);
    this.gameService.setBoardSize(this.boardSize);
    this.gameService.getBoardSize().subscribe((value) => console.log(value));
  }
  ngOnInit(): void {}
}

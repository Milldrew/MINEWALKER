import { Component } from '@angular/core';
import { BoardSize, GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'minewalker';
  boardSize?: BoardSize | undefined;
  constructor(public gameService: GameService) {
    this.gameService
      .getBoardSize()
      .subscribe((boardSize) => (this.boardSize = this.boardSize));
  }

  ngOnInit() {}
  boardStyles = {
    'grid-template-columns': `repeat(${this.boardSize}, 1fr)`,
    'grid-template-rows': `repeat(${this.boardSize}, 1fr)`,
  };
}

import { Component } from '@angular/core';
import { Observable, share } from 'rxjs';
import { BoardSize, GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'minewalker';
  public boardSize$: Observable<BoardSize> | undefined;
  boardSize?: BoardSize | undefined;
  constructor(public gameService: GameService) {
    this.gameService
      .getBoardSize()
      .subscribe((boardSize) => (this.boardSize = this.boardSize));
  }
  ngAfterContentChecked() {
    this.boardSize$ = this.gameService.getBoardSize();
    if (this.boardSize$) {
      this.boardSize$.subscribe((value) => {
        this.boardSize = value;
      });
    }
    this.boardStyles = {
      'grid-template-columns': `repeat(${this.boardSize}, 1fr)`,
      'grid-template-rows': `repeat(${this.boardSize}, 1fr)`,
    };
  }
  boardStyles = {
    'grid-template-columns': `repeat(${this.boardSize}, 1fr)`,
    'grid-template-rows': `repeat(${this.boardSize}, 1fr)`,
  };
  ngOnInit() {
    this.boardSize$ = this.gameService.getBoardSize().pipe(share());
  }
}

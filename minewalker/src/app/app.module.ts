import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './board/square/square.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { GameService } from './services/game.service';
import { WinnerPromptComponent } from './winner-prompt/winner-prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent,
    UserInterfaceComponent,
    WinnerPromptComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}

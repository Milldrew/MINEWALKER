import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './board/square/square.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent,
    UserInterfaceComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}

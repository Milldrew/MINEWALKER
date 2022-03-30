import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TogglersService {
  showHappyPath: boolean = false;
  showMines: boolean = false;
  constructor() {}

  setShowMinesPath(boolean: boolean) {
    this.showMines = boolean;
  }
  setShowHappyPath(boolean: boolean) {
    this.showHappyPath = boolean;
  }
}

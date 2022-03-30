import { Component, OnInit } from '@angular/core';
import { TogglersService } from 'src/app/services/togglers.service';

@Component({
  selector: 'app-togglers',
  templateUrl: './togglers.component.html',
  styleUrls: ['./togglers.component.css'],
})
export class TogglersComponent implements OnInit {
  showHappyPath = false;
  showMines = false;
  constructor(public togglerService: TogglersService) {}

  toggleMines(boolean: boolean) {
    this.togglerService.setShowMinesPath(boolean);
    console.log(boolean);
  }
  toggleHappyPath(boolean: boolean) {
    this.togglerService.setShowHappyPath(boolean);
    console.log(boolean);
  }
  ngAfterContentChecked() {
    this.showHappyPath = this.togglerService.showHappyPath;
    this.showMines = this.togglerService.showMines;
  }
  ngOnInit(): void {}
}

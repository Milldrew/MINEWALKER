import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-winner-prompt',
  templateUrl: './winner-prompt.component.html',
  styleUrls: ['./winner-prompt.component.css'],
})
export class WinnerPromptComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  playAgain() {
    console.log('Play Again');
    this.userService.setHasWon(false);
  }
  restart() {
    console.log('restart');
    window.location.reload();
  }
}

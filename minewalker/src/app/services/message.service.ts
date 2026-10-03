import { Injectable } from '@angular/core';

/**
 * The line of feedback under the title ("You hit a mine", "Only adjacent
 * squares"). Replaces the alert() dialogs, which stopped the game - and on a
 * phone, the whole page - on every wrong move.
 */
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  text = '';
  private timer: ReturnType<typeof setTimeout> | undefined;

  show(text: string) {
    this.text = text;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => (this.text = ''), 2500);
  }
}

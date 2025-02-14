import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  public messages: string[];
  public currentSize : number = 23;
  public messageIndex : number = 0;

  @Output()
  public emitChange : EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {
    this.messages = [
      'No',
      'Are you sure?',
      'Really sure??',
      'Are you positive?',
      'Pookie please...',
      'Just think about it!',
      'If you say no, I will be really sad...',
      'I will be very sad...',
      'I will be very very very sad...',
      'Ok fine, I will stop asking...',
      'Just kidding, say yes please! ❤️',
    ];
  }

  public toggleButton(isConfirm: boolean): void {
    if (!isConfirm) {
      this.currentSize += 100;
      this.messageIndex = (this.messageIndex === this.messages.length) ? 0 : this.messageIndex + 1;
      return;
    }
    this.emitChangeVale();
  }
  public emitChangeVale() : void{
    this.emitChange.emit(true);
  }
}

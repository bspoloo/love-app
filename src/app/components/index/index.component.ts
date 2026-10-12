import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  public messages: string[];
  public currentSize: number = 23;
  public messageIndex: number = 0;

  @Output()
  public emitChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {
    this.messages = [
      'No',
      '¿Estás segura?',
      '¿¿Realmente segura??',
      '¿Estás completamente segura?',
      'Pookie por favor...',
      '¡Solo piénsalo!',
      'Si dices que no, me pondré muy triste...',
      'Estaré muy triste...',
      'Estaré muy muy muy triste...',
      'Está bien, dejaré de preguntar...',
      'Solo bromeo, ¡di que sí por favor! xd',
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
  public emitChangeVale(): void {
    this.emitChange.emit(true);
  }
}

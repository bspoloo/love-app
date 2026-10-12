import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'love-app';
  public isConfirm: boolean = false;
  constructor() {

  }

  public openLater(): void {
    const telefono = '59172612649';
    const mensaje = 'Sis claro :v';

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    const ventana = window.open('about:blank', '_blank');

    if (!ventana) {
      console.error('El navegador bloqueó la ventana emergente.');
      return;
    }
    ventana.location.href = url;
  }

  public changeComponent(value: boolean): void {
    this.isConfirm = value;

    setTimeout(() => {
      this.openLater()
    }, 5000);
  }
}

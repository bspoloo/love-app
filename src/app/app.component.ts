import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'love-app';
  public isConfirm : boolean = false;
  constructor(){

  }
  public changeComponent(value : boolean): void{
    console.log('Rebido valor');
    this.isConfirm = value;
  }
}

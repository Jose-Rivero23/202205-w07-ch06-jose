import { Component, OnInit } from '@angular/core';
import { iMenuOptions } from './interface/menu.options';

@Component({
  selector: 'isi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo';
  menuOptions!: Array<iMenuOptions>;
  constructor() {}

  ngOnInit(): void {
    this.menuOptions = [
      { path: 'home', label: 'Home' },
      { path: 'todo', label: 'Todo' },
      { path: 'todosrv', label: 'TodoSrv' },
      { path: 'about', label: 'About' },
      { path: 'pikachu', label: 'Pikachu' },
    ];
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isi-todo',
  template: `
    <h2>Lista de Tareas</h2>
    <isi-list></isi-list>
  `,
  styles: [],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

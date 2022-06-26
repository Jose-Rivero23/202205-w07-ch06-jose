import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { iTaskModel, TaskModel } from '../../models/task';

@Component({
  selector: 'isi-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  task!: iTaskModel;
  users!: Array<string>;

  @Output() onAdd: EventEmitter<TaskModel>;
  constructor() {
    this.onAdd = new EventEmitter();
  }

  ngOnInit(): void {
    this.users = ['Toño', 'Jesus', 'Marina', 'Fernando'];
    this.task = { title: '', responsible: '' };
  }
  handleClick() {
    if (!this.task.title) return;

    const newTask = new TaskModel(this.task.title, this.task.responsible);
    this.onAdd.next(newTask);
    console.log(newTask);
    this.task = { title: '', responsible: '' };
  }
}

import { Component, OnInit } from '@angular/core';
import { getTaskList } from '../../data/tasks';
import { iTaskModel, TaskModel } from '../../models/task';

@Component({
  selector: 'isi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks!: Array<TaskModel>;
  title!: string;

  constructor() {}

  ngOnInit(): void {
    this.tasks = getTaskList();
    this.title = 'Tasks List';
  }
  onDeleteHandle(id: number) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }
  onAddHandle(newTask: TaskModel) {
    this.tasks.push(newTask);
  }
  onChangeHandle(completeTask: TaskModel) {
    this.tasks = this.tasks.map((item) =>
      item.id === completeTask.id ? completeTask : item
    );
  }
}

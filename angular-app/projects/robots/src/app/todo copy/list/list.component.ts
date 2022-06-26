import { Component, OnInit } from '@angular/core';

import { TaskModel } from '../../models/task';
import { ApiService } from '../../services/api.service';
import { TaskStateService } from '../../services/task-state.service';

@Component({
  selector: 'isi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks!: Array<TaskModel>;
  title!: string;

  constructor(public taskState: TaskStateService) {}

  ngOnInit(): void {
    this.title = 'Tasks List';
    this.taskState.getTasks().subscribe((data) => (this.tasks = data));
  }
}

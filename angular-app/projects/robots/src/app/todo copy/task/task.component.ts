import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskModel } from '../../models/task';
import { TaskStateService } from '../../services/task-state.service';

@Component({
  selector: 'isi-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: TaskModel;

  constructor(private taskService: TaskStateService) {}

  ngOnInit(): void {}
  deleteHandle(): void {
    this.taskService.deleteTask(this.task.id);
  }
  changeHandle() {
    this.taskService.updateTask(this.task);
  }
}

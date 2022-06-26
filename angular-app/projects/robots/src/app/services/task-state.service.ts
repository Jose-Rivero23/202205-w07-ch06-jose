import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskModel } from '../models/task';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TaskStateService {
  private $tasks: BehaviorSubject<Array<TaskModel>>;
  constructor(public apiService: ApiService) {
    this.$tasks = new BehaviorSubject([] as Array<TaskModel>);
    this.apiService.getTasks().subscribe((data) => this.$tasks.next(data));
  }
  getTasks() {
    return this.$tasks.asObservable();
  }
  deleteTask(id: number) {
    this.apiService
      .deleteTask(id)
      .subscribe((data) =>
        this.$tasks.next(this.$tasks.value.filter((item) => item.id !== id))
      );
  }
  addTask(newTask: TaskModel) {
    this.apiService.addTask(newTask).subscribe((data) => {
      this.$tasks.next([...this.$tasks.value, data]);
    });
  }
  updateTask(completeTask: TaskModel) {
    this.apiService
      .updateTask(completeTask)
      .subscribe((data) =>
        this.$tasks.value.map((item) =>
          item.id === completeTask.id ? completeTask : item
        )
      );
  }
}

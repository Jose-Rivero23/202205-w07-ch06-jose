import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl!: string;
  constructor(public http: HttpClient) {
    this.apiUrl = 'http://localhost:4444';
  }
  getRobots(): Observable<Array<TaskModel>> {
    return this.http.get(this.apiUrl) as Observable<Array<TaskModel>>;
  }
  addTask(newTask: TaskModel): Observable<TaskModel> {
    return this.http.post(this.apiUrl, newTask) as Observable<TaskModel>;
  }

  deleteTask(id: number): Observable<TaskModel> {
    return this.http.delete(this.apiUrl + id) as Observable<TaskModel>;
  }
  updateTask(task: TaskModel): Observable<TaskModel> {
    return this.http.patch(
      this.apiUrl + task.id,
      task
    ) as Observable<TaskModel>;
  }
}

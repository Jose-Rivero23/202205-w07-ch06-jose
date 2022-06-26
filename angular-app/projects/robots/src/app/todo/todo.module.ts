import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent, ListComponent, AddComponent, TaskComponent],
  imports: [CommonModule, TodoRoutingModule, FormsModule],
})
export class TodoModule {}

import { Injectable } from '@angular/core';
import { Todo } from 'src/models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todo!: Todo[];

  constructor() { }

  recuperaTodo() {
    this.todo = JSON.parse(String(localStorage.getItem('task')))
    return this.todo;
  }

  aggiornaTodo(data: Partial<Todo>, id: number){
    this.todo = this.todo.map((element) =>
            element.id == id ? { ...element, ...data } : element
        );
  }
}

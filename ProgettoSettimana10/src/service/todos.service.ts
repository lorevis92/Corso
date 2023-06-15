import { Injectable } from '@angular/core';
import { Todo } from 'src/models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todo!: Todo[];

  constructor() { }

  aggiornaTodo(data: Partial<Todo>, id: number){
    this.todo = this.todo.map((element) =>
            element.id == id ? { ...element, ...data } : element
        );
  }
  aggiungiTodo(todos:string) {
    this.todo.push({title:todos, complited:false})
  }
}

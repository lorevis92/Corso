import { Injectable } from '@angular/core';
import { Todo } from 'src/models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todo: Todo [] = [];
  constructor() { }
  recuperaTodo (title:string) {
    this.todo.push({id:0, title: title, complited: false})
  }
  aggiornaTodo (data: Partial <Todo>, id:number) {
    this.todo = this.todo.map((todo) =>
    todo.id == id ? { ...todo, ...data } : todo
);
return this.todo.find((todo) => todo.id == id) as Todo;
  }
}

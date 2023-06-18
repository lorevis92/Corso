import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo.interface';
import { TodosService } from 'src/service/todos.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todo: Todo[] = [];
  todoEseguito!: Todo | undefined;

  constructor(private todoSrv : TodosService) { }
  i : number = 0;
  todoTitle!: string;
  ngOnInit(): void {
    this.todo = this.todoSrv.recuperaTodo();
    console.log(this.todo);

  }

  aggiungiTodo(form: NgForm) {
    this.i = this.i+1;
    this.todoTitle = form.value.title;
    console.log(this.todoTitle);
    this.todo.push({title: this.todoTitle,
      complited: false,
      id:this.i });
    console.log(form.value);
    console.log(this.todo);
    localStorage.setItem('task', JSON.stringify(this.todo));
}
  cancellaTodo(id:number){
    this.todo = this.todo.filter(e => e.id != id)
    localStorage.setItem('task', JSON.stringify(this.todo));
}
  todoCompletato(id:number) {
    this.todo.map((e) => {if(e.id == id) e.complited = true} );
    console.log(this.todo);
    localStorage.setItem('task', JSON.stringify(this.todo));
  }
}


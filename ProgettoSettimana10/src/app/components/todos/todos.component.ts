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

  todo!: Todo[];

  constructor(private todoSrv : TodosService) { }

  ngOnInit(): void {
    this.todo = this.todoSrv.recuperaTodo();
    console.log(this.todo);
  }

  aggiungiTodo(form: NgForm) {
    this.todoSrv.aggiungiTodo(form.value)
    console.log(form.value);

}
}


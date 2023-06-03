import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo.interface';
import { TodosService } from 'src/service/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

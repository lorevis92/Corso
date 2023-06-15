import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo.interface';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todo!: Todo[];

  constructor() { }

  ngOnInit(): void {

  }

}


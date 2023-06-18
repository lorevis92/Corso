import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo.interface';
import { TodosService } from 'src/service/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  todo!: Todo[];

  constructor(private todoSrv: TodosService) {}

  ngOnInit(): void {
    this.todo = this.todoSrv.recuperaTodo();
    console.log(this.todo);
  }
  cancellaTodo(id:number){
    this.todo = this.todo.filter(e => e.id != id)
    localStorage.setItem('task', JSON.stringify(this.todo));
}

}

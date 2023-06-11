import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User[] = [];

  constructor( private recuperaUtenti:UserService) { }

  ngOnInit(): void {
    this.recuperaUtenti.recupera().subscribe((dato: User[]) => {
      this.user = dato;
      console.log(this.user);
    })
  }
}

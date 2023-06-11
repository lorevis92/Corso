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
  indexUserById: number = 0;
  loggedInUserId: number = Number(localStorage.getItem('id'));

  constructor( private recuperaUtenti:UserService) { }

  ngOnInit(): void {
    this.recuperaUtenti.recupera().subscribe((dato: User[]) => {
      this.user = dato;
      // console.log(this.user); è solo per verifica
      this.indexUserById = this.user.map(e => e.id).indexOf(this.loggedInUserId);
    })
  }
}

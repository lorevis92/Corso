import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: User[] = [];
  indexUserById: number = 0;
  loggedInUserId: number = Number(localStorage.getItem('id'));

  constructor(private authSrv: AuthService, private recuperaUtenti:UserService) { }


  ngOnInit(): void {
    this.recuperaUtenti.recupera().subscribe((dato: User[]) => {
      this.user = dato;
      console.log(this.user);
      this.indexUserById = this.user.map(e => e.id).indexOf(this.loggedInUserId);
    })
  }

  logout() {
    this.authSrv.logout();
}
  cancella() {
    this.authSrv.logout();
    this.recuperaUtenti.cancella(this.loggedInUserId);
  }
}


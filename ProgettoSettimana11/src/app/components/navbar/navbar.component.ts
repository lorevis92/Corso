import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user.interface';
import { UserService } from 'src/app/service/user.service';
//import { GetGenresService } from 'src/app/service/get-genres.service';
//import { Genres } from 'src/app/models/genres.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: User[] = [];
 // genres: Genres[] = [];
  indexUserById: number = 0;
  loggedInUserId: number = Number(localStorage.getItem('id'));

  constructor(private authSrv: AuthService, private recuperaUtenti:UserService/*, private recuperaGeneri: GetGenresService*/) { }


  ngOnInit(): void {
    this.recuperaUtenti.recupera().subscribe((dato: User[]) => {
      this.user = dato;
      //console.log(this.user);
      this.indexUserById = this.user.map(e => e.id).indexOf(this.loggedInUserId);
    })

    /*this.recuperaGeneri.recupera().subscribe((dato:Genres[])=>{
      this.genres = dato;
      console.log(this.genres);
    })*/
  }

  logout() {
    this.authSrv.logout();
}
  }



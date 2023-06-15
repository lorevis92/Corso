import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss']
})
export class UtentiComponent implements OnInit {
  user: User[] = [];

  constructor( private userSrv:UserService) { }

  ngOnInit(): void {
    this.userSrv.recupera().subscribe((dato: User[]) => {
      this.user = dato;
      //console.log(this.user);
    })
  }
  cancellaUtente(id: number) {
    this.userSrv.cancella(id).subscribe(() => {
        this.user = this.user.filter((utente) => utente.id !== id);
        alert("Utente Cancellato!");
    });
}

}


import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interface/users.interface';
import { GetUsersService } from 'src/app/service/get-users.service';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.scss']
})
export class UtenteComponent implements OnInit {
  user: Users[] = [];
  idUtente!: number;
  utenteCorrente!: Users[];
  constructor(private recuperaUtenti:GetUsersService) { }

  ngOnInit(): void {
    this.recuperaUtenti.recupera().subscribe((dato: Users[]) => {
    this.user = dato;
    console.log(this.user);
    this.idUtente = Number(localStorage.getItem("userIdPost"));
    this.utenteCorrente = this.user.filter(e => e.id == this.idUtente)
    console.log(this.utenteCorrente)
    })
  }
}

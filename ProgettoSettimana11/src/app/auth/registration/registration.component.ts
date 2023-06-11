import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  isLoading = false;

  constructor( private authsrv: AuthService, private router: Router) { }

  ngOnInit(): void {}

  registra (form: NgForm) {
    this.isLoading = true;
    //console.log(form.value); Si mette solo per la scrittura codice, poi si toglie altrimenti si vedrebbe la password dell'utente appena registrato lol
    try {
      this.authsrv.signup(form.value).subscribe();
      this.router.navigate(['/login']);
      this.isLoading = false;
    }
    catch(error) {
      console.log(error);
      this.isLoading = false;
        this.router.navigate(['/registration']);
    }
    }
  }



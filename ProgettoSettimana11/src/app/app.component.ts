import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/auth/auth-data.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    user!: AuthData | null;

    constructor(private authSrv: AuthService) {}

    ngOnInit(): void {
        this.authSrv.user$.subscribe((_user) => {
            this.user = _user;
        });
    }

    logout() {
        this.authSrv.logout();
    }
}

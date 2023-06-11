import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieComponent } from './components/movie/movie.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Route[] = [
    {
        path: '',
        component: AppComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'film',
        component: MovieComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'utente',
        component: UserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

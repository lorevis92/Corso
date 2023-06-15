import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { UtenteComponent } from './modules/utente/utente.component';
import { PostComponent } from './modules/post/post.component';
import { NavbarComponent } from './modules/navbar/navbar.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'utente',
    component: UtenteComponent
  },
  {
    path: 'post',
    component: PostComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UtenteComponent,
    PostComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

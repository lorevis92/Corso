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
import { CommentsComponent } from './modules/comments/comments.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
    path: ':id',
    component: PostComponent,
    children: [
      {
        path: ':id',
        component: CommentsComponent
      }]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UtenteComponent,
    PostComponent,
    NavbarComponent,
    CommentsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

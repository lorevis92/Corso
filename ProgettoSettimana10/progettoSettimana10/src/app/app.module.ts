import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodosComponent } from './components/todos/todos.component';
import { ComplitedComponent } from './components/complited/complited.component';

const routes: Route[] = [
  {
      path: 'todos',
      component: TodosComponent
  },
  {
      path: 'completed',
      component: ComplitedComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodosComponent,
    ComplitedComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

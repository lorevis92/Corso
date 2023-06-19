import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/interface/posts.interface';
import { GetPostsService } from 'src/app/service/get-posts.service';
import { GetUsersService } from 'src/app/service/get-users.service';
import { environment } from 'src/environments/environment';
import { Users } from 'src/app/interface/users.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post!: Posts[];
  id!: number;
  baseURL: string = environment.baseUrl;
  user!: Users[];
  vediCommenti: boolean = true;

  constructor(private postSrv: GetPostsService, private userSrv: GetUsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametro => {
      this.id = +parametro['id'];
      console.log(this.id)
  });
  this.postSrv.recuperaById(this.id).subscribe((dato: Posts[]) => {
    this.post = dato;
  })

  this.userSrv.recuperaById(Number(localStorage.getItem("userIdPost"))).subscribe((dato: Users[]) => {
    this.user = dato;
  });
  }

  visualizzaCommenti(){
    this.vediCommenti = !this.vediCommenti;
  }
}

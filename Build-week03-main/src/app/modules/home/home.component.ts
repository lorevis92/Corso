import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interface/posts.interface';
import { GetPostsService } from 'src/app/service/get-posts.service';
import { Users } from 'src/app/interface/users.interface';
import { GetUsersService } from 'src/app/service/get-users.service';
import { PostWithUserName } from 'src/app/interface/post-with-user-name.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: Users[] = [];
  post: Posts[] = [];
  postMakerUser!: PostWithUserName;
  nomeUtenti: string[] = []


  constructor(private recuperaUtenti:GetUsersService, private recuperaPost: GetPostsService) { }

  ngOnInit(): void {
    this.recuperaUtenti.recupera().subscribe((dato: Users[]) => {
      this.user = dato;
      console.log(this.user);
      })
    this.recuperaPost.recupera().subscribe((dato: Posts[]) => {
      this.post = dato;
      console.log(this.post)
    })
    /*for (let i = 0; i < this.post.length; i++) {
      for (let j = 0; j < this.user.length; j++) {
        console.log(4);
      }
    }*/
    /*this.post.forEach(element => {
      console.log(4);
      this.user.forEach(e => {
        if(e.id == element.userId)
        this.nomeUtenti.push(e.name);

      });
    });
    console.log(this.nomeUtenti);*/
  }
  updateUserIdLocalStorage(id: number) {
    localStorage.setItem("userIdPost", String(id));
  }
  cancellaPost (id:number) {
    this.recuperaPost.cancella(id).subscribe(()=>{
      this.post = this.post.filter(elemento =>
      elemento.id!== id);
  })
  }

}

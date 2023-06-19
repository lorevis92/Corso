import { Component, OnInit } from '@angular/core';
import { GetCommentsService } from 'src/app/service/get-comments.service';
import { Comments } from 'src/app/interface/comments.interface';
import { ActivatedRoute } from '@angular/router';
import { GetUsersService } from 'src/app/service/get-users.service';
import { Users } from 'src/app/interface/users.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  id!: number;
  comments!: Comments[];
  user!: Users[];

  constructor(private userSrv: GetUsersService, private commentSrv: GetCommentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametro => {
      this.id = +parametro['id'];
  });

  this.commentSrv.recupera(this.id).subscribe((dato: Comments[]) => {
    this.comments = dato;
    console.log(this.comments);
  })

  this.userSrv.recuperaByMail('ciao').subscribe((dato: Users[]) => {
    this.user = dato;
  }); // non so ancora come prendere un dato (in questo caso la mail) da una *ngFor
  }

}

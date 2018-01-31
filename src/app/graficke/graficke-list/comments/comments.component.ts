import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GrafickeService } from '../../services/graficke.service';
import { CommentList} from '../../model/comment-list';
import { Comment } from '../../model/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[]  
  id: number;

  constructor(private GrafickeService: GrafickeService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe((params)=>{
  		this.id = +params['id'];

      this.refreshComments();
  	});
  }	

  refreshComments(){
    this.GrafickeService.getComments(this.id).subscribe((data)=>{
      console.log(data);
       this.comments = data.results;
    });
  }



}

import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

import { Comment } from '../../../model/comment';
import { GrafickeService } from '../../../services/graficke.service';

@Component({
  selector: 'g-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {
  @Input() cardId:number;
  @Output() emitComment = new EventEmitter<Comment>();

  newComment: Comment = new Comment();

  constructor( private GrafickeService: GrafickeService ) { }

  ngOnInit() {
  }

  onSubmit(){
  	this.newComment.date = (new Date).toISOString();
  	this.newComment._id = this.cardId;
  	this.GrafickeService.saveComment(this.newComment).subscribe((data)=>{
  		this.emitComment.emit(data);
      this.newComment = new Comment();  //reset
  	})
  }


}

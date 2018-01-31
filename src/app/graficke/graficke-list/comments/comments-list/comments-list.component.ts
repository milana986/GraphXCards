import { Component, OnInit ,Input} from '@angular/core';
import { Comment } from '../../../model/comment';

@Component({
  selector: 'g-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  @Input() comment:Comment;

  constructor() { }

  ngOnInit() {
  }


}

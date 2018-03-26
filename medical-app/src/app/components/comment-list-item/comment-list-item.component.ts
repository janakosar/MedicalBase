/**
 * Created by yana on 26.03.18.
 */
import {Component, Input} from '@angular/core';
import {Comment} from "../../domain/Comment";

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.css'],
  providers: []

})
export class CommentListItemComponent {

  @Input()
  comment: Comment;

  constructor() {}
}

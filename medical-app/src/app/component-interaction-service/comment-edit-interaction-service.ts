/**
 * Created by yana on 25.03.18.
 */
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {Comment} from "../domain/Comment";

@Injectable()
export class CommentEditInteractionService {

  private onEditCommentClickedSource = new Subject<Comment>();

  onEditCommentClicked$ = this.onEditCommentClickedSource.asObservable();


  onCommentItemClick(comment: Comment){
    this.onEditCommentClickedSource.next(comment);
  }

}

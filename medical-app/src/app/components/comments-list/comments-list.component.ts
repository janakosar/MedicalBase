/**
 * Created by yana on 26.03.18.
 */
import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../domain/Comment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css'],
  providers: []

})
export class CommentsListComponent implements OnInit, OnDestroy {

  comments: Array<Comment>;

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService) {}

  async ngOnInit() {

      this.route.params.subscribe(params => {
        this.loadComments(params['patientId']);
      });

  }

  private loadComments(patientId: number){

    this.commentService.subscribeOnComments();
    this.commentService.comments.subscribe(comments =>{
      console.log("Comments: " + JSON.stringify(comments));
      this.comments = comments;
    });
    console.log("GetCommentsFor: " + patientId);
    this.commentService.findAll(patientId);
  }

  ngOnDestroy() {
    this.commentService.unSubscribeFromComments();
  }


}

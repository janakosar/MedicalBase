/**
 * Created by yana on 26.03.18.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../domain/Comment";
import {ActivatedRoute} from "@angular/router";
import {CommentEditInteractionService} from "../../component-interaction-service/comment-edit-interaction-service";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css'],
  providers: []

})
export class CommentsListComponent implements OnInit, OnDestroy {

  // @Input() patient: Patient I'd like to inout patient or even patientId
  //from parent component, but it says that patient is undefined
  //and I don't know why, so, I'm parsing route, but it's not pretty nice..

  comments: Array<Comment>;

  constructor(private route: ActivatedRoute,
              private commentService: CommentService,
              private commentsIntercationService: CommentEditInteractionService) {
  }

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadComments(params['patientId']);
    });

  }

  private loadComments(patientId: number) {

    this.commentService.subscribeOnComments();
    this.commentService.comments.subscribe(comments => {
      this.comments = comments;
    });
    this.commentService.findAll(patientId);
  }

  ngOnDestroy() {
    this.commentService.unSubscribeFromComments();
  }

  public onCommentClick(comment: Comment){
    console.log("OnCommenrClick: " + JSON.stringify(comment));
    this.commentsIntercationService.onCommentItemClick(comment);
  }

}

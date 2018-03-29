/**
 * Created by yana on 26.03.18.
 */
import {Component} from "@angular/core";
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../models/Comment";
import {ActivatedRoute} from "@angular/router";
import {CommentEditInteractionService} from "../../../component-interaction-service/comment-edit-interaction-service";
import {LifecycleComponent} from "../../../lifecycle.component";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent extends LifecycleComponent{

  // @Input() patient: Patient I'd like to inout patient or even patientId
  //from parent component, but it says that patient is undefined
  //and I don't know why, so, I'm parsing route, but it's not pretty nice..

  comments: Array<Comment>;

  constructor(private route: ActivatedRoute,
              private commentService: CommentService,
              private commentsIntercationService: CommentEditInteractionService) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadComments(params['patientId']);
    });

  }

  private loadComments(patientId: number) {

    this.subscription = this.commentService.commentsBehaviorSubject.subscribe(comments => {
      this.comments = comments;
    });
    this.commentService.findAll(patientId);
  }

  public onCommentClick(comment: Comment){
    this.commentsIntercationService.onCommentItemClick(comment);
  }

}

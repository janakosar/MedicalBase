/**
 * Created by yana on 26.03.18.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {Comment} from "../../models/Comment";
import {CommentService} from "../../services/comment.service";
import {CommentEditInteractionService} from "../../../component-interaction-service/comment-edit-interaction-service";

@Component({
  selector: 'app-create-comment-block',
  templateUrl: './create-comment-block.component.html',
  styleUrls: ['./create-comment-block.component.css']
})
export class CreateCommentBlockComponent implements OnInit, OnDestroy {

  patientId: number;

  commentForm: FormGroup;
  subscription: Subscription;
  commentSubscription: Subscription;

  comment: Comment;

  edit: boolean;

  constructor(private route: ActivatedRoute,
              private commentService: CommentService,
              private commentEditInteracrionService: CommentEditInteractionService) {

    this.commentForm = this.buildFormGroup();
    this.commentSubscription =
      commentEditInteracrionService.onEditCommentClicked$.subscribe(
        (comment) => {
          this.edit = true;
          this.comment = comment;

          this.commentForm.patchValue({
            text: comment.text
          });
        });
  }

  ngOnInit() {
    this.parseRoute();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private parseRoute() {
    this.subscription = this.route.params.subscribe(params => {
      this.patientId = params['patientId'];
    });
  }


  private buildFormGroup(): FormGroup {

    return new FormGroup({
      text: new FormControl('', Validators.required)
    });
  }


  addComment() {
    if (this.commentForm.valid) {

      let comment = new Comment();
      comment.createDate = new Date();
      comment.text = this.commentForm.controls['text'].value;

      this.postComment(this.patientId, comment);
    }
  }

  private async postComment(patientId: number, comment: Comment) {
    await this.commentService.addComment(patientId, comment);
    this.updateUIAfterCommentCreated();
  }


  private async updateComment(patientId: number, comment: Comment) {
    await this.commentService.updateComment(patientId, comment);
  }

  public cancel() {
    this.updateUIAfterCommentCreated();
  }

  public async saveChanges() {

    this.comment.createDate = new Date();
    this.comment.text = this.commentForm.controls['text'].value;

    await this.commentService.updateComment(this.patientId, this.comment);
    this.updateUIAfterCommentCreated();
  }

  private updateUIAfterCommentCreated() {
    this.commentForm.reset();
    this.comment = null;
    this.edit = false;
  }
}


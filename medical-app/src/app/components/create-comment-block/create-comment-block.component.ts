/**
 * Created by yana on 26.03.18.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {Comment} from "../../domain/Comment";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-create-comment-block',
  templateUrl: './create-comment-block.component.html',
  styleUrls: ['./create-comment-block.component.css'],
  providers: []

})
export class CreateCommentBlockComponent implements OnInit, OnDestroy {

  patientId: number;

  commentForm: FormGroup;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private commentService: CommentService) {

    this.commentForm = this.buildFormGroup();
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
  }
}


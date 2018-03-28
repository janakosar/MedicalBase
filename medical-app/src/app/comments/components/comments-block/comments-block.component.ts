/**
 * Created by yana on 26.03.18.
 */
import {Component} from "@angular/core";
import {CommentEditInteractionService} from "../../../component-interaction-service/comment-edit-interaction-service";

@Component({
  selector: 'app-comments-block',
  templateUrl: './comments-block.component.html',
  styleUrls: ['./comments-block.component.css'],
  providers: [CommentEditInteractionService]

})
export class CommentsBlockComponent {}

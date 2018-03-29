import {BaseBehaviorSubject} from "../../base.behavior.subject";
import {Comment} from "../models/Comment"

/**
 * Created by yana on 29.03.18.
 */

export class CommentsBehaviorSubject extends BaseBehaviorSubject<Comment>{

  constructor() {
    super();
  }

  equal(comment1: Comment, comment2: Comment): boolean{
    return comment1.id == comment2.id
  }

}

/**
 * Created by yana on 26.03.18.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subscription} from "rxjs";
import {Comment} from "../domain/Comment"
import {BaseService} from "./BaseService";


@Injectable()
export class CommentService extends BaseService{

  private apiUrl = 'http://localhost:8080/api/v1/patients/';

  comments: BehaviorSubject<Array<Comment>> = new BehaviorSubject([]);
  commentsSubscription: Subscription;

  constructor(private http: HttpClient) {}

  subscribeOnComments() {
    this.commentsSubscription = this.comments.subscribe();
  }

  unSubscribeFromComments() {
    this.commentsSubscription.unsubscribe();
  }

  async findAll(patientId: number) {
    const currentCommentsList = await this.http.get<Array<Comment>>(this.buildApiUrl(patientId))
      .toPromise()
      .catch(error => this.handleError(error));

    this.comments.next(currentCommentsList);
  }


  async addComment(patientId: number, comment: Comment) {
    const res = await this.http.post<Comment>(this.buildApiUrl(patientId), comment)
      .toPromise()
      .catch(error => this.handleError(error));

    this.addToCollection(res);

    return res;
  }

  private addToCollection(comment: Comment) {
    let currentValue: Array<Comment> = this.comments.getValue();

    currentValue.push(comment);
    this.comments.next(currentValue);
  }

  private buildApiUrl(patientId: number){
    return this.apiUrl + patientId + "/comments";
  }



}

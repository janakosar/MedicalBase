/**
 * Created by yana on 26.03.18.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {HttpClient} from "@angular/common/http";
import {Comment} from "../models/Comment";
import {BaseService} from "../../services/base.service";
import {CommentsBehaviorSubject} from "./comments.behavior.subject";


@Injectable()
export class CommentService extends BaseService {

  private apiUrl = 'https://medical-base.herokuapp.com/api/v1/patients/';

  commentsBehaviorSubject: CommentsBehaviorSubject = new CommentsBehaviorSubject();

  constructor(private http: HttpClient) {
    super();
  }

  async findAll(patientId: number) {
    const currentCommentsList = await this.http.get<Array<Comment>>(this.buildApiUrl(patientId))
      .toPromise()
      .catch(error => this.handleError(error));

    this.commentsBehaviorSubject.notifySubjectChanged(currentCommentsList);
  }


  async addComment(patientId: number, comment: Comment) {
    const res = await this.http.post<Comment>(this.buildApiUrl(patientId), comment)
      .toPromise()
      .catch(error => this.handleError(error));

    this.commentsBehaviorSubject.add(res);

    return res;
  }


  async updateComment(patientId: number, comment: Comment) {
    const res = await this.http.put<Comment>(this.buildApiUrl(patientId), comment)
      .toPromise()
      .catch(error => this.handleError(error));

    this.commentsBehaviorSubject.replace(res);

    return res;
  }

  private buildApiUrl(patientId: number) {
    return `${this.apiUrl}${patientId}/comments`
  }
}

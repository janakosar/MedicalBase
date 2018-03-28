/**
 * Created by yana on 28.03.18.
 */
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
  private subject = new Subject<string>();

  constructor(private router: Router) {}

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  showAlertMessage(message: string) {
    this.alert( message);
  }

  alert(message: string) {
    this.subject.next(message);
  }
}

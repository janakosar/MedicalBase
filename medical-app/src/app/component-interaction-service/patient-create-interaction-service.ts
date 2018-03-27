/**
 * Created by yana on 25.03.18.
 */
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class PatientCreateInteractionService {

  private onSavePatientClickedSource = new Subject();

  onSavePatientClicked$ = this.onSavePatientClickedSource.asObservable();

  savePatientClicked() {
    this.onSavePatientClickedSource.next();
  }
}

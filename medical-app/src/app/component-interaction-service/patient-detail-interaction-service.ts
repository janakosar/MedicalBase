/**
 * Created by yana on 25.03.18.
 */
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {Patient} from "../domain/Patient";

@Injectable()
export class PatientDetailInteractionService {

  private onSavePatientClickedSource = new Subject();
  private onDeletePatientClickedSource = new Subject<Patient>();

  onDeletePatientClicked$ = this.onDeletePatientClickedSource.asObservable();


  deletePatientClicked(patient: Patient){
    this.onDeletePatientClickedSource.next(patient);
  }

}
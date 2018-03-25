/**
 * Created by yana on 25.03.18.
 */
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {Patient} from "../../domain/Patient";

@Injectable()
export class PatientCreateInteractionService {

  private onSavePatientClickedSource = new Subject<>();
  private onDeletePatientClickedSource = new Subject<Patient>();

  onSavePatientClicked$ = this.onSavePatientClickedSource.asObservable();
  onDeletePatientClicked$ = this.onDeletePatientClickedSource.asObservable();

  savePatientClicked() {
    this.onSavePatientClickedSource.next();
  }

  deletePatientClicked(patient: Patient){
    this.onDeletePatientClickedSource.next(patient);
  }

}

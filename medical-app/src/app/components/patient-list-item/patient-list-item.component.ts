/**
 * Created by yana on 26.03.18.
 */
import {Component, Input} from '@angular/core';
import {Patient} from "../../domain/Patient";
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-list-item',
  templateUrl: './patient-list-item.component.html',
  styleUrls: ['./patient-list-item.component.css'],
  providers: []

})
export class PatientListItemComponent {

  @Input('patient')
  patient: Patient;

  constructor(private router: Router) {}

  openPatientDetails(patient: Patient) {
    this.router.navigate(['/patient/' + patient.id]);
  }
}

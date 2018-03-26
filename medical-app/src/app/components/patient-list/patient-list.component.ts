import {Component, OnInit, OnDestroy} from '@angular/core';
import {Patient} from "../../domain/Patient";
import {PatientService} from "../../services/patient.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  providers: []

})
export class PatientListComponent implements OnInit, OnDestroy {

  patients: Array<Patient>;
  isDetailsOpened: boolean;

  constructor(private router: Router,
              private patientService: PatientService) {}

  async ngOnInit() {
    this.patientService.subscribeOnPatients();
    this.patientService.patients.subscribe(patients =>
      this.updatePatientsList(patients));
    this.patientService.findAll();
  }

  ngOnDestroy() {
    this.patientService.unSubscribeFromPatients();
  }

  private updatePatientsList(patients: Array<Patient>) {
    this.patients = patients;

    if (!this.isDetailsOpened && this.patients.length > 0) {
      this.openPatientDetails(this.patients[0]);
      this.isDetailsOpened = true;
    }
  }

  openPatientDetails(patient: Patient) {
    this.router.navigate(['/patient/' + patient.id]);
  }

}

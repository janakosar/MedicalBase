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
              private patientService: PatientService) {
  }

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
    this.patients = this.patients.sort((a, b) => this.comparePatients(a, b));
    //I was trying to sort list with OrderByPipe,
    //but need to sort by first and last names,
    //and OrderByPipe didn't work as I expect in this case..
    //One more thing, I need to open details of first user in the list,
    //I suppose, OrderByPipe with work only with UI list representation,
    //so I need sorted list there..

    if (!this.isDetailsOpened && this.patients.length > 0) {
      this.openPatientDetails(this.patients[0]);
      this.isDetailsOpened = true;
    }
    //I need to open details of first user in the list by default,
    //but I'm not sure it's the right way..

  }

  openPatientDetails(patient: Patient) {
    this.router.navigate(['/patient/' + patient.id]);
  }

  private comparePatients(patient1: Patient, patient2: Patient): number{
    const compareRes = patient1.firstName.localeCompare(patient2.firstName);

    if (compareRes != 0) {
      return compareRes;
    } else {
      return patient1.lastName.localeCompare(patient2.lastName);
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {Patient} from "../../domain/Patient";
import {PatientService} from "../../services/patient.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  providers: [PatientService]

})
export class PatientListComponent implements OnInit {

  private patients: Patient[];

  constructor(private router: Router,
              private patientService: PatientService) {
  }

  ngOnInit() {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientService.findAll().subscribe(
      patients => {
        this.patients = patients;
        if(this.patients.length > 0){
          this.openPatientDetails(this.patients[0])
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  openPatientDetails(patient: Patient) {
    this.router.navigate(['/patient/' + patient.id]);
  }

  redirectNewPatientPage() {
    this.router.navigate(['/patient/create']);
  }


  editPatientPage(patient: Patient) {
    if (patient) {
      this.router.navigate(['/patient/edit', patient.id]);
    }
  }

  deletePatient(patient: Patient) {
    if (patient) {
      this.patientService.deletePatientById(patient.id).subscribe(
        res => {
          this.getAllPatients();
          this.router.navigate(['/patients']);
          console.log('done');
        }
      );
    }
  }

}

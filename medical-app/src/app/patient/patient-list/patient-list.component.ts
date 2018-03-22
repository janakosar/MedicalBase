import { Component, OnInit } from '@angular/core';
import { Patient } from "../patient";
import { PatientService } from "../patient.service";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  providers: [PatientService]

})
export class PatientListComponent implements OnInit {

  private patients: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit() { //when component loading get all users and set the users[]
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientService.findAll().subscribe(
      patients => {
        this.patients = patients;
      },
      err => {
        console.log(err);
      }

    );
  }


}

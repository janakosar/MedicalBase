/**
 * Created by yana on 24.03.18.
 */
import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../domain/Patient";
import {Router} from '@angular/router';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {PatientCreateInteractionService} from '../component-interaction-service/patient-create-interaction-service';


@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css'],
  providers: [PatientService, PatientCreateInteractionService]

})
export class PatientCreateComponent implements OnInit {

  patient: Patient;

  patientForm: FormGroup;

  constructor(private router: Router,
              private patientService: PatientService,
              private patientCreateInteractionService: PatientCreateInteractionService) {

    patientCreateInteractionService.onSavePatientClicked$.subscribe(
      () => {
        console.log("onSavePatientClicked.createAndSavePatient");
        this.createAndSavePatient()
      },
      error => {
        console.log(error)
      });

    this.patientForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });

    // if (this.id) { //edit form
    //   this.patientService.findById(this.id).subscribe(
    //     patient => {
    //       this.id = patient.id;
    //       this.patientForm.patchValue({
    //         fistName: patient.firstName,
    //         lastName: patient.lastName,
    //       });
    //     }, error => {
    //       console.log(error);
    //     }
    //   );
    //
    //
    // }
  }

  ngOnInit() {
  }

  createAndSavePatient() {
    if (this.patientForm.valid) {

      // if (this.id) {
      //   let patient: Patient = new Patient(
      //     this.patientForm.controls['firstName'].value,
      //     this.patientForm.controls['lastName'].value);
      //   this.patientService.updatePatient(patient).subscribe();
      // } else {
      let patient: Patient = new Patient();
      patient.firstName = this.patientForm.controls['firstName'].value;
      patient.lastName = this.patientForm.controls['lastName'].value;
      patient.birthDate = this.patientForm.controls['birthDate'].value;
      patient.sex = this.patientForm.controls['sex'].value;
      patient.country = this.patientForm.controls['country'].value;
      patient.state = this.patientForm.controls['state'].value;
      patient.address = this.patientForm.controls['address'].value;

      console.log("Patient: " + JSON.stringify(patient));

      this.patientService.savePatient(patient)
        .subscribe(
          res => {
            this.patient = res;
            this.router.navigate(['/patient/' + this.patient.id]);
          },
          error => {
            console.log(error)
          },
          () => {
            this.patientForm.reset()
          });

      // }

    }
  }

  redirectPatientPage() {
    this.router.navigate(['/patients']);
  }



}


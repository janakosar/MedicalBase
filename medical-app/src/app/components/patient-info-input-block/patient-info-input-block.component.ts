/**
 * Created by yana on 24.03.18.
 */
import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../domain/Patient";
import {Router} from '@angular/router';
import {FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-patient-info-input-block',
  templateUrl: './patient-info-input-block.component.html',
  styleUrls: ['./patient-info-input-block.component.css'],
  providers: [PatientService]

})
export class PatientInfoInputBlockComponent implements OnInit {

  id: number;
  patient: Patient = new Patient();

  patientForm: FormGroup;
  private sub: any;

  constructor(private router: Router,
              private patientService: PatientService) {
    // this.sub = this.route.params.subscribe(params => {
    //   this.id = params['id'];
    // });
    //
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

  onSubmit() {
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
            this.router.navigate(['/patient/' + (res as Patient).id]);
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


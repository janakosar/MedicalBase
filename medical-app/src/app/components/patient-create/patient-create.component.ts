import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../domain/Patient";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css'],
  providers: [PatientService]

})
export class PatientCreateComponent implements OnInit, OnDestroy {
  id: number;
  patient: Patient;

  patientForm: FormGroup;

  private sub: any;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private patientService: PatientService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.patientForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });

    if (this.id) { //edit form
      this.patientService.findById(this.id).subscribe(
        patient => {
          this.id = patient.id;
          this.patientForm.patchValue({
            fistName: patient.firstName,
            lastName: patient.lastName,
          });
        }, error => {
          console.log(error);
        }
      );

    }


  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  onSubmit() {
    if (this.patientForm.valid) {
      if (this.id) {
        let patient: Patient = new Patient(
          this.patientForm.controls['firstName'].value,
          this.patientForm.controls['lastName'].value,);
        this.patientService.updatePatient(patient).subscribe();
      } else {
        let patient: Patient = new Patient(
          this.patientForm.controls['firstName'].value,
          this.patientForm.controls['lastName'].value);
        this.patientService.savePatient(patient).subscribe();

      }

      this.patientForm.reset();
      this.router.navigate(['/patients']);

    }
  }

  redirectPatientPage() {
    this.router.navigate(['/patients']);

  }

}

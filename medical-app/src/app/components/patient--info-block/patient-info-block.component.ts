/**
 * Created by yana on 24.03.18.
 */
import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../domain/Patient";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient-info-block',
  templateUrl: './patient-info-block.component.html',
  styleUrls: ['./patient-info-block.component.css'],
  providers: [PatientService]

})
export class PatientInfoComponent implements OnInit {

  patient: Patient = new Patient();
  patientId: number;

  constructor(private route: ActivatedRoute,
              private patientService: PatientService) {
  }

  ngOnInit() {
    this.subscribeOnUrlChanges()
  }

  private subscribeOnUrlChanges(){
    this.route.url.subscribe((u) => {
      console.log(this.route.snapshot.params);
      this.parseRoute(this.route);
      this.loadPatientDetails(this.patientId);
    });
  }


  private loadPatientDetails(patientId: number) {
    this.patientService.findById(patientId)
      .subscribe(
        response => {
          this.patient = response as Patient
        },
        error => {
          console.log(error)
        },
        () => {
        }
      )
  }

  private parseRoute(route: ActivatedRoute){
    route.params.subscribe(params => {
      this.patientId = params['patientId'];
    });
  }
}


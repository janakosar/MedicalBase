/**
 * Created by yana on 24.03.18.
 */
import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../domain/Patient";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-patient-details-header',
  templateUrl: './patient-details-header.component.html',
  styleUrls: ['./patient-details-header.component.css'],
  providers: [PatientService]

})
export class PatientDetailsHeader implements OnInit {


  patient: Patient = new Patient();
  patientId: number;

  constructor(private patientService: PatientService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscribeOnUrlChanges()
  }

  private subscribeOnUrlChanges(){
    this.route.url.subscribe((u) => {
      console.log(this.route.snapshot.params);
      this.parseRoute(this.route);

      if (this.patientId){
        this.loadPatientDetails(this.patientId);
      }
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

  public calculateAge(birthDate: Date): number {
    let timeDiff = Math.abs(Date.now() - birthDate);
    return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  }
}


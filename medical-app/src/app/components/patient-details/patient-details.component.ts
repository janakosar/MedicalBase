/**
 * Created by yana on 24.03.18.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../domain/Patient";
import {ActivatedRoute} from '@angular/router';
import {PatientCreateInteractionService} from '../component-interaction-service/patient-create-interaction-service';
import {Subscription}   from 'rxjs/Subscription';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
  providers: [PatientService, PatientCreateInteractionService]

})
export class PatientDetailsComponent implements OnInit, OnDestroy {

  patient: Patient = new Patient();
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private patientService: PatientService) {
  }

  ngOnInit() {
    this.subscribeOnUrlChanges()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private subscribeOnUrlChanges() {
    this.subscription = this.route.url.subscribe((u) => {
      console.log(this.route.snapshot.params);
      this.parseRoute(this.route);
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

  private parseRoute(route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.loadPatientDetails(params['patientId']);
    });
  }
}


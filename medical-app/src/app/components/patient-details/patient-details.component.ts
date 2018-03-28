/**
 * Created by yana on 24.03.18.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../models/Patient";
import {ActivatedRoute} from "@angular/router";
import {PatientDetailInteractionService} from "../../component-interaction-service/patient-detail-interaction-service";
import {Subscription} from "rxjs/Subscription";
import {AlertService} from "../../services/alert.service";
import {Sex} from "../../models/Sex";

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
  providers: [AlertService, PatientDetailInteractionService]

})
export class PatientDetailsComponent implements OnInit, OnDestroy {

  patient: Patient = new Patient();
  sexType = Sex;
  urlSubscription: Subscription;
  deletePatientEventSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private patientService: PatientService,
              private alertService: AlertService,
              private patientDetailInteractionService: PatientDetailInteractionService) {

    this.deletePatientEventSubscription =
      patientDetailInteractionService.onDeletePatientClicked$.subscribe(
        (patient) => {
          this.deletePatient(patient)
        });
  }

  ngOnInit() {
    this.subscribeOnUrlChanges()
  }

  ngOnDestroy() {
    this.urlSubscription.unsubscribe();
    this.deletePatientEventSubscription.unsubscribe();
  }

  private subscribeOnUrlChanges() {
    this.urlSubscription = this.route.url.subscribe((u) => {
      this.parseRoute(this.route);
    });
  }

  private async loadPatientDetails(patientId: number) {
    let p = await this.patientService.findById(patientId);
    if (p) {
      this.patient = p;
    }
  }

  private parseRoute(route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.loadPatientDetails(params['patientId']);
    });
  }

  deletePatient(patient: Patient) {
    if (patient) {
      this.patientService.deletePatient(patient);
      this.alertService.showAlertMessage("Patient deleted successfully.");
    }
  }

}


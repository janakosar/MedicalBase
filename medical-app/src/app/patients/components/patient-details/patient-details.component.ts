/**
 * Created by yana on 24.03.18.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {PatientService} from "../../services/patient.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {AlertService} from "../../../services/alert.service";
import {PatientDetailInteractionService} from "../../../component-interaction-service/patient-detail-interaction-service";
import {Patient} from "../../models/Patient";
import {LifecycleComponent} from "../../../lifecycle.component";

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
  providers: [AlertService, PatientDetailInteractionService]

})
export class PatientDetailsComponent extends LifecycleComponent {

  patient: Patient = new Patient();
  deletePatientEventSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private patientService: PatientService,
              private alertService: AlertService,
              private patientDetailInteractionService: PatientDetailInteractionService) {
    super();

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
    super.ngOnDestroy();
    this.deletePatientEventSubscription.unsubscribe();
  }

  private subscribeOnUrlChanges() {
    this.subscription = this.route.url.subscribe((u) => {
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


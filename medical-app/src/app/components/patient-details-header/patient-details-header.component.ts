/**
 * Created by yana on 24.03.18.
 */
import {Component, Input} from "@angular/core";
import {Patient} from "../../domain/Patient";
import {PatientCreateInteractionService} from "../component-interaction-service/patient-create-interaction-service";

@Component({
  selector: 'app-patient-details-header',
  templateUrl: './patient-details-header.component.html',
  styleUrls: ['./patient-details-header.component.css'],
  providers: []

})
export class PatientDetailsHeader {

  @Input()
  patient: Patient;

  constructor(private patientCreateInteractionService: PatientCreateInteractionService) {}

  public calculateAge(birthDate: any): number {
    let timeDiff = Math.abs(Date.now() - birthDate);
    return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  }

  public onSavePatientClick() {
    this.patientCreateInteractionService.savePatientClicked();
  }

  public onDeletePatientClick(patient: Patient) {
    this.patientCreateInteractionService.deletePatientClicked(patient);
  }

}

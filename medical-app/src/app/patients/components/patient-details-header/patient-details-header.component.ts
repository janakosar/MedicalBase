/**
 * Created by yana on 24.03.18.
 */
import {Component, Input} from "@angular/core";
import {Patient} from "../../models/Patient";
import {PatientDetailInteractionService} from "../../../component-interaction-service/patient-detail-interaction-service";

@Component({
  selector: 'app-patient-details-header',
  templateUrl: './patient-details-header.component.html',
  styleUrls: ['./patient-details-header.component.css']
})
export class PatientDetailsHeader {

  @Input()
  patient: Patient;

  constructor(private patientDetailInteractionService: PatientDetailInteractionService) {}

  public calculateAge(birthDate: any): number {
    let timeDiff = Math.abs(Date.now() - birthDate);
    return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  }

  public onDeletePatientClick(patient: Patient) {
    this.patientDetailInteractionService.deletePatientClicked(patient);
  }

}

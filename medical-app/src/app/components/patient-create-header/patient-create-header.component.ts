/**
 * Created by yana on 25.03.18.
 */
import {Component, Input} from "@angular/core";
import {Patient} from "../../domain/Patient";
import {PatientCreateInteractionService} from "../../component-interaction-service/patient-create-interaction-service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-patient-create-header',
  templateUrl: './patient-create-header.component.html',
  styleUrls: ['./patient-create-header.component.css'],
  providers: [Location]

})
export class PatientCreateHeaderComponent  {

  @Input() patient: Patient;

  constructor(
    private location: Location,
    private patientCreateInteractionService: PatientCreateInteractionService) {}

  public onSavePatientClick(){
    this.patientCreateInteractionService.savePatientClicked();
  }

  public goBack(){
    this.location.back();
  }
}

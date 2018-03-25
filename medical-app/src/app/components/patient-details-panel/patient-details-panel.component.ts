/**
 * Created by yana on 24.03.18.
 */
import {Component, OnInit} from "@angular/core";
import {PatientService} from "../../services/patient.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-patient-details-panel',
  templateUrl: './patient-details-panel.component.html',
  styleUrls: ['./patient-details-panel.component.css'],
  providers: [PatientService]

})
export class PatientDetailsPanelComponent implements OnInit {


  constructor(private patientService: PatientService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {


  }
}

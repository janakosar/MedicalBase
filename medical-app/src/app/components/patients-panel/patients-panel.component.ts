/**
 * Created by yana on 24.03.18.
 */
import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-patients-panel',
  templateUrl: './patients-panel.component.html',
  styleUrls: ['./patients-panel.component.css'],
  providers: [PatientService]

})
export class PatientsPanelComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}

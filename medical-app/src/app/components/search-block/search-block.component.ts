/**
 * Created by yana on 24.03.18.
 */
import {Component, OnInit} from "@angular/core";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../domain/Patient";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.css'],
  providers: []

})
export class SearchBlockComponent implements OnInit {


  constructor(private router: ActivatedRoute,
              private patientService: PatientService) {
  }

  ngOnInit() {
  }
}

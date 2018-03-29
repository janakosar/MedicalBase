/**
 * Created by yana on 29.03.18.
 */
import {Patient} from "../models/Patient";
import {BaseBehaviorSubject} from "../../base.behavior.subject";

export class PatientsBehaviorSubject extends BaseBehaviorSubject<Patient>{

  constructor() {
    super();
  }

  equal(patient1: Patient, patient2: Patient): boolean{
    return patient1.id == patient2.id
  }

}

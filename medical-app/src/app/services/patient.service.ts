import {Injectable} from '@angular/core';
import {Patient} from "../domain/Patient";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";


@Injectable()
export class PatientService {

  private apiUrl = 'http://localhost:8080/api/v1/patients';

  constructor(private http: Http) {
  }

  findAll(): any {
    return this.http.get(this.apiUrl)
      .map(res => res.json());
  }

  findById(id: number): any {
    return this.http.get(this.apiUrl + '/' + id)
      .map(res => res.json());
  }

  savePatient(patient: Patient): Observable<Patient> {
    return this.http.post(this.apiUrl, patient)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deletePatientById(id: number): any {
    return this.http.delete(this.apiUrl + '/' + id)
      .map(res => res.json());

  }

  updatePatient(patient: Patient): any {

    console.log("Update patient: " + patient.toString());

    return this.http.put(this.apiUrl, patient)
      .map(res=> {
        console.log("Update response: " + res.json());
        res.json();
      });
  }

}

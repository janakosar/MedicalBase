import { Injectable } from '@angular/core';
import { Patient } from "./patient";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";


@Injectable()
export class PatientService {

  private apiUrl = 'http://localhost:8080/patients';

  constructor(private http: Http) {
  }

  findAll(): Observable<Patient[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Patient> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  savePatient(patient: Patient): Observable<Patient> {
    return this.http.post(this.apiUrl, patient)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deletePatientById(id: number): Observable<boolean> {
  return this.http.delete(this.apiUrl + '/' + id)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

  updatePatient(patient: Patient): Observable<Patient> {

    return this.http.put(this.apiUrl, patient)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}

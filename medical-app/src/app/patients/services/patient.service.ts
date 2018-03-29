import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../services/base.service";
import {Patient} from "../models/Patient";
import {PatientsBehaviorSubject} from "./patients.behavior.subject";


@Injectable()
export class PatientService extends BaseService {

  private apiUrl = 'https://medical-base.herokuapp.com/api/v1/patients';

  behaviorSubject: PatientsBehaviorSubject = new PatientsBehaviorSubject();

  constructor(private http: HttpClient) {
    super();
  }

  async findAll() {
    const currentPatientList = await this.http.get<Array<Patient>>(this.apiUrl)
      .toPromise()
      .catch(error => this.handleError(error));

    this.behaviorSubject.notifySubjectChanged(currentPatientList)
  }


  async findById(id: number) {
    return await this.http.get<Patient>(`${this.apiUrl}/${id}`)
      .toPromise()
      .catch(error => this.handleError(error));
  }

  async savePatient(patient: Patient) {
    const res = await this.http.post<Patient>(this.apiUrl, patient)
      .toPromise()
      .catch(error => this.handleError(error));

    this.behaviorSubject.add(res);

    return res;
  }

  async  deletePatient(patient: Patient) {
    await this.http.delete(`${this.apiUrl}/${patient.id}`)
      .toPromise()
      .then(() => {
        this.behaviorSubject.remove(patient);
      })
      .catch(error => this.handleError(error));

  }

  async updatePatient(patient: Patient) {

    const res = await this.http.put<Patient>(this.apiUrl, patient)
      .toPromise()
      .catch(error => this.handleError(error));

    this.behaviorSubject.replace(patient);

    return res;
  }

}

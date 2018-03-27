import {Injectable} from "@angular/core";
import {Patient} from "../domain/Patient";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {BehaviorSubject, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class PatientService {

  private apiUrl = 'http://localhost:8080/api/v1/patients';

  patients: BehaviorSubject<Array<Patient>> = new BehaviorSubject([]);
  patientsSubscription: Subscription;

  constructor(private http: HttpClient) {
  }

  subscribeOnPatients() {
    this.patientsSubscription = this.patients.subscribe();
  }

  unSubscribeFromPatients() {
    this.patientsSubscription.unsubscribe();
  }

  async findAll() {
    const currentPatientList = await this.http.get<Array<Patient>>(this.apiUrl)
      .toPromise()
      .catch(error => this.handleErrror(error));

    if (currentPatientList) {
      this.patients.next(currentPatientList);
    }
  }


  async findById(id: number) {
    return await this.http.get<Patient>(this.apiUrl + '/' + id)
      .toPromise()
      .catch(error => this.handleErrror(error));
  }

  async savePatient(patient: Patient) {
    const res = await this.http.post<Patient>(this.apiUrl, patient)
      .toPromise()
      .catch(error => this.handleErrror(error));

    if (res) {
      this.addToCollection(res);
    }

    return res;
  }

  async  deletePatient(patient: Patient) {
    await this.http.delete(this.apiUrl + '/' + patient.id)
      .toPromise()
      .then(() => {
        this.removeFromCollection(patient);
      })
      .catch(error => this.handleErrror(error));

  }

  async updatePatient(patient: Patient) {

    const res = await this.http.put<Patient>(this.apiUrl, patient)
      .toPromise()
      .catch(error => this.handleErrror(error));

    if (res) {
      this.updateInCollection(res);
    }

    return res;
  }

  private addToCollection(patient: Patient) {
    let currentValue: Array<Patient> = this.patients.getValue();
    currentValue.push(patient);
    this.patients.next(currentValue);
  }

  private updateInCollection(patient: Patient) {
    let currentValue: Array<Patient> = this.patients.getValue();

    let positionInTheList = this.findIndexOf(patient, currentValue);

    if (positionInTheList > -1) {
      currentValue[positionInTheList] = patient;
    }

    console.log(JSON.stringify(currentValue[positionInTheList]));

    this.patients.next(currentValue);
  }

  private removeFromCollection(patient: Patient) {
    let currentValue: Array<Patient> = this.patients.getValue();

    let positionInTheList = this.findIndexOf(patient, currentValue);

    if (positionInTheList > -1) {
      currentValue.splice(positionInTheList, 1);
    }

    this.patients.next(currentValue);
  }

  private findIndexOf(patient: Patient, patients: Array<Patient>): number {
    let positionInTheList = -1;  //currentValue.indexOf(patient) doesn't work there(

    patients.forEach((item, index) => { //and I don't know why, suppose, it's because
      if (item.id == patient.id) { //of comparison of those objects
        positionInTheList = index;
        return
      }
    });

    return positionInTheList;
  }


  private handleErrror(error: Error): any{
    console.log(error);
    return null;
  }
}

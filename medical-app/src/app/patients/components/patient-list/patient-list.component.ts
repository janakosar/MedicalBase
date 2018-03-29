import {Component, OnInit, OnDestroy} from "@angular/core";
import {Patient} from "../../models/Patient";
import {PatientService} from "../../services/patient.service";
import {Router, UrlSegment, PRIMARY_OUTLET, UrlSegmentGroup, UrlTree} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit, OnDestroy {

  patients: Array<Patient>;
  subscription: Subscription;

  constructor(private router: Router,
              private patientService: PatientService) {
  }

  async ngOnInit() {
    this.subscription = this.patientService.behaviorSubject
      .subscribe(patients => this.updatePatientsList(patients));
    this.patientService.findAll();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private updatePatientsList(patients: Array<Patient>) {
    this.patients = patients;
    this.patients = this.patients.sort((a, b) => this.comparePatients(a, b));
    //I was trying to sort list with OrderByPipe,
    //but need to sort by first and last names,
    //and OrderByPipe didn't work as I expect in this case..
    //One more thing, I need to open details of first user in the list,
    //I suppose, OrderByPipe with work only with UI list representation,
    //so I need sorted list there..

    this.openPatientDetailsIfNeeded();
  }

  private openPatientDetailsIfNeeded() {
    const patientId = this.getCurrentPatientId();
    let exist: boolean = false;
    if (patientId) {
      exist = this.exist(this.patients, patientId);
    }

    if (patientId < 0 && this.patients.length > 0) {
      this.openPatientDetails(this.patients[0]);
    } else if (patientId >= 0 && !exist) {
      if (this.patients.length > 0) {
        this.openPatientDetails(this.patients[0]);
      } else {
        this.router.navigate(['']);
      }
    }

  }

  openPatientDetails(patient: Patient) {
    this.router.navigate([`/patient/${patient.id}`]);
  }

  private comparePatients(patient1: Patient, patient2: Patient): number {
    const compareRes = patient1.firstName.localeCompare(patient2.firstName);

    if (compareRes != 0) {
      return compareRes;
    } else {
      return patient1.lastName.localeCompare(patient2.lastName);
    }
  }

  private getCurrentPatientId(): number {

    const segments: UrlSegment[] = this.parseUrlSegments(this.router.url);

    if (segments) {
      return segments[segments.length - 1] as number;
    } else {
      return -1;
    }
  }

  private parseUrlSegments(url: string): any[] {
    const urlTree: UrlTree = this.router.parseUrl(url);
    const urlSegmentGroup: UrlSegmentGroup = urlTree.root.children[PRIMARY_OUTLET];

    if (urlSegmentGroup) {
      return urlSegmentGroup.segments;
    }
  }

  private exist(patients: Patient[], patientId: number): boolean {

    let exist = false;

    patients.some(patient => {
      exist = patient.id == patientId;
      return exist;
    });

    return exist;
  }

}

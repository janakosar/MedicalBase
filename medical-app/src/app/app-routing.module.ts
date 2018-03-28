import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientCreateComponent} from "./patients/components/patient-create/patient-create.component";
import {PatientDetailsComponent} from "./patients/components/patient-details/patient-details.component";
import {PatientListComponent} from "./patients/components/patient-list/patient-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'patient/create', component: PatientCreateComponent },
  { path: 'patients/', component: PatientListComponent },
  { path: 'patient/:patientId', component: PatientDetailsComponent },
  { path: 'patient/edit/:patientId', component: PatientCreateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

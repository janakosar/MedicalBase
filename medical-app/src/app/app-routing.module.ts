import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientCreateComponent} from "./components/patient-create/patient-create.component";
import {PatientDetailsComponent} from "./components/patient-details/patient-details.component";
import {PatientListComponent} from "./components/patient-list/patient-list.component";

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

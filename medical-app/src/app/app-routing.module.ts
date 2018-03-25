import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientCreateComponent} from "./components/patient-create/patient-create.component";
import {PatientDetailsPanelComponent} from "./components/patient-details-panel/patient-details-panel.component";
import {PatientListComponent} from "./components/patient-list/patient-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'patient/create', component: PatientCreateComponent },
  { path: 'patients/', component: PatientListComponent },
  { path: 'patient/:patientId', component: PatientDetailsPanelComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

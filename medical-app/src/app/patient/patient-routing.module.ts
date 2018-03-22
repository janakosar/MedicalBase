import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';

const routes: Routes = [
  {path: 'patients', component: PatientListComponent},
  {path: 'patient/create', component: PatientCreateComponent},
  {path: 'patient/edit/:id', component: PatientCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }



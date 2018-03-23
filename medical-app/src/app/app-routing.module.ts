import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientListComponent} from "./components/patient-list/patient-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'patients', component: PatientListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

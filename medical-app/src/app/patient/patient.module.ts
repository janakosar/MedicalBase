import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';

@NgModule({
  imports: [
    CommonModule,
    PatientRoutingModule
  ],
  declarations: [PatientListComponent, PatientCreateComponent]
})
export class PatientModule { }

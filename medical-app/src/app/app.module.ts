import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { PatientListComponent } from './components/patient-list/patient-list.component';
import { SearchBlockComponent } from './components/search-block/search-block.component';

import { PatientDetailsHeader } from './components/patient-details-header/patient-details-header.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientCreateComponent } from './components/patient-create/patient-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    SearchBlockComponent,
    PatientDetailsComponent,
    PatientDetailsHeader,
    PatientCreateComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

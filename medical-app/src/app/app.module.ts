import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import {PatientsPanelComponent} from './components/patients-panel/patients-panel.component'
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { SearchBlockComponent } from './components/search-block/search-block.component';

import { PatientCreateComponent } from './components/patient-create/patient-create.component';

import { PatientDetailsPanelComponent } from './components/patient-details-panel/patient-details-panel.component';
import { PatientDetailsHeader } from './components/patient-details-header/patient-details-header.component';
import { PatientInfoComponent } from './components/patient--info-block/patient-info-block.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsPanelComponent,
    PatientListComponent,
    SearchBlockComponent,
    PatientCreateComponent,
    PatientInfoComponent,
    PatientDetailsPanelComponent,
    PatientDetailsHeader
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

//
// import { AboutStylesComponent } from './components/about-styles/about-styles.component';
// import { ActionBarComponent } from './components/action-bar/action-bar.component';
// import { AdminBarComponent } from './components/admin-bar/admin-bar.component';
// import { AdminContentComponent } from './components/admin-content/admin-content.component';
// import { AdminLoginComponent } from './components/admin-login/admin-login.component';
// import { AdminStyleComponent } from './components/admin-style/admin-style.component';
// import { AdminSubtypeComponent } from './components/admin-subtype/admin-subtype.component';
// import { AdminTypeComponent } from './components/admin-type/admin-type.component';
// import { ListBlockComponent } from './components/list-block/list-block.component';
// import { SearchBlockComponent } from './components/search-block/search-block.component';
// import { SearchContentComponent } from './components/search-content/search-content.component';
// import { StylePageComponent } from './components/style-page/style-page.component';
// import { TypeModalComponent } from './components/type-modal/type-modal.component';
// import { TinyComponent } from './tiny.component';
// import {TruncatePipe} from './filters/truncate';
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     AboutStylesComponent,
//     ActionBarComponent,
//     AdminBarComponent,
//     AdminContentComponent,
//     AdminLoginComponent,
//     AdminStyleComponent,
//     AdminSubtypeComponent,
//     AdminTypeComponent,
//     ListBlockComponent,
//     SearchBlockComponent,
//     SearchContentComponent,
//     StylePageComponent,
//     TypeModalComponent,
//     TruncatePipe,
//     TinyComponent
//   ],
//   imports: [
//     BrowserModule.withServerTransition({appId: 'art.style'}),
//     FormsModule,
//     HttpModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

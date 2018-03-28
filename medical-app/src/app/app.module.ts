import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {
  PatientListComponent,
  PatientListItemComponent,
  PatientDetailsComponent,
  PatientDetailsHeader,
  PatientCreateComponent,
  PatientCreateHeaderComponent
} from "./patients/components/index";
import {HttpClientModule} from "@angular/common/http";
import {PatientService} from "./patients/services/patient.service";
import {CommentService} from "./comments/services/comment.service";
import {
  CommentsBlockComponent,
  CommentsListComponent,
  CommentListItemComponent,
  CreateCommentBlockComponent
} from "./comments/components/index";
import {FilterPipe} from "./patients/pipes/filter.pipe";
import {AlertComponent} from "./alert/alert.component";

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientListItemComponent,
    PatientDetailsComponent,
    PatientDetailsHeader,
    PatientCreateHeaderComponent,
    PatientCreateComponent,
    CommentsListComponent,
    CommentListItemComponent,
    CommentsBlockComponent,
    CreateCommentBlockComponent,
    FilterPipe,
    AlertComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PatientService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

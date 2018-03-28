import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {PatientListComponent} from "./components/patient-list/patient-list.component";
import {PatientListItemComponent} from "./components/patient-list-item/patient-list-item.component";
import {PatientDetailsHeader} from "./components/patient-details-header/patient-details-header.component";
import {PatientCreateHeaderComponent} from "./components/patient-create-header/patient-create-header.component";
import {PatientDetailsComponent} from "./components/patient-details/patient-details.component";
import {PatientCreateComponent} from "./components/patient-create/patient-create.component";
import {HttpClientModule} from "@angular/common/http";
import {PatientService} from "./services/patient.service";
import {CommentService} from "./services/comment.service";
import {CommentsListComponent} from "./components/comments-list/comments-list.component";
import {CommentListItemComponent} from "./components/comment-list-item/comment-list-item.component";
import {CommentsBlockComponent} from "./components/comments-block/comments-block.component";
import {CreateCommentBlockComponent} from "./components/create-comment-block/create-comment-block.component";
import {FilterPipe} from "./pipe/FilterPipe";
import {AlertComponent} from "./components/alert/alert.component";
import {AlertService} from "./services/alert.service";

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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './views/admin/manage-student/register/register.component';
import { EditComponent } from './views/admin/manage-student/edit/edit.component';
import { ViewComponent } from './views/admin/manage-student/view/view.component';
import { ManageComponent } from './views/admin/manage-student/manage/manage.component';
import { StudentFormComponent } from './views/admin/manage-student/student-form/student-form.component';
import { HomeComponent } from './views/admin/manage-student/home/home.component';
import { CommonpanelComponent } from './views/admin/commonpanel/commonpanel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatCheckboxModule,
  MatStepperModule,
  MatFormFieldModule,
  MatSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './shared/component/signin/signin.component';


  const appRoutes: Routes = [
    { path: '', component: SigninComponent},
    { path: 'home', component: HomeComponent},
    { path: 'register',component: RegisterComponent },
    { path: 'userlist',component: ManageComponent },
  
  
  ];





@NgModule({
  declarations: [
    AppComponent,RegisterComponent, EditComponent, ViewComponent, ManageComponent, StudentFormComponent, HomeComponent, CommonpanelComponent, SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    MatInputModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatCheckboxModule,
  MatStepperModule,
  MatFormFieldModule,
  MatSelectModule,
  FormsModule,
  BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

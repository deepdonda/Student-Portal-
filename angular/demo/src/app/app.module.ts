import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherMarkPage1Component } from './teacher-mark-page1/teacher-mark-page1.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
//import { Http } from '@angular/http';
import { AddmarksComponent } from './addmarks/addmarks.component';
import { StudentResultPage1Component } from './student-result-page1/student-result-page1.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { NoticeComponent } from './notice/notice.component';
import { AllNoticeComponent } from './all-notice/all-notice.component';
import { AddassignmentComponent } from './addassignment/addassignment.component';
import { ListAssignmentStudentComponent } from './list-assignment-student/list-assignment-student.component';
import { ListSubmissionComponent } from './list-submission/list-submission.component';
import { ListAssignmentTeacherComponent } from './list-assignment-teacher/list-assignment-teacher.component';
import { UpdateDeleteNoticeComponent } from './update-delete-notice/update-delete-notice.component';
import { UpdateNoticeComponent } from './update-notice/update-notice.component';
import { AddCourceComponent } from './add-cource/add-cource.component';
import { ListCourceComponent } from './list-cource/list-cource.component';



@NgModule({
  declarations: [
    AppComponent,
    TeacherMarkPage1Component,
    RegisterComponent,
    LoginComponent,    
    AddmarksComponent,    
    StudentResultPage1Component, 
    StudentResultComponent, 
    NoticeComponent, 
    AllNoticeComponent, 
    AddassignmentComponent, 
    ListAssignmentStudentComponent, 
    ListSubmissionComponent, 
    ListAssignmentTeacherComponent, 
    UpdateDeleteNoticeComponent, 
    UpdateNoticeComponent, 
    AddCourceComponent, 
    ListCourceComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   // Http,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddmarksComponent } from  './addmarks/addmarks.component';
import { TeacherMarkPage1Component } from  './teacher-mark-page1/teacher-mark-page1.component';
import { StudentResultPage1Component } from './student-result-page1/student-result-page1.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { NoticeComponent } from './notice/notice.component';
import { AllNoticeComponent } from './all-notice/all-notice.component';
import { AddassignmentComponent } from './addassignment/addassignment.component';
import { ListAssignmentStudentComponent } from './list-assignment-student/list-assignment-student.component';
import { ListSubmissionComponent } from './list-submission/list-submission.component';
import { ListAssignmentTeacherComponent } from './list-assignment-teacher/list-assignment-teacher.component';
import {AuthGuard } from './auth.guard';
import {AdminGuard } from './admin.guard';
import { UpdateDeleteNoticeComponent } from './update-delete-notice/update-delete-notice.component';
import { UpdateNoticeComponent } from './update-notice/update-notice.component';
import { AddCourceComponent } from './add-cource/add-cource.component';
import {ListCourceComponent } from './list-cource/list-cource.component';









const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'Addmarks', component: AddmarksComponent },
  { path: 'TeacherMarkPage1Component', component: TeacherMarkPage1Component },
  { path: 'StudentResultPage1Component', component: StudentResultPage1Component },
  { path: 'StudentResultComponent', component: StudentResultComponent },
  { path: 'notice', component: NoticeComponent },
  { path: 'allnotice', component: AllNoticeComponent},
  { path: 'addassignment', component: AddassignmentComponent },
  { path: 'listAssignmentStudent', component: ListAssignmentStudentComponent },
  { path: 'listSubmission', component: ListSubmissionComponent },
  { path: 'listAssignmentTeacher', component: ListAssignmentTeacherComponent },
  { path: 'adminallnotice', component: UpdateDeleteNoticeComponent },
  { path: 'updatenotice', component: UpdateNoticeComponent },
  { path: 'addcourse', component: AddCourceComponent },
  { path: 'listOfCource', component: ListCourceComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

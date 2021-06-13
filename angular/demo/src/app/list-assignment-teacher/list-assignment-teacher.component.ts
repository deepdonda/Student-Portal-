import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list-assignment-teacher',
  templateUrl: './list-assignment-teacher.component.html',
  styleUrls: ['./list-assignment-teacher.component.css']
})
export class ListAssignmentTeacherComponent implements OnInit {

  msg: any = [];
  users: any = [];
  image: any;
  assignmentID: any;
  studentID: any;
  teacherID: any;
  i: any;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }


  ngOnInit(): void {
    this.authService.list_assignment_teacher()
      .subscribe(
        data => {
          this.users = data;

        },
        error => {
          console.error(error); this.msg = error;
        })
  }

  myfunction(user: any, event: any) {
    this.authService.setassignmentId(user._id);
    //console.log(user._id)
    localStorage.setItem('assignment_id' ,user._id)
    this.router.navigate(['/listSubmission']);
    //console.log(this.assignmentID)
  }
  onSubmit(f:NgForm)
  {

  }

}

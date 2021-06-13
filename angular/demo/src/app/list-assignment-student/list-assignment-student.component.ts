import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-assignment-student',
  templateUrl: './list-assignment-student.component.html',
  styleUrls: ['./list-assignment-student.component.css']
})
export class ListAssignmentStudentComponent implements OnInit {

  msg: any = [];
  users: any = [];
  image: any;
  assignmentID: any;
  studentID: any;
  teacherID: any;
  i: any;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }


  ngOnInit(): void {
    this.authService.list_assignment_student()
      .subscribe(
        data => {
          this.users = data;
          console.log(this.users)
          this.studentID = localStorage.getItem('email');
          this.i=0;
          while(this.i<this.users.length)
          {
            if (this.users[this.i].submission_student.indexOf(this.studentID) > -1) {
              this.users.splice(this.i, 1) 

            }
            else
            {
              this.i++;
            }
          }
        },
        error => {
          console.error(error); this.msg = error;
        })
  }
  myfunction(user: any, event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.image = file;
    }
    this.assignmentID = user._id;
    this.studentID = localStorage.getItem('email');
    this.teacherID = user.teacher;
    //console.log(this.assignmentID)
  }
  onSubmit(f: NgForm) {
    const formData = new FormData();
    formData.append('file', this.image);
    formData.append('assignmentid', this.assignmentID);
    formData.append('studentid', this.studentID);
    formData.append('teacherid', this.teacherID);

    this.http.post<any>('http://localhost:3000/assignment/submitassignment', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
    );
    this.router.navigate(['/listAssignmentStudent']);

  }


}




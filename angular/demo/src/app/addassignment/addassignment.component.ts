import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addassignment',
  templateUrl: './addassignment.component.html',
  styleUrls: ['./addassignment.component.css']
})
export class AddassignmentComponent implements OnInit {

  msg: any = [];
  a: any;
  b:any;
  public users: any=[];

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }




  ngOnInit(): void {
    this.a = localStorage.getItem('email');
    this.http.get<any>('http://localhost:3000/course/subject/'+localStorage.getItem('email')).subscribe(
        (res) => {
        console.log(res)
         this.users=res;
        },
        (err) => console.log(err),
      );
  }
  onSubmit(f: NgForm) {

    // const formData = new FormData();
    // formData.append('teacher', this.a);
    // formData.append('titale', f.controls.titale.value);
    // formData.append('description', f.controls.description.value);
    // formData.append('subject', f.controls.subject.value);

    // this.http.post<any>('http://localhost:3000/assignment/addassignment', formData).subscribe(
    //  (res) => console.log(res),
    //   (err) => console.log(err),
    //  );
    // this.router.navigate(['/allnotice']);
    // f.controls.teacher = this.a;

    // console.log(f.controls.teacher)
    this.b={'f':f.value,'a':this.a}
    this.authService.addassignment(JSON.stringify(this.b))
      .subscribe(
        data => {
          // localStorage.setItem('token' , data['token'])
          this.router.navigate(['/listAssignmentTeacher']);
        },
        error => { console.error(error); this.msg = error; }
      )
  }


}




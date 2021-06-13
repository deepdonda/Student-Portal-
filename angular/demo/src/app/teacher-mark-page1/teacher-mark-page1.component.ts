import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teacher-mark-page1',
  templateUrl: './teacher-mark-page1.component.html',
  styleUrls: ['./teacher-mark-page1.component.css']
})
export class TeacherMarkPage1Component implements OnInit {

  msg : any =[];
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }
  public users: any=[];

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/course/subject/'+localStorage.getItem('email')).subscribe(
        (res) => {
        console.log(res)
         this.users=res;
        },
        (err) => console.log(err),
      );
  }
  onSubmit(f:NgForm)
  {
    this.authService.addexamsubjectname(JSON.stringify(f.value))
    .subscribe(
      data => {
      //  console.log(data);
       // localStorage.setItem('token' , data['token'])
         this.router.navigate(['/Addmarks']);
        },
      error=>{console.error(error);this.msg = error;}
    )
  }

}

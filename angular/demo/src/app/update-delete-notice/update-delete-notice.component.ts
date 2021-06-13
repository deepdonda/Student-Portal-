import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-delete-notice',
  templateUrl: './update-delete-notice.component.html',
  styleUrls: ['./update-delete-notice.component.css']
})
export class UpdateDeleteNoticeComponent implements OnInit {

  msg: any = [];
  users:any=[];
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getallnotice()
    .subscribe(
      data => {
       this.users=data;
      },
      error => {
        console.error(error); this.msg = error;
      })
  }
  myfunction(user:any,event:any)
  {
      this.authService.setnoticeID(user._id);
      this.router.navigate(['/updatenotice']);
  }
  myfunction2(user:any,event:any)
  {
     
      this.http.delete<any>('http://localhost:3000/notice/deletenotice/'+user._id).subscribe(
        (res) => console.log(res),
        (err) => console.log(err),
      );
      this.router.navigate(['/adminallnotice']);
  }

}

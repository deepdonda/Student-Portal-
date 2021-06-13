import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-all-notice',
  templateUrl: './all-notice.component.html',
  styleUrls: ['./all-notice.component.css']
})
export class AllNoticeComponent implements OnInit {

  msg: any = [];
  users:any=[];
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }


  ngOnInit(): void {
    this.authService.getallnotice()
    .subscribe(
      data => {
       this.users=data;
       //console.log(this.users[0].file);
       console.log(data);
      },
      error => {
        console.error(error); this.msg = error;
      })
  }
  

}

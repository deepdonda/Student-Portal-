import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-list-submission',
  templateUrl: './list-submission.component.html',
  styleUrls: ['./list-submission.component.css']
})
export class ListSubmissionComponent implements OnInit {

  msg: any = [];
  public users: any=[];
  temp:boolean=false; 
  
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getallsubmission()
      .subscribe(
        data => {
          this.users=data;
          console.log(this.users)
          //console.log(data['msg'][0].email);
           
          // localStorage.setItem('token' , data['token'])
          //this.router.navigate(['/login']);
          if(this.users.length==0)
          {
            this.temp=true;
          }
        },
        error => {
          console.error(error); this.msg = error;
        })
  }
  onSubmit(f:any)
  {
    
  }

}

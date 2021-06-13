import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {

  msg: any = [];
  public users: any=[];
  
  
  temp:boolean=false; 
  exam:any;
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.exam=this.authService.getresult();
    this.authService.getmark()
      .subscribe(
        data => {
         
          
          this.users=data;
          if(this.users.length==0)
          {
            this.temp=true;
          }
          
         // console.log(this.users[0].marks)
          //console.log(data['msg'][0].email);
           
          // localStorage.setItem('token' , data['token'])
          //this.router.navigate(['/login']);
        },
        error => {
          console.error(error); this.msg = error;
        })
  }

}

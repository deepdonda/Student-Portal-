import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-addmarks',
  templateUrl: './addmarks.component.html',
  styleUrls: ['./addmarks.component.css']
})
export class AddmarksComponent implements OnInit {

  msg: any = [];
  public users: any=[];
  public mark:any[]=[];
  a:any;
  temp:boolean=false; 
  m:any;
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void
   {
    this.authService.getstudent()
      .subscribe(
        data => {
          this.users=data;
          console.log(this.users)
          //console.log(data['msg'][0].email);
           
          // localStorage.setItem('token' , data['token'])
          //this.router.navigate(['/login']);
        },
        error => {
          console.error(error); this.msg = error;
        })
  }
  myfunction(user:any,event:any)
  {

    this.a=user.email;
      this.m=event.target.value;
      this.temp=false;
      for(var i=0;i<this.mark.length;i++)
      {
        console.log(this.mark[i].user)
        console.log(this.mark[i].mark)
        if(this.a==this.mark[i].user)
        {
            this.mark[i].mark=this.m;
            this.temp=true;

        }

      }
      if(this.temp==false)
      {
        this.mark.push({user:user.email ,mark:this.m })
      }
      console.log(this.mark)
  }
  onSubmit(f:NgForm)
  {
    this.authService.addmarks(this.mark)
    .subscribe(
      res=> {
        //console.log(res); 
        //.log(res.token)
        //console.log(res['token'])
        //localStorage.setItem('token' , res['token'])
        this.router.navigate(['/listAssignmentTeacher']);
      },
      error=>{console.error(error);this.msg = error;}
    )
  }

}

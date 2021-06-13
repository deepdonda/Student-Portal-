import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg : any =[];
  a:any;
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void 
  {
    
  }
  onSubmit(f:NgForm)
  {
    this.authService.login(JSON.stringify(f.value))
    .subscribe(
      res=> {
        console.log(res);
        this.a=res 

       // .log(res.token)
        // console.log(res['token'])
        localStorage.setItem('token' , this.a.token)
        localStorage.setItem('email' , this.a.email)
        localStorage.setItem('roll' , this.a.roll)
        console.log(this.a.roll)
        
        if(this.a.roll=="student")
        {
          this.router.navigate(['/listAssignmentStudent']);
        }
        else if(this.a.roll=="teacher")
        {
          console.log("yes ................")
          
          this.router.navigate(['/listAssignmentTeacher']);
        }
        else
        {
          this.router.navigate(['/adminallnotice']);
        }
       // this.router.navigate(['']);
       
      },
      error=>{console.error(error.error.error);this.msg = error.error.error;}
    )
  }

}

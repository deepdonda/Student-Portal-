import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  msg : any =[];
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm)
  {
    this.authService.register(JSON.stringify(f.value))
    .subscribe(
      data => {
       // localStorage.setItem('token' , data['token'])
         this.router.navigate(['/login']);
        },
      error=>{console.error(error.error.error);this.msg = error.error.error;}
    )
  }
}

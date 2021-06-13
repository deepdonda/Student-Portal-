import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-cource',
  templateUrl: './list-cource.component.html',
  styleUrls: ['./list-cource.component.css']
})
export class ListCourceComponent implements OnInit {

  msg: any = [];
  users:any=[];
  temp:boolean=false; 
  a:any;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }


  ngOnInit(): void {
  }
  myfunction(user:any,$event:any)
  {
    console.log(user);
    this.a=user;
    this.http.get<any>('http://localhost:3000/course/allcource/'+user).subscribe(
        (res) => {
          console.log(res)
          this.users=res;
          if(this.users.length==0)
          {
            this.temp=true;
          }
          else
          {

            this.temp=false;
          }
        },
        (err) => console.log(err),
      );


  }
  myfunction2(user:any,event:any)
  {
     console.log(user._id);
      this.http.delete<any>('http://localhost:3000/course/deletecource/'+user._id).subscribe(
        (res) => console.log(res),
        (err) => console.log(err),
      );
      this.router.navigate(['/listOfCource']);
  }

}

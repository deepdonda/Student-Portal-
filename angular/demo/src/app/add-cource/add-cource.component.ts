import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-cource',
  templateUrl: './add-cource.component.html',
  styleUrls: ['./add-cource.component.css']
})
export class AddCourceComponent implements OnInit {

  msg: any = [];
  a: any;
  b:any;
  public users: any=[];

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }



  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {

    
    console.log(f);
    //console.log(user);
    this.authService.addcource(JSON.stringify(f.value))
    .subscribe(
      data => {
      
         this.router.navigate(['/listOfCource']);
        },
      //error=>{console.error(error.error.error);this.msg = error.error.error;}
    )
  }
  myfunction(user:any,$event:any)
  {
    console.log(user);
    this.http.get<any>('http://localhost:3000/course/course/'+user).subscribe(
        (res) => {
          //console.log(res)
          this.users=res;
        },
        (err) => console.log(err),
      );


  }

}

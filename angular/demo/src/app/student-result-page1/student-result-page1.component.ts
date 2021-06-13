import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-student-result-page1',
  templateUrl: './student-result-page1.component.html',
  styleUrls: ['./student-result-page1.component.css']
})
export class StudentResultPage1Component implements OnInit {

  msg : any =[];
  constructor(private router:Router, private authService:AuthService) { }
  ngOnInit(): void {
  }
  onSubmit(f:NgForm)
  {
    
    //console.log(f.exam.value);
    this.authService.addresultexam(JSON.stringify(f.value))
    .subscribe(
      data => {
     
        //this.authService.setresult(data.massage);
         this.router.navigate(['/StudentResultComponent']);
        },
      error=>{console.error(error);this.msg = error;}
    )
  }

}

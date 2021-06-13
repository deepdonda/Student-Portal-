import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
//import {Http} from '@angular/http';
@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  msg: any = [];
  image: any;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }


  ngOnInit(): void {
  }
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.image = file;
    }
  }
  onSubmit(f: NgForm) {
    //console.log(f.control.titale.value);
    const formData = new FormData();
    formData.append('file', this.image);
    formData.append('titale', f.controls.titale.value);
    formData.append('description', f.controls.description.value);
    this.http.post<any>('http://localhost:3000/notice/addnotice', formData).subscribe(
     (res) => console.log(res),
      (err) => console.log(err),
     );
    this.router.navigate(['/adminallnotice']);
  }


}

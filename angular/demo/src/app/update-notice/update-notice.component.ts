import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-notice',
  templateUrl: './update-notice.component.html',
  styleUrls: ['./update-notice.component.css']
})
export class UpdateNoticeComponent implements OnInit {

  msg: any = [];
  public titale: any;
  image: any;
  notice_id: any;
  notice: any;
  description: any;
  a: any
  ischage: boolean = true;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.notice_id = this.authService.getnoticeID();
    //console.log(this.notice_id)
    this.authService.notice(this.notice_id)
      .subscribe(
        data => {

          this.notice = data;
          //console.log(this.notice[0].titale)
          this.titale = this.notice[0].titale;
          this.description = this.notice[0].description;
          this.a = this.notice[0].file;
          // console.log(this.file)
        },
        error => {
          console.error(error); this.msg = error;
        })



  }
  selectImage(event: any) {
    this.ischage = false;
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.image = file;
    }
  }
  onSubmit() {
    //console.log(f.control.titale.value);
    if (this.ischage) {
      //console.log("hi");
      // const formData = new FormData();
      // formData.append('titale', this.titale);
      // formData.append('description', this.description);
      // formData.append('id',this.notice_id);
      // console.log(formData);
      this.http.post<any>('http://localhost:3000/notice/updatenotice', {titale:this.titale,description:this.description,id:this.notice_id}).subscribe(
        (res) => console.log(res),
        (err) => console.log(err),
      );
      this.router.navigate(['/adminallnotice']);
    }
    else {
      console.log("hello");
      const formData = new FormData();
      formData.append('file', this.image);
      formData.append('titale', this.titale);
      formData.append('description', this.description);
      formData.append('id',this.notice_id);
     
      this.http.put<any>('http://localhost:3000/notice/updatenotice', formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err),
      );
      this.router.navigate(['/adminallnotice']);
    }
  }
}

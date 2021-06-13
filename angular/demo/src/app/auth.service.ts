import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }
  public resulat_exam:any;
  public assignment_id:any;
  public notice_id:any;
 
  //////////////////////////////////////////////////////////////////////////////////////
  //gaurd
  loggedIN()
  {
    return !!localStorage.getItem('token')
  }
  admin()
  {

      if(localStorage.getItem('roll')=="admin")
      {
          return true;
      }
      else
      {

        return false;
      }
  }

  ////////////////////////////////////////////////////////////////////////////////
  /////auth
  register(body: any) {
   
    return this.http.post('http://127.0.0.1:3000/singup', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  login(body: any) {
   
    return this.http.post('http://127.0.0.1:3000/signin', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  getstudent()
  {
    return this.http.get('http://127.0.0.1:3000/getalluser', { headers: this.headers });
    // return this.http.post('http://127.0.0.1:3000/getalluser',  {
    //   observe: 'body',
    //   headers: new HttpHeaders().append('Content-Type', 'application/json')
    // });
  }
  addexamsubjectname(body: any)
  {
    return this.http.post('http://127.0.0.1:3000/add_exam_subject_name', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  addmarks(users:any)
  {
    const headers = new HttpHeaders({
     // 'Authorization': 'my-auth-token',
      'Content-Type': 'application/json'
   });
    
    //return this.http.get('http://127.0.0.1:3000/addmark',users);
    return this.http.post('http://127.0.0.1:3000/addmark', users, {
     headers: headers 
   })

  }
  //add_result_exam_name
  addresultexam(body: any)
  {
    return this.http.post('http://127.0.0.1:3000/add_result_exam_name', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  getmark()
  {
    return this.http.get('http://127.0.0.1:3000/getmark/'+localStorage.getItem('email'), { headers: this.headers });
  }
  setresult(a:any)
  {
    this.resulat_exam=a;
  }
  getresult()
  {
    return this.resulat_exam;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  //notice
  setnoticeID(id:any)
  {
      this.notice_id=id;
  }
  getnoticeID()
  {

      return this.notice_id;
  }
  
  addnotice(formData:any)
  {
    // const formData = new FormData();
    // formData.append('file', this.file);
    //   formData.append('pizzaname', f.controls.til.value);
    //   formData.append('pizzasize', f.controls.pizzasize.value);
    // formData.append('pizzaprice', f.controls.pizzaprice.value);
    // this.http.post<any>('http://localhost:3000/admin/addpizza', formData).subscribe(
    return this.http.post('http://127.0.0.1:3000/notice/addnotice', formData, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  getallnotice()
  {
    return this.http.get('http://127.0.0.1:3000/notice/getnotice', { headers: this.headers }); 
  }
  notice(id:any)
  {
    return this.http.get('http://127.0.0.1:3000/notice/notice/'+id, { headers: this.headers }); 
  }
  // updatenotice1(formData:any)
  // {
  //   return this.http.post('http://127.0.0.1:3000/notice/updatenotice', formData, {
  //     observe: 'body',
  //     headers: new HttpHeaders().append('Content-Type', 'application/json')
  //   });
  // }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //assignment
  addassignment(body:any)
  {
    return this.http.post('http://127.0.0.1:3000/assignment/addassignment', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  list_assignment_student()
  {
    return this.http.get('http://127.0.0.1:3000/assignment/allassignment', { headers: this.headers }); 
  }
  list_assignment_teacher()
  {
    return this.http.get('http://127.0.0.1:3000/assignment/all_t_assignment/'+localStorage.getItem('email'), { headers: this.headers });  
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////submission
//
  setassignmentId(id:any)
  {
    //this.assignment_id=id;
    console.log(this.assignment_id)
  }
  getassignmentId()
  {
    return this.assignment_id;
  }
  getallsubmission()
  {
    //console.log(this.assignment_id)
    
    return this.http.get('http://127.0.0.1:3000/assignment/allsubmission/'+localStorage.getItem('assignment_id'), { headers: this.headers }); 
  }
 ////////////////////////////////////////////////////////////////////////////////////////
 //cource
 addcource(body:any)
 {
   return this.http.post('http://localhost:3000/course/addcource', body, {
     observe: 'body',
     headers: new HttpHeaders().append('Content-Type', 'application/json')
   });
 }
}
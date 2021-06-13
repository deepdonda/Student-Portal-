import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from './auth.service'


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _authService:AuthService,private _router:Router){}
  canActivate():boolean{
    if(this._authService.admin())
    {
      return true
    }
    else
    {
       this._router.navigate(['/login'])
       return false
    }
  }
  
}

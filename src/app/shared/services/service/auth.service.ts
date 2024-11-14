import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'
  constructor(private _http : HttpClient, private router :Router) { }

  public register(user : any) : Observable<any>{
    return this._http.post(this.apiUrl,user);
  }

  public login(email : string,password :string) : Observable<any>{
    return this._http.get<any[]>(this.apiUrl,{
      params : {email, password}
    });
  }

  public logout(){
    localStorage.getItem('currentUser')
    this.router.navigate(['/login'])
  }
  
  public getCurrentuser(){
    return JSON.parse(localStorage.getItem('currentUser') || '{}')
  }

  public setCurrentuser(user:any){
    localStorage.setItem('currentUser', JSON.stringify(user))
  }

 public isAuthenticated(){
    return !!localStorage.getItem('currentUser')
  }

}

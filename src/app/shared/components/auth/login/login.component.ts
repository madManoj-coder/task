import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email  = '';
  public password = '';
  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }
  
  public onSubmit(){
    this.authService.login(this.email, this.password).subscribe((users)=>{
      if(users.length){
        localStorage.setItem('currentUser', JSON.stringify(users[0]));
        this.router.navigate(['/blogs'])
      }else {
        alert('Invalid Credentials')
      }
    })
  }


  public onRgister(){
    this.router.navigate(['/register'])
  }

}

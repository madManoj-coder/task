import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = { fname : '', lname : '', email : '', password :''}
  constructor(private authService : AuthService, private router :Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.register(this.user).subscribe(()=>{
      alert('Registration Successful')
      this.router.navigate(['/login'])
    })
  }

}

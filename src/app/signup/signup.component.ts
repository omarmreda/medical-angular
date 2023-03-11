import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private as : AuthService , private router : Router){

  }
 errorMessage : string = ''

signup(form : any){
  let data : User = form.value;
if (data.email !== undefined && data.password !== undefined){
  this.as.signup(data.email , data.password)
  .then(data =>
    {console.log(data)
    this.router.navigate(['/']);
    })
  .catch(error => {
    this.errorMessage = error.message
  })
}}
}

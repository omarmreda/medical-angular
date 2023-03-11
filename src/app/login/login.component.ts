import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(private as : AuthService){}

login(form : any){
  let data = form.value
this.as.login(data.email , data.password).then(result => console.log(result)).catch(err => console.log(err));
}
}

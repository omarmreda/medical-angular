import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthIssueComponent } from './health-issue/health-issue.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path : '', component:HomePageComponent},
  {path: 'health-issue', component: HealthIssueComponent },
  {path: 'login', component:LoginComponent},
  {path: 'sign-up', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

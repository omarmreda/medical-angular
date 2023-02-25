import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthIssueComponent } from './health-issue/health-issue.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'health-issue', component: HealthIssueComponent },
  {path:'regsiter',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

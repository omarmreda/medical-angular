import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthIssueComponent } from './health-issue/health-issue.component';

const routes: Routes = [
  {path: 'health-issue', component: HealthIssueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

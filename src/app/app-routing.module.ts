import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthguardGuard } from './authguard.guard';


const routes: Routes = [
  {path: 'dashboard',
  canActivate: [AuthguardGuard],
   component: DashboardComponent},
  {path: '' , component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from "./detail/detail.component";
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  // { path: 'login', component: LoginComponent }
  { path: 'login', canActivate: [LoginGuard] , component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

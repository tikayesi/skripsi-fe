import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import { HomeComponent } from './pages/home/home.component';
import { ReportFormComponent } from './pages/report/report-form/report-form.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'report-form',
    component: ReportFormComponent
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
    // canActivate: [AuthGuardGuard]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

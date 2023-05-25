import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseListComponent } from './case/case-list/case-list.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './report/list/list.component';
import { ReportFormComponent } from './report/report-form/report-form.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'report-form',
        component: ReportFormComponent,
      },
      {
        path: 'report-form/:id',
        component: ReportFormComponent,
      },
      {
        path: 'report-list',
        component: ListComponent,
      },
      {
        path: 'user-list',
        component: UserListComponent,
      },
      {
        path: 'user-form',
        component: UserFormComponent,
      },
      {
        path: 'user-form/:id',
        component: UserFormComponent,
      },
      {
        path: 'case-list',
        component: CaseListComponent,
      },
      {
        path: 'help',
        component: HelpComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'employee-list',
        component: EmployeeListComponent,
      },
      {
        path: 'case-detail',
        loadChildren: () => import('./case-follow-up/case-follow-up.module').then((m) => m.CaseFollowUpModule),
        // canActivate: [AuthGuardGuard]
      },
    ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

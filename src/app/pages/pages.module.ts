import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ReportFormComponent } from './report/report-form/report-form.component';
import { ListComponent } from './report/list/list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { CaseFormComponent } from './case/case-form/case-form.component';
import { CaseListComponent } from './case/case-list/case-list.component';
import { HelpComponent } from './help/help.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CaseFollowUpComponent } from './case-follow-up/case-follow-up.component';


@NgModule({
  declarations: [
    HomeComponent,
    ReportFormComponent,
    ListComponent,
    UserListComponent,
    UserFormComponent,
    CaseFormComponent,
    CaseListComponent,
    HelpComponent,
    ProfileComponent,
    EmployeeListComponent,
    CaseFollowUpComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class PagesModule { }

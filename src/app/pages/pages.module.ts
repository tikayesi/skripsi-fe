import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

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
import { UserService } from './user/user.service';
import { AgePipe } from '../shared/pipes/age.pipes';


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
    AgePipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [UserService, DatePipe],
})
export class PagesModule { }

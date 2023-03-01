import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ReportFormComponent } from './report/report-form/report-form.component';
import { ListComponent } from './report/list/list.component';


@NgModule({
  declarations: [
    HomeComponent,
    ReportFormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class PagesModule { }

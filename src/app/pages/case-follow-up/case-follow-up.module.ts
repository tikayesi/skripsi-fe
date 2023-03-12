import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseFollowUpRoutingModule } from './case-follow-up-routing.module';
import { CaseSummaryComponent } from './case-summary/case-summary.component';
import { AssesmentComponent } from './assesment/assesment.component';
import { IntervensiComponent } from './intervensi/intervensi.component';
import { TerminasiComponent } from './terminasi/terminasi.component';
import { MonevComponent } from './monev/monev.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListAssesmentComponent } from './assesment/list-assesment/list-assesment.component';
import { FormAssesmentComponent } from './assesment/form-assesment/form-assesment.component';
import { ListIntervensiComponent } from './intervensi/list-intervensi/list-intervensi.component';
import { FormIntervensiComponent } from './intervensi/form-intervensi/form-intervensi.component';
import { ListTerminasiComponent } from './terminasi/list-terminasi/list-terminasi.component';
import { FormTerminasiComponent } from './terminasi/form-terminasi/form-terminasi.component';
import { ListMonevComponent } from './monev/list-monev/list-monev.component';
import { FormMonevComponent } from './monev/form-monev/form-monev.component';


@NgModule({
  declarations: [
    CaseSummaryComponent,
    AssesmentComponent,
    IntervensiComponent,
    TerminasiComponent,
    MonevComponent,
    ListAssesmentComponent,
    FormAssesmentComponent,
    ListIntervensiComponent,
    FormIntervensiComponent,
    ListTerminasiComponent,
    FormTerminasiComponent,
    ListMonevComponent,
    FormMonevComponent,
  ],
  imports: [
    CommonModule,
    CaseFollowUpRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CaseFollowUpModule { }

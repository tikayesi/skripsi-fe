import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssesmentComponent } from './assesment/assesment.component';
import { FormAssesmentComponent } from './assesment/form-assesment/form-assesment.component';
import { ListAssesmentComponent } from './assesment/list-assesment/list-assesment.component';
import { CaseFollowUpComponent } from './case-follow-up.component';
import { CaseSummaryComponent } from './case-summary/case-summary.component';
import { FormIntervensiComponent } from './intervensi/form-intervensi/form-intervensi.component';
import { IntervensiComponent } from './intervensi/intervensi.component';
import { ListIntervensiComponent } from './intervensi/list-intervensi/list-intervensi.component';
import { FormMonevComponent } from './monev/form-monev/form-monev.component';
import { ListMonevComponent } from './monev/list-monev/list-monev.component';
import { MonevComponent } from './monev/monev.component';
import { FormTerminasiComponent } from './terminasi/form-terminasi/form-terminasi.component';
import { ListTerminasiComponent } from './terminasi/list-terminasi/list-terminasi.component';
import { TerminasiComponent } from './terminasi/terminasi.component';

const routes: Routes = [
  {
    path: '',
    component: CaseFollowUpComponent,
    children: [
      {
        path: '',
        component: CaseSummaryComponent,
      },
      {
        path: 'assesment',
        component: AssesmentComponent,
      },
      {
        path: 'assesment-list',
        component: ListAssesmentComponent,
      },
      {
        path: 'assesment-form',
        component: FormAssesmentComponent,
      },
      {
        path: 'intervensi',
        component: IntervensiComponent,
      },
      {
        path: 'intervensi-list',
        component: ListIntervensiComponent,
      },
      {
        path: 'intervensi-form',
        component: FormIntervensiComponent,
      },
      {
        path: 'terminasi',
        component: TerminasiComponent,
      },
      {
        path: 'terminasi-list',
        component: ListTerminasiComponent,
      },
      {
        path: 'terminasi-form',
        component: FormTerminasiComponent,
      },
      {
        path: 'monev',
        component: MonevComponent,
      },
      {
        path: 'monev-list',
        component: ListMonevComponent,
      },
      {
        path: 'monev-form',
        component: FormMonevComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseFollowUpRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ListComponent } from './report/list/list.component';
import { ReportFormComponent } from './report/report-form/report-form.component';

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
        path: 'report-list',
        component: ListComponent,
      },
    ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

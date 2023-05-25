import { Component } from '@angular/core';
import { ReportService } from '../report.service';
import { Router } from '@angular/router';
import { Report } from '../model/report.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private readonly service: ReportService, private router: Router) { }

  role : any = '';
  reports: any[] = []

  ngOnInit(): void {
      this.role = sessionStorage.getItem("role");
      this.getAllData()
  }

  getAllData(){
    this.service.getReportList().subscribe((res: Report[]) => {
      console.log("REPORT LIST: ", res);
      this.reports = res
    })
   }

   getDetailData(data: Report){    
    this.router.navigateByUrl('/pages/report-form/' + data.id)
  }


}

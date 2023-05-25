import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from './model/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private readonly http: HttpClient) { }

  public createReport(params: Report): Observable<any>{
    return this.http.post<any>('/api/reports', params);
  }

  public getReportList(): Observable<Report[]>{
    return this.http.get<Report[]>('/api/reports');
  }

  public getReportById(id: string): Observable<Report>{
    return this.http.get<Report>('/api/reports/' + id);
  }

  public updateReport(params: Report): Observable<any>{
    return this.http.put<any>('/api/reports', params);
  }

}

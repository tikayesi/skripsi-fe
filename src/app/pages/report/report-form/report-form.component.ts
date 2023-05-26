import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../report.service';
import { UserService } from '../../user/user.service';
import { UserDetail } from '../../user/model/user.model';
import { Report, Suspect, Victim } from '../model/report.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
  reportForm: FormGroup;

  idFromParams: string = ''

  constructor(private router: Router,
    private readonly service: ReportService,
    private readonly serviceUser: UserService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {
    this.reportForm = this.formBuilder.group({
      // Definisikan field-field yang diperlukan
      caseName: [''],
      caseNumber: [''],
      caseStatus: [''],
      reporter: [''], // Pelapor
      birthPlace: [''], // Tempat Lahir
      birthDate: [''], // Tanggal Lahir
      phoneNumber: [''], // Nomor Telepon
      gender: [''], // Jenis Kelamin
      address: [''], // Alamat
      victimForm: this.formBuilder.group({
        userDetail: [''],
        reporterRelationship: [''],
        suspectRelationship: ['']
      }),
      suspectForm: this.formBuilder.group({
        userDetail: [''],
        victimRelationship: ['']
      }),
      summaryComplaint: [''],
      kindOfViolence: [''],
      violenceForm: [''],
      locationOfIncident: [''],
      timeOfIncident: [''],
      caseHistory: [''],
      chancellorId: ['']
    });
  }

  role: any = '';
  users: UserDetail[] = [];
  user: UserDetail | null = null;
  victim: UserDetail | null = null;
  victims: Victim[] = [];
  suspect: UserDetail | null = null;
  suspects: Suspect[] = [];
  declare report: Report;
  selectedReporter: any | null = null;
  selectedReporterData: any = null;
  selectedChancellorData: any = null;


  ngOnInit(): void {
    this.role = sessionStorage.getItem("role");
  
    if (Object.keys(this.route.params).length) {
      this.route.params.subscribe((params) => {
        console.log('PARAMS: ', params);
        this.service.getReportById(params['id']).subscribe((res) => {
          console.log("RESPONSE", res);
  
          this.reportForm.get('reporter')?.setValue(res.reporter.nik);
          this.reportForm.get('chancellorId')?.setValue(res.reporter.fullName);
  
          const birthDate = this.formatBirthDate(res.reporter.birthDate.toString());
          const incidentDate = this.formatBirthDate(res.timeOfIncident.toString());
  
          this.victims = res.victims;
          this.suspects = res.suspects;
  
          // Mengisi nilai-nilai pada formulir
          this.reportForm.patchValue({
            caseName: res.caseName,
            caseNumber: res.caseNumber,
            caseStatus: res.caseStatus,
            summaryComplaint: res.summaryComplaint,
            kindOfViolence: res.kindOfViolence,
            violenceForm: res.violenceForm,
            locationOfIncident: res.locationOfIncident,
            timeOfIncident: incidentDate,
            caseHistory: res.caseHistory,
            chancellorId: res.chancellorId,
            reporter: res.reporter, // Mengatur nilai reporter dengan ID reporter dari respons
            birthPlace: res.reporter.birthPlace,
            birthDate: birthDate,
            phoneNumber: res.reporter.phoneNumber,
            gender: res.reporter.gender,
            address: res.reporter.address
          });
  
          this.selectedReporterData = res.reporter;
          this.selectedChancellorData = res.chancellorId
        });
      });
    }
  
    this.getAllData();
  }
  
  getAllData() {
    this.serviceUser.getUserDetailList().subscribe((res: UserDetail[]) => {
      this.users = res;
    });
  }
  

  onReporterChange() {
    this.selectedReporter = this.reportForm.get('reporter')?.value;
    if (this.selectedReporter) {
      const birthDate = this.formatBirthDate(this.selectedReporter.birthDate);

      this.reportForm.patchValue({
        birthPlace: this.selectedReporter.birthPlace,
        birthDate: birthDate,
        phoneNumber: this.selectedReporter.phoneNumber,
        gender: this.selectedReporter.gender,
        address: this.selectedReporter.address
      });
    } else {
      this.reportForm.patchValue({
        birthPlace: '',
        birthDate: '',
        phoneNumber: '',
        gender: '',
        address: ''
      });
    }
  }

  onChancelloerChange() {
    this.selectedChancellorData = this.reportForm.get('chancellorId')?.value;

  }

  formatBirthDate(date: string | undefined): string {
    if (date) {
      const formattedDate = new Date(date).toISOString().substring(0, 10);
      return formattedDate;
    }
    return '';
  }

  submitVictimForm() {
    const victimForm = this.reportForm.controls['victimForm'];
    if (victimForm && victimForm.valid) {
      const victimData = victimForm.value;
      this.victims.push(victimData);
      this.resetVictimForm();
    }
  }

  resetVictimForm() {
    const victimForm = this.reportForm.controls['victimForm'];
    if (victimForm instanceof FormGroup) {
      victimForm.reset();
    }
  }

  submitSuspect() {
    const suspectForm = this.reportForm.controls['suspectForm'];
    if (suspectForm && suspectForm.valid) {
      const suspectData = suspectForm.value;
      this.suspects.push(suspectData);
      this.resetSuspectForm();
    }
  }

  resetSuspectForm() {
    const suspectForm = this.reportForm.controls['suspectForm'];
    if (suspectForm instanceof FormGroup) {
      suspectForm.reset();
    }
  }

  deleteVictim(i: number) {
    Swal.fire({
      title: 'Apakah anda yakin?',
      text: "Anda tidak akan dapat mengembalikan data ini!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus data ini!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Terhapus!',
          'Data anda sudah dihapus.',
          'success'
        );
        this.victims.splice(i, 1);
      }
    });
  }

  deleteSuspect(i: number) {
    Swal.fire({
      title: 'Apakah anda yakin?',
      text: "Anda tidak akan dapat mengembalikan data ini!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus data ini!'
    }).then((result) => {
      this.victims.splice(i, 1);
      if (result.isConfirmed) {
        Swal.fire(
          'Terhapus!',
          'Data anda sudah dihapus.',
          'success'
        );
      }
    });
  }

  submitReport(value: Report) {
    value.victims = this.victims;
    value.suspects = this.suspects;
    this.report = value;

    Swal.fire({
      title: 'Apakah anda yakin akan mengajukan laporan ini?',
      showDenyButton: true,
      confirmButtonText: 'Yakin',
      denyButtonText: `Tidak Yakin`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.createReport(this.report).subscribe(() => {
          this.router.navigateByUrl('/pages/report-list');
        });
        Swal.fire('Diajukan!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Pengajuan dibatalkan', '', 'info');
      }
    });
  }
}

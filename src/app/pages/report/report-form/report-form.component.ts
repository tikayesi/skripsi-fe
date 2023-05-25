import { Component } from '@angular/core';
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
export class ReportFormComponent {
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
  users: UserDetail[] = []
  user: UserDetail | null = null
  victim: UserDetail | null = null
  victims: Victim[] = []
  suspect: UserDetail | null = null
  suspects: Suspect[] = []
  declare report: Report;


  onReporterChange() {
    // Dapatkan nilai terpilih dari pelapor
    const selectedReporter = this.reportForm.get('reporter')?.value;

    // Periksa apakah terdapat reporter terpilih
    if (selectedReporter) {
      // Mengubah format tanggal
      const birthDate = new Date(selectedReporter.birthDate);
      const formattedDate = birthDate.toISOString().substring(0, 10);

      // Isi nilai field-field yang sesuai
      this.reportForm.patchValue({
        birthPlace: selectedReporter.birthPlace,
        birthDate: formattedDate, // Menggunakan tanggal dengan format yang sesuai
        phoneNumber: selectedReporter.phoneNumber,
        gender: selectedReporter.gender,
        address: selectedReporter.address
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


  formatBirthDate(date: string | undefined): string {
    if (date) {
      const formattedDate = new Date(date).toISOString().substring(0, 10);
      return formattedDate;
    }
    return '';
  }



  ngOnInit(): void {
    this.role = sessionStorage.getItem("role");
    this.getAllData()
    if (Object.keys(this.route.params).length) {
      this.route.params.subscribe((params) => {
        console.log('PARAMS: ', params);
        this.service.getReportById(params['id']).subscribe((res) => {
          console.log("RESPONSE", res);
          const birthDate = new Date(res.reporter.birthDate);
          const formattedDate = birthDate.toISOString().substring(0, 10);
          const insidentDate = new Date(res.timeOfIncident);
          const formattedD = insidentDate.toISOString().substring(0, 10);
          this.victims = res.victims
          this.suspects = res.suspects
          this.reportForm.patchValue({
            reporter: res.reporter
          })

          this.reportForm.get('caseName')?.setValue(res.caseName)
          this.reportForm.get('caseNumber')?.setValue(res.caseNumber)
          this.reportForm.get('caseStatus')?.setValue(res.caseStatus)
          this.reportForm.get('reporter')?.setValue(res.reporter.nik)
          this.reportForm.get('birthPlace')?.setValue(res.reporter.birthPlace)
          this.reportForm.get('birthDate')?.setValue(formattedDate)
          this.reportForm.get('phoneNumber')?.setValue(res.reporter.phoneNumber)
          this.reportForm.get('gender')?.setValue(res.reporter.gender)
          this.reportForm.get('address')?.setValue(res.reporter.address)
          this.reportForm.get('summaryComplaint')?.setValue(res.summaryComplaint)
          this.reportForm.get('kindOfViolence')?.setValue(res.kindOfViolence)
          this.reportForm.get('violenceForm')?.setValue(res.violenceForm)
          this.reportForm.get('locationOfIncident')?.setValue(res.locationOfIncident)
          this.reportForm.get('timeOfIncident')?.setValue(formattedD)
          this.reportForm.get('caseHistory')?.setValue(res.caseHistory)
          this.reportForm.get('chancellorId')?.setValue(res.chancellorId)
        })
      })
    }
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

  getAllData() {
    this.serviceUser.getUserDetailList().subscribe((res: UserDetail[]) => {
      this.users = res
    })
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
        this.victims.splice(i, 1)
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
      this.victims.splice(i, 1)
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
          this.router.navigateByUrl('/pages/report-list')
        })
        Swal.fire('Diajukan!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Pengajuan dibatalkan', '', 'info')
      }
    })

  }

}

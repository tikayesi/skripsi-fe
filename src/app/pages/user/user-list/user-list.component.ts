import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private readonly service: UserService, private router: Router) { }

  users: any[] = [];
  // user: any

  ngOnInit(): void {
    this.getAllData()
  }

  getAllData(){
    this.service.getUserList().subscribe((res: User[]) => {
      this.users = res
    })
   }

  getDetailData(data: User){
    // this.user = data
    // this.router.navigateByUrl('/pages/user-form')
    console.log("Data: ", data);
    
    this.router.navigateByUrl('/pages/user-form/' + data.id)
  }

  deleteUser(i: string){
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
        this.service.deleteUser(i).subscribe(() => {
          this.getAllData()
        })
      }
    });
  }




}

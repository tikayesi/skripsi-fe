import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit{

  role : any = '';
  user: any = '';

  ngOnInit(): void {
      this.role = sessionStorage.getItem("role");
      console.log("ROle: ", this.role
      );
      
      if(this.role === 'admin'){
        this.user = 'Admin'
      } else {
        this.user = 'Detiaz'
      }
  }

  logout(){
    sessionStorage.removeItem('role')
  }


}

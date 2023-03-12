import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit{

  role : any = '';

  ngOnInit(): void {
      this.role = sessionStorage.getItem("role");
  }

  logout(){
    sessionStorage.removeItem('role')
  }


}

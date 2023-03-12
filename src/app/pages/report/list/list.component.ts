import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  role : any = '';

  ngOnInit(): void {
      this.role = sessionStorage.getItem("role");
  }

}

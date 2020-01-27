import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  public departments=[{id:1,name:'angular'},{id:2,name:'javascript'},{id:3,name:'typescript'}]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSelect(department){
   this.router.navigate(['/departments',department.id])
  }
}

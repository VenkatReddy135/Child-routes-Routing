import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
public departmentId;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //snapShot approach
    // let id=parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId=id;

    //paramMap Observable
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.departmentId=id;
    })

  }
  goPrevious(){
    if(this.departmentId>1){
    let previousId=this.departmentId-1;
    this.router.navigate(['/departments',previousId])
    return true;
    }
  }
 goNext(){
   if(this.departmentId<3){
   let nextId=this.departmentId+1;
   this.router.navigate(['/departments',nextId]);
   return true;
   }
 } 
 onOverview(){
   this.router.navigate(['overview'],{relativeTo:this.route});
 }
 onContact(){
   this.router.navigate(["contact"],{relativeTo:this.route})
 }

}

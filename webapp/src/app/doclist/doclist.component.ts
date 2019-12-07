import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router, ActivatedRoute } from '@angular/router';
import { HealthcareserviceService }  from '../healthcareservice.service'
@Component({
  selector: 'app-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.scss']
})
export class DoclistComponent implements OnInit {
private doclist:any;
  constructor(private router: Router,
    private _HealthcareserviceService: HealthcareserviceService) { }

  ngOnInit() {
this._HealthcareserviceService.getDatas('doc').subscribe(res => {
  this.doclist=res.data;
});  
}

  addnew(){
    this.router.navigate([`/adddoc/false`]);
  }

  navigate(id:any){
    this.router.navigate([`/adddoc/${id}`]);
  }

  delete(id:any){
    let payload={
      "type":"doc",
      "_id":id
    }
    this._HealthcareserviceService.deleteData(payload).subscribe(res => {
      this.ngOnInit();
    }); 
  }

  goback(){
    this.router.navigate([`/mainpage`]);
  }
}

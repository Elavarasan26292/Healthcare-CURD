import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HealthcareserviceService }  from '../healthcareservice.service'
@Component({
  selector: 'app-speclist',
  templateUrl: './speclist.component.html',
  styleUrls: ['./speclist.component.scss']
})
export class SpeclistComponent implements OnInit {
  private speclist:any;
  constructor(private router: Router,
    private  _HealthcareserviceService: HealthcareserviceService) { }

  ngOnInit() {
    this._HealthcareserviceService.getDatas('sp').subscribe(res => {
      this.speclist=res.data;
    }); 
  }

  addnew(){
    this.router.navigate([`/addspec/false`]);
  }

  navigate(id:any){
    this.router.navigate([`/addspec/${id}`]);
  }

  delete(id:any){
    let payload={
      "type":"sp",
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

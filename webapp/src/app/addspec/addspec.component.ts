import { Component, OnInit,NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HealthcareserviceService }  from '../healthcareservice.service'

@Component({
  selector: 'app-addspec',
  templateUrl: './addspec.component.html',
  styleUrls: ['./addspec.component.scss']
})
export class AddspecComponent implements OnInit {
  private specdata:any={};
  private action:any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private _HealthcareserviceService: HealthcareserviceService) { }
    
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.get('flag') == 'false'){
        this.action=false;
      }else{
        this.action=true;
        this._HealthcareserviceService.gespecifictData("sp",params.get('flag')).subscribe(res => {
          this.specdata=res.data;
        });  
      }
    });
  }

  savedata(){
    if(this.action==false){
      this._HealthcareserviceService.spcreate(this.specdata).subscribe(res => {
        this.router.navigate(['/speclist']);
      });  
    }else if(this.action==true){
      this.specdata.type="sp";
      this._HealthcareserviceService.dataupdate(this.specdata).subscribe(res => {
        this.router.navigate(['/speclist']);
      });  
    }
  }
  goback(){
    this.router.navigate(['/speclist']);
  }
} 
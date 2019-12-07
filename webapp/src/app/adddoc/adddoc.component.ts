import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HealthcareserviceService }  from '../healthcareservice.service'

@Component({
  selector: 'app-adddoc',
  templateUrl: './adddoc.component.html',
  styleUrls: ['./adddoc.component.scss']
})
export class AdddocComponent implements OnInit {
  private docdata:any={};
  private action:any;
  private speclist:any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private _HealthcareserviceService: HealthcareserviceService) { }

  ngOnInit() {
    this._HealthcareserviceService.getDatas('sp').subscribe(res => {
      this.speclist=res.data;
      this.route.paramMap.subscribe(params => {
        if(params.get('flag') == 'false'){
          this.action=false;
        }else{
          this.action=true;
          this._HealthcareserviceService.gespecifictData("doc",params.get('flag')).subscribe(res => {
            this.docdata=res.data;
            if(res.data.specalist_at && res.data.specalist_at.length>0){
              for(let i=0;i<res.data.specalist_at.length;i++){
                for(let j=0;j<this.speclist.length;j++){
                  if(res.data.specalist_at[i]._id == this.speclist[j]._id){
                    this.speclist[j].selected=true;
                  }
                }
              }
            }
          });  
        }
      });
    });
  }

  savedata(){
    this.docdata.specalist_at=[];
    for(let i=0;i<this.speclist.length;i++){
      if(this.speclist[i].selected==true){
        this.docdata.specalist_at.push(this.speclist[i])
      }
    }
    
    if(this.action==false){
      this._HealthcareserviceService.doccreate(this.docdata).subscribe(res => {
        this.router.navigate(['/doclist']);
      });  
    }else if(this.action==true){
      this.docdata.type="doc";
      this._HealthcareserviceService.dataupdate(this.docdata).subscribe(res => {
        this.router.navigate(['/doclist']);
      });  
    }
  }

  goback(){
    this.router.navigate(['/doclist']);
  }
}

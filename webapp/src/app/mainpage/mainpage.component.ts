import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(flag:any){
    if(flag=='spec'){
      this.router.navigate(['/speclist']);
    }else if(flag=="doc"){
      this.router.navigate(['/doclist']);
    }
  }
}

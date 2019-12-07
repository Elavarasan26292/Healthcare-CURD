import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component'
import { AdddocComponent } from './adddoc/adddoc.component'
import { AddspecComponent } from './addspec/addspec.component'
import { DoclistComponent } from './doclist/doclist.component'
import { SpeclistComponent } from './speclist/speclist.component'

const routes: Routes = [
  {
    path: 'mainpage',
    component: MainpageComponent
  },
  {
    path: 'adddoc/:flag',
    component: AdddocComponent
  },
  {
    path: 'addspec/:flag',
    component: AddspecComponent
  },
  {
    path: 'doclist',
    component: DoclistComponent
  },
  {
    path: 'speclist',
    component: SpeclistComponent
  }
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

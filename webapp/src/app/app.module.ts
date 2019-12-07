import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SpeclistComponent } from './speclist/speclist.component';
import { DoclistComponent } from './doclist/doclist.component';
import { AddspecComponent } from './addspec/addspec.component';
import { AdddocComponent } from './adddoc/adddoc.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    SpeclistComponent,
    DoclistComponent,
    AddspecComponent,
    AdddocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

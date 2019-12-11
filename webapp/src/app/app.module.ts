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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

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
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DoclistComponent,SpeclistComponent]
})
export class AppModule { }

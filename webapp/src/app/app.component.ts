import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DoclistComponent } from './doclist/doclist.component'
import { SpeclistComponent } from './speclist/speclist.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';

  constructor(private matDialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DoclistComponent, dialogConfig);
  }

  openDialog1() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(SpeclistComponent, dialogConfig);
  }
}

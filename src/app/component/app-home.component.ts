import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppPostDialogComponent } from '../dialog/app-post-dialog.component';
import { ITableMeta } from '../modal/table-meta';

@Component({
  selector: 'app-home',
  templateUrl: '../html/app-home.component.html',
  styleUrls: ['../css/app-home.component.css']
})
export class AppHomeComponent {

  constructor(public matDialog: MatDialog) {}

  openDialog() {
    this.matDialog.open(AppPostDialogComponent)
    .afterClosed()
    .subscribe(result => {
      if ('POST' === result) {
        console.log('posting request to server.');
      }
    });
  }
}

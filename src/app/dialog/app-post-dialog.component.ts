import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'posts-dialog',
  templateUrl: './app-post-dialog.component.html'
})
export class AppPostDialogComponent {
  primaryEnv = new FormControl('');
  constructor() { }

  postRequest() {

  }
  discardRequest() {
    return null;
  }
}

import { Component } from '@angular/core';
import { fadeinTrigger } from '../util/app-animations';

@Component({
  selector: 'app-nav',
  templateUrl: '../html/app-nav.component.html',
  styleUrls: ['../css/app-nav.component.css'],
  animations: [
    fadeinTrigger
  ]
})
export class AppNavComponent {

}

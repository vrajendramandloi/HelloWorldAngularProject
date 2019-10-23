import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './component/app.component';
import { AppErrorComponent } from './component/app-error.component';
import { AppHomeComponent } from './component/app-home.component';
import { RouterModule } from '@angular/router';
import { AppNavComponent } from './component/app-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppPostDialogComponent } from './dialog/app-post-dialog.component';
import { MatDialogModule, MatSelectModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppErrorComponent,
    AppNavComponent,
    AppPostDialogComponent
  ],
  entryComponents: [
    AppPostDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: '', component: AppHomeComponent },
      { path: 'home', component: AppHomeComponent },
      /* this ** should only be at end bcz it is a wild card for invalid url */
      { path: '**', component: AppErrorComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

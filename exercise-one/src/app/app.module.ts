import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { studentcomponent } from './student/student.component';
import { RemarksPipe } from './remarks.pipe';

@NgModule({
  declarations: [
    AppComponent,
    studentcomponent,
    RemarksPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
